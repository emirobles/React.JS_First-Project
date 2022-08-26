import logo from './logo.svg';
import kenshin from './kenshin.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Próximamente podrás conocer la nueva App
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={kenshin} alt="logo" />       
        
        <a
          className="App-link"
          href="https://www.instagram.com/kenshinanimestore/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Siguenos en Instagram
        </a>
      </header>
      <footer className='App-footer'>
        <p> By Emilce Robles </p>
      </footer>
    </div>
  );
}

export default App;
