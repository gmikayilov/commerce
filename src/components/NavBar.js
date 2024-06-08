// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NavBar = () => {
  const cart = useSelector((state) => state.cart);
  const { items: cartItems } = cart;

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  console.log('cartItems')
  console.log(cartItems)


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Mega Heap</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        {cartItemCount > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <LinkContainer to="/checkout">
                <Nav.Link>
                  <FaShoppingCart />
                  <Badge pill variant="light" className="ml-1">
                    {cartItemCount}
                  </Badge>
                </Nav.Link>
              </LinkContainer>
          </motion.div>
        )}
          <Nav.Link as={Link} to="/login">
            <FaUser /> Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
