import './Footer.css';

export default function Footer() {
    return (
      <div className="footer justify-items-center py-4">
        <div className="text-xs text-gray-300">
          <p>Created by the Students of</p>
          <p className="text-gray-200 hover:text-gray-500 font-semibold"><a target="_blank" href="https://www.computingforall.org/pre-apprenticeship/">Computing for All's Pre-Apprenticeship Program</a></p>
          <p>Level 6 Group 1 Spring 2024!</p>
        </div>
        <div className="py-2">
          <a className="text-sm text-gray-200 hover:text-gray-500 px-8 font-semibold" target="_blank" href="https://github.com/orgs/PAP-2024-Spring-L6-G1/projects/2/views/1">&#123; Project Status Board &#125;</a>
          <a className="text-sm text-gray-200 hover:text-gray-500 px-8 font-semibold" target="_blank" href="https://github.com/PAP-2024-Spring-L6-G1/Hackathon/deployments">&#123; Check Deployments &#125;</a>
          <a className="text-sm text-gray-200 hover:text-gray-500 px-8 font-semibold" target="_blank" href="https://github.com/PAP-2024-Spring-L6-G1/Hackathon">&#123; View GitHub Repo &#125;</a>
        </div>
      </div>
    );
}