import logo from './logo.svg';
import './App.css';

function App() {
   const items = ['item 1', 'item 2', 'item 3'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           <h1>List of items</h1>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
        </a>
      </header>
    </div>
  );
}

export default App;
