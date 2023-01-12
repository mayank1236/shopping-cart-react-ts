import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Navbar = () => {
    const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to={"/"} as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to={"/store"} as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to={"/about"} as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            {cartQuantity > 0 ? <Button 
                onClick={openCart}
                style={{width: '3rem', height: '3rem', position: "relative"}}
                variant="outline-primary"
                className="rounded-circle"
            >
                <svg fill="none"  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <div 
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        color: "white", 
                        width: "1.5rem", 
                        height: "1.5rem", 
                        position: "absolute", 
                        bottom: 0, 
                        right: 0,
                        transform: "translate(25%, 25%)"
                    }}    
                >{ cartQuantity }</div>
            </Button> : null}
        </Container>
    </NavbarBs>
  )
}

export default Navbar