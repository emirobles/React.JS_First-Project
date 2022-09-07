import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import Productos from './components/paginas/Productos'
import Items from './components/paginas/Items'
import { render } from '@testing-library/react';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Contador from "./components/Contador";


const App = () => {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />      
      <Navbar></Navbar>
      <CartWidget />
      <Contador></Contador>
      <ItemListContainer nombre="Andres" apellido="Nazzari"></ItemListContainer>      
      <footer className='App-footer'>
        <p> By Emilce Robles </p>
      </footer>
    </div>
  );
}



export default App;
