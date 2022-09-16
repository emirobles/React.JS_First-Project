import { BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Contact from "./components/paginas/Contacto";
import Inicio from "./components/paginas/Inicio";
import Inicio from "./components/paginas/Productos";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Inicio/>}/>
            <Route path="/product/:id" element={<Contact />} />
        </Routes>
    </BrowserRouter>    
)


export default Router;