import './App.css';
import Navbar from './sections/navbar.js'
import Profile from './sections/abutme.js'
import IDO1 from './sections/wci_1.js'
import IDO2 from './sections/wci_2.js'
import XP from './sections/xp.js'
import CONTACT from './sections/contactme';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <IDO1/>
      <IDO2/>
      <XP/>
      <CONTACT/>
    </div>
  );
}

export default App;
