import './App.css';
import PowerKnob from './components/PowerKnob';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Future home of the Planet Nine Economy Visualizer
        </h1>
        <h2>Power to Nineum Rarity Distribution</h2>

        <PowerKnob />
      </header>
    </div>
  );
}

export default App;
