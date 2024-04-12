import './Footer.css';

export default function Footer() {
    return (
      <div className="footer justify-items-center py-4">
        <a className="text-sm text-gray-200 hover:text-gray-500 py-4 px-8 font-semibold" href="https://github.com/orgs/PAP-2024-Spring-L6-G1/projects/2/views/1">&#123; Project Status Board &#125;</a>
        <a className="text-sm text-gray-200 hover:text-gray-500 py-4 px-8 font-semibold" href="https://github.com/PAP-2024-Spring-L6-G1/Hackathon/deployments">&#123; Check Deployments &#125;</a>
        <a className="text-sm text-gray-200 hover:text-gray-500 py-4 px-8 font-semibold" href="https://github.com/PAP-2024-Spring-L6-G1/Hackathon">&#123; View GitHub Repo &#125;</a>
      </div>
    );
}