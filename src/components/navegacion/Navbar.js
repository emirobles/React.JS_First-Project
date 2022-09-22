import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrito from '../CartWidget.js';
import logo from '../kenshin.JPG';
import CartWidget from '../CartWidget';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand Link to = "../app.js">
                        <img
                            src={logo}
                            width="150"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Kenshin logo"
                        />
                    </Navbar.Brand>                    
                    <Nav className="me-auto">                        
                        <Nav.Link to={"/"}>Inicio</Nav.Link>
                        <Nav.Link to={`/productos/`}>Productos</Nav.Link>
                        <Nav.Link to={`/contacto/`}>Contacto</Nav.Link>
                    </Nav>
                    <CartWidget></CartWidget>
                </Container>
            </Navbar>            
        </>
    );
}

export default ColorSchemesExample;