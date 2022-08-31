import logo from './logo.svg';
import kenshin from './kenshin.JPG';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import Productos from './components/paginas/Productos'
import Items from './components/paginas/Items'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
      </Router>


      
      <footer className='App-footer'>
        <p> By Emilce Robles </p>
      </footer>
    </div>
  );
}

export default App;
