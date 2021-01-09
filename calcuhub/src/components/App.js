import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import navField from './navButton/navField';
import tipCalculator from './calculators/TipCalculator/TipCalculator'
// import './calculators'

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Route exact path="/" component={navField}/>
          <Route path="/calculators/0" component={tipCalculator} />
          {/* <Route path="/calculators/1" component={pyTCalculator} />
          <Route path="/calculators/2" component={tipCalculator} /> */}
      </div>
    </Router>
  );
}

export default App;
