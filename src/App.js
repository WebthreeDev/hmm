import './App.css';
import Header from './components/Header';
// import MainSlider from './components/MainSlider';
// import Brand from './components/Brand';
// import Countdown from './components/Countdown';
// import EcoSystem from './components/EcoSystem';
// import LiveMatch from './components/LiveMatch';
// import LiveBottom from './components/LiveBottom';
// import Gamers from './components/Gamers';
// import Features from './components/Features';
// import Timeline from './components/Timeline';
// import Team from './components/Team';
import Footer from './components/Footer';
// import Contact from './components/Contact';
// import Faq from './components/Faq';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        {/* <Switch>
          <Route exact path="/">
            <MainSlider/>
            <Brand/>
            <Countdown/>
            <EcoSystem/>
            <LiveMatch/>
            <LiveBottom/>
            <Gamers/>
            <Features/>
            <Timeline/>
            <Team/>
            <Contact/>
          </Route>
          <Route exact path="/faq">
            <Faq/>
          </Route>
        </Switch> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
