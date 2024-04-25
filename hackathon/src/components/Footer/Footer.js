import './Footer.css';

export default function Footer() {

  const footerStyle = {
    display:"inline-block"
  }

  return (
      <div className="footer justify-items-center py-2">
        <div className="text-sm text-gray-300" style={footerStyle}>
          <p>Created by the Students of</p>
          <p className="text-gray-200 hover:text-gray-500 font-semibold"><a target="_blank" href="https://www.computingforall.org/pre-apprenticeship/">Computing for All's Pre-Apprenticeship Program</a></p>
          <p>Level 6 Group 1 Spring 2024!</p>
        </div>
        <div className="text-sm text-gray-200 px-20 font-semibold" style={footerStyle}>
          <p><a className="hover:text-gray-500" target="_blank" href="https://github.com/orgs/PAP-2024-Spring-L6-G1/projects/2/views/1">☑️ Project Status Board</a></p>
          <p><a className="hover:text-gray-500" target="_blank" href="https://github.com/PAP-2024-Spring-L6-G1/Hackathon/deployments">☁️ Check Deployments</a></p>
          <p><a className="hover:text-gray-500" target="_blank" href="https://github.com/PAP-2024-Spring-L6-G1/Hackathon">🧑‍💻 View GitHub Repo</a></p>
        </div>
      </div>
    );
}