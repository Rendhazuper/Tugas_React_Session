import React from 'react';
import Utama from './Component/utama';
import Gallery from './Component/Gallery';
import Cart from './Component/Cart';
import {Link} from 'react-router-dom';
import {Navbar,Nav,Container} from 'react-bootstrap';

class App extends React.Component{
  render(){
    return(
      <div>
        <>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/utama">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/utama">Home</Nav.Link>
      <Nav.Link href="/Kontak">Kontak</Nav.Link>
      <Nav.Link href="/Gallery">Gallery</Nav.Link>
      <Nav.Link href="/Cart">Cart</Nav.Link>
      <Nav.Link href="/tentangsaya">About me</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    
      <p><Utama /></p>
      </>
      </div>
    );
  }
}
export default App;