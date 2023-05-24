import logo from './logo.svg';
import './App.css';
import text from './ko.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {console.log(text, `---zzz`)}
        <p>
          {text.goLogin}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text.ok}
        </a>
      </header>
    </div>
  );
}

export default App;
