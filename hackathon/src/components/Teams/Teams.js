import SingleTeam from "./SingleTeam";

export default function Teams() {

  const teamPageStyle = {
    textAlign:"center"
  }

  return (
    <div className="Teams">
      <h1 className='text-white text-align:center text-xl' style={teamPageStyle}>List of Hackathon Teams</h1>
      <div className="grid grid-cols-3">
          <SingleTeam/>
          <SingleTeam/>
          <SingleTeam/>
          <SingleTeam/>
          <SingleTeam/>
          <SingleTeam/>
          <SingleTeam/>
          <SingleTeam/>
          <SingleTeam/>
      </div>
    </div>
  );
}