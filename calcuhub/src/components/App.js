import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import navField from './navField/navField';
import tipCalculator from './calculators/TipCalculator/TipCalculator'
import pyTCalculator from './calculators/PyTCalculator/PyTCalculator'
import quadFCalculator from './calculators/quadFCalculator/quadFCalculator'

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Route exact path="/" component={navField}/>
          <Route path="/calculators/0" component={tipCalculator} />
          <Route path="/calculators/1" component={pyTCalculator} />
          <Route path="/calculators/2" component={quadFCalculator} />
      </div>
    </Router>
  );
}

export default App;
