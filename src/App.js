import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


// --------- pages -------
import Faq from './pages/Faq';
import Links from './pages/Links';
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/faq">
            <Faq/>
          </Route>
          <Route exact path="/links">
            <Links/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
