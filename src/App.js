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
import Faq from './components/Faq';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Value from './components/Value';
import Trailer from './components/Trailer';
import Advisors from './components/Advisors';
import Brands from './components/Brands';
import Links from './components/Links';
import SingleBlog from './components/pages/SingleBlog';
import News from './components/News';
import Ecosystem from './components/Ecosystem';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <MainSlider/>
            <Brand/>
            <Mission/>
            <Value/>
            <Ecosystem/>
            <Trailer/>
            <Gamers/>
            <Features/>
            <Brands/>
            <Timeline/>
            <Team/>
            <Advisors/>
            <News/>
            <CommingSoon/>
            <Contact/>
          </Route>
          <Route exact path="/faq">
            <Faq/>
          </Route>
          <Route exact path="/links">
            <Links/>
          </Route>
          <Route path="/blog/:id" component={SingleBlog}>
            <SingleBlog/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
