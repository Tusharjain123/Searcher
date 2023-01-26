import './App.css';
import Front from './components/Front';
import Navbar from './components/Navbar';
import Lost from './components/Lost';
import Found from './components/Found';
import { Route, Routes} from 'react-router-dom';
import Background from './components/Background';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes> 
      <Route path='/lostItem' element = {<Lost/>}></Route>
      <Route path='/foundItem' element = {<Found/>}></Route>
      <Route exact path='/' element={<><Front /><Background/></>}/>
      <Route path="/lost" element={<><Background/><Lost /></>} />
      <Route path="/found" element={<><Background/><Found /></>}/>
      <Route path="/history" element={<History/>}/>
      </Routes>
    </div>
  );
}

export default App;
