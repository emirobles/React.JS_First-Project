import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import Productos from './components/paginas/Productos'
import Items from './components/paginas/Contacto'
import { render } from '@testing-library/react';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from './components/ItemDetailContainer';
import { useEffect, useState } from 'react';
import { getItem } from './api';

/*<ItemCount stock={10} initial={1} onAdd={onAdd} />*/

const App = () => {
  const [item, setItem] = useState({});
  useEffect(() => {
    getItem().then(valor => setItem(valor));
  }, []);
  const onAdd = (valor) => {
    console.log(`Compraste ${valor} productos`);
  }
  return (
    <div className="App">         
      <Navbar></Navbar>      
      <ItemListContainer nombre="Andres" apellido="Nazzari" ></ItemListContainer>
        
      <ItemDetailContainer item= {item}/>          
         
      <footer className='App-footer'>
        <p> By Emilce Robles </p>
      </footer>
    </div>
  );
}



export default App;
