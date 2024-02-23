import logo from './logo.svg';
import './App.css';
import SideMenuBar from './Component/SideMenuBar'; 
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <SideMenuBar />
       
      </div>
    </Router>
  );
}

export default App;
