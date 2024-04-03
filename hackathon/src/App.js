import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <div class="bg-blue-500">
        <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
          <NavBar/>
        </nav>
      </div>

      {/* Content */}
    </div>
  );
}

export default App;
