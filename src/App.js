import './App.css';
import Header from './components/Header';
import MainSlider from './components/MainSlider';
import Brand from './components/Brand';
import CommingSoon from './components/CommingSoon';
import Mission from './components/Mission';
import Gamers from './components/Gamers';
import Features from './components/Features';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Footer from './components/Footer';
import Contact from './components/Contact';
// import Faq from './components/Faq';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Value from './components/Value';
import Trailer from './components/Trailer';
import Advisors from './components/Advisors';

function App() {
  return (
    <Router basename='/katanainu/build'>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <MainSlider/>
            <Brand/>
            <CommingSoon/>
            <Mission/>
            <Value/>
            <Trailer/>
            <Gamers/>
            <Features/>
            <Timeline/>
            <Team/>
            <Advisors/>
            <Contact/>
          </Route>
          {/* <Route exact path="/faq">
            <Faq/>
          </Route> */}
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
