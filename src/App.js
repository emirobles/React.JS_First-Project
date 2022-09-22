import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
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
  
  return (
    <>    
    <Routes>
      <Route path="/components/navegacion/Navbar" element={<Navbar/>}></Route>      
      <Route path="/components/ItemListContainer" element={<ItemListContainer nombre="Andres" apellido="Nazzari"/>}></Route>
      <Route path="/components/ItemDetailContainer" element={<ItemDetailContainer item={item} />}></Route>
    </Routes>  
    <div className="App"> 
      <footer className='App-footer'>
        <p> By Emilce Robles </p>
      </footer>
    </div>
    </>
  );
}



export default App;
