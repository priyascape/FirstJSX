import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style ={{fontSize: 60, textAlign: 'left'}}>Hello Dojo!</h1>
      <h2 style ={{fontSize: 30, textAlign: 'left'}}>Things I need to do:</h2>
      <ul className ="list-items">
        <li key= "*" > Learn React</li>
        <li key= "*" > Climb Mt. Everest</li>
        <li key= "*" > Run a marathon</li>
        <li key= "*" > Feed the dogs</li>
      </ul>
    </div>
  );
}

export default App;
