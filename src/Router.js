import { BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Contact from "./components/paginas/Contacto";
import Inicio from "./components/paginas/Inicio";
import Inicio from "./components/paginas/Productos";
import Cart from "./components/Cart";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Inicio/>}/>
            <Route path="/product/:id" element={<Contact />} />
            <Route path="/cart" element ={<Cart/>}/>
        </Routes>
    </BrowserRouter>    
)


export default Router;