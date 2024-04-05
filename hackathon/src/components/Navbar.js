import NavLeft from "./NavLeft";
import NavCenter from "./NavCenter";
import NavRight from "./NavRight";

export default function NavBar() {
    
    const navStyle = {
        backgroundColor: "#252525",
        borderBottomColor: "#444444",
        borderBottomWidth: "2px"
    };

    return (
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white" style={navStyle}>
            <NavLeft/>
            <NavCenter/>
            <NavRight/>
        </nav>
        )
}