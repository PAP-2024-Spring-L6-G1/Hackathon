import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useSignOut from 'react-auth-kit/hooks/useSignOut';



export default function NavRight() {
    const isAuthenticated = useIsAuthenticated();
    const signOut = useSignOut();
    return (
        <div>
            {/* If signed out */}
            { !isAuthenticated ?
                <>
                    <a className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-300 text-sm text-gray-900 font-semibold rounded-xl transition duration-200" href="/Hackathon/#/login">Sign In</a>
                    <a className="lg:inline-block py-2 px-6 lg:mr-3 bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold rounded-xl transition duration-200" href="/Hackathon/#/signup">Sign Up</a>
                </>

                /* If signed in as admin */
                // <a className="lg:inline-block py-2 px-6 lg:mr-3 bg-red-500 hover:bg-red-600 text-sm text-white font-semibold rounded-xl transition duration-200" href="/Hackathon/#/admin">Admin Panel</a>
                :
                /* If signed in as any user*/
                <button onClick={() => {alert("Signed out"); signOut(); window.location.reload();}} className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-300 text-sm text-gray-900 font-semibold rounded-xl transition duration-200">Sign Out</button>
            }
        </div>)
}