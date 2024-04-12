
export default function NavLeft() {
    return (
        <ul className="hidden lg:flex lg:flex lg:items-center lg:w-auto lg:space-x-6 ml-5">
            <li><a className="text-sm text-gray-200 hover:text-gray-500 py-2 px-4 font-semibold" href="/Hackathon">Home</a></li>
            <li><a className="text-sm text-gray-200 hover:text-gray-500 py-2 px-4 font-semibold" href="/Hackathon/teams">Teams</a></li>
        </ul>)
}