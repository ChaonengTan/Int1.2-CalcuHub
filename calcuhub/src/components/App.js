import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import Index from './Index'
import navList from './navButton/navField';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Route exact path="/" component={navField}/>
          {/* <Route path="/details/:id" component={POPOSDetails} /> */}
      </div>
    </Router>
  );
}

export default App;
