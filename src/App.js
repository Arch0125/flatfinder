import logo from './logo.svg';
import './App.css';
import LoginButton from './modules/auth/components/LoginButton';
import Navbar from './common/components/Navbar';
import Homepage from './pages/Homepage';
import Land from './modules/auth/components/LandingPage';
function App() {
  return (
    <div className="App">
     <Homepage/>
{/* <Land/> */}
    </div>
  );
}

export default App;
