import axios from "axios";
import { useState, useEffect } from 'react';

export default function Teams() {

  const teamPageStyle = {
    textAlign:"center"
  }

  const [teamsData, setTeamsData] = useState([]);
  function MakeRequest() {
    axios.get("https://hackathon-api-mcpt.onrender.com/team") 
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        // TODO: utilize useState to store data
        // app will have no knowledge of data after request
        setTeamsData(res.data);
      } 
      else {
        console.log(res.status);
      }
    });
  }

  useEffect(MakeRequest, []);

  const SingleTeamStyle = {
      backgroundColor: "#252525",
      margin: "50px",
      padding: "20px",
      borderRadius: "25px"
  };

  const styleList = {
      listStyle: "disc"
  }

  return (
    <div className="Teams">
      <h1 className='text-white text-align:center text-xl' style={teamPageStyle}>List of Hackathon Teams</h1>
      <div className="grid grid-cols-3">
          {teamsData.map((item, i) => (
            <div key={i} className="Single Team" style={SingleTeamStyle}>
              <img src="./teampic.jpeg" alt="Team Pfp"/>
              <p className="text-white text-center p-5">{item.teamName}</p>
              <p className="text-white text-center p-5">Team Members</p>
              <ul className="text-white" style={styleList}>
                {item.teamMembers.map((member, m) => (
                  <li key={m}>{member}</li>
                )
              )}
              </ul>
            </div>

          ))}
      </div>
    </div>
  );
}