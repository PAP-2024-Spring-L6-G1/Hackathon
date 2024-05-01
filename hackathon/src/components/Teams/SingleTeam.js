export default function SingleTeam() {

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
        <div className="Single Team" style={SingleTeamStyle}>
            <img src="./teampic.jpeg" alt="Team Pfp"/>
            <p className="text-white text-center p-5">Team Description</p>
            <p className="text-white">This team is creating a hackathon website</p>
            <p className="text-white text-center p-5">Team Members</p>
            <ul className="text-white" style={styleList}>
                <li>Rory</li>
                <li>Yusuf</li>
                <li>Howard</li>
            </ul>
        </div>
    );
}