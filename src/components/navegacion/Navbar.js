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
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="150"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Kenshin logo"
                        />
                    </Navbar.Brand>                    
                    <Nav className="me-auto">                        
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Items</Nav.Link>
                    </Nav>
                    <CartWidget></CartWidget>
                </Container>
            </Navbar>            
        </>
    );
}

export default ColorSchemesExample;