import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import Index from './Index'

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="Route">
            <Route exact path="/" component={Index}/>
            {/* <Route path="/Breakout" component={Breakout} />
            <Route path="/FruitCatch" component={FruitCatchGame} /> */}
          </div>
      </div>
    </Router>
  );
}

export default App;
