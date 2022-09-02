import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrito from '../CartWidget.js';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Kenshin Anime Sore</Navbar.Brand>
                    <Nav className="me-auto">                        
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Items</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>            
        </>
    );
}

export default ColorSchemesExample;