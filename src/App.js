import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import RussianSelection from './pages/RussianSelection.js';
import AsianSelection from './pages/AsianSelection.js';
import SouthAmericanSelection from './pages/SouthAmericanSelection.js';

import ReactPlayer from 'react-player/lazy';

import { russianCollection, asianCollection, southAmericanCollection } from './data';
import Header from './components/Header';

// pages

/*
  
  create array collection of video objects url from umc youtube channel. 
  import them into app
  pass specific to specific component
  place them into react video player
  add css
*/

console.log(asianCollection);

function App() {
  return (
    <div className="App">
      <Header />
      <div class="container">
        <Router>
          <div class="sidebar">
            <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/russian">Russian Selection</Link>
                    </li>
                    <li>
                      <Link to="/asian">Asian Selection</Link>
                    </li>
                    <li>
                      <Link to="/south-american">South American Selection</Link>
                    </li>
                  </ul>
                </nav>
          </div>
          <div class="page-content">
            <Switch> 
              <Route path="/russian">
                <RussianSelection videos={russianCollection} />
              </Route>
              <Route path="/asian">
                <AsianSelection videos={asianCollection} />
              </Route>
              <Route path="/south-american">
                <SouthAmericanSelection videos={southAmericanCollection} />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
