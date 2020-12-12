// import logo from './ScriptHammerCom.png';
// import hammer from './Wooden-hammer-01.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="https://crudgames.com/logo192.png" alt=""></img> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <img src={hammer} className="App-hammer" alt="wooden mallet" /> */}
        <span className="App-hammer">
          <img src="https://crudgames.com/logo192.png" alt=""></img>
        </span>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
