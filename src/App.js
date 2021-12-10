import './App.css';
import Header from './components/Header';
import MainSlider from './components/MainSlider';
import Brand from './components/Brand';
import Countdown from './components/Countdown';
import EcoSystem from './components/EcoSystem';
import LiveMatch from './components/LiveMatch';
import LiveBottom from './components/LiveBottom';
import Gamers from './components/Gamers';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainSlider/>
      <Brand/>
      <Countdown/>
      <EcoSystem/>
      <LiveMatch/>
      <LiveBottom/>
      <Gamers/>
    </div>
  );
}

export default App;
