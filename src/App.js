import './App.css';
import Buttons from './Components/Buttons/Buttons';
import Timer from './Components/Timer/Timer';

function App() {
  return (
    <div className="App">
      <h1>Workout Clock</h1>
      <Timer/>
      <Buttons/>
    </div>
  );
}

export default App;
