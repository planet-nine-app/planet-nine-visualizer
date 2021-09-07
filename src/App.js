import './App.css';
import Input from './components/Input';

function App() 
{
  console.log(Input.data)
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Planet Nine Economy Visualizer
        </h1>
        <Input />
      </header>
    </div>
  );
}

export default App;
