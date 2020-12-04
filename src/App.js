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
import SinglePageView from './pages/SinglePageView';

import ReactPlayer from 'react-player/lazy';

import { russianCollection, asianCollection, southAmericanCollection } from './data';
import Header from './components/Header';

console.log(asianCollection);

function App() {
  const russianDescription = {
    title: 'Russian Culture',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
  };
  const asianDescription = {
    title: 'Asian Culture',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
  };
  const southAmericanDescription = {
    title: 'South American Culture',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
  };

  return (
    <div className="App">
    <Router>
      <Header />
      <div class="container">
        
          <div class="sidebar">
            <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/south-american">South American Selection</Link>
                    </li>
                    <li>
                      <Link to="/russian">Russian Selection</Link>
                    </li>
                    <li>
                      <Link to="/asian">Asian Selection</Link>
                    </li>
                  </ul>
                </nav>
          </div>
          <div class="page-content">
            <Switch> 
              <Route path="/russian">
                <RussianSelection videos={russianCollection} description={russianDescription} />
              </Route>
              <Route path="/asian">
                <AsianSelection videos={asianCollection} description={asianDescription} />
              </Route>
              <Route path="/south-american">
                <SouthAmericanSelection videos={southAmericanCollection} description={southAmericanDescription} />
              </Route>
              <Route path="/video">
                <SinglePageView />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        
      </div>
      </Router>
    </div>
  );
}

export default App;