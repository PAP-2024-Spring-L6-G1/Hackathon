import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <div class="bg-blue-500">
        <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
          <ul class="hidden lg:flex lg:flex lg:items-center lg:w-auto lg:space-x-6 ml-5">
            <li><a class="text-sm text-gray-400 hover:text-gray-500 py-2 px-4 font-semibold" href="#">Home</a></li>

            <li><a class="text-sm text-gray-400 font-semibold py-2 px-4" href="#">Teams</a></li>
          </ul>
          <div className='semibold text-xl'>Countdown</div>
          <div>
            <a class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-semibold  rounded-xl transition duration-200" href="#">Sign In</a>
            <a class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold rounded-xl transition duration-200" href="#">Sign up</a>
          </div>
        </nav>
      </div>

      {/* Content */}
    </div>
  );
}

export default App;
