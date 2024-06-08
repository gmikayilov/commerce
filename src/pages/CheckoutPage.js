// src/pages/CheckoutPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart'
import { Container, Row, Col, Form } from 'react-bootstrap';


const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const [billingDetails, setBillingDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleOrderSubmit = () => {
    if (!shippingDetails.name || !shippingDetails.address || !shippingDetails.city || !shippingDetails.postalCode) {
      alert('Please fill in all shipping details');
      return;
    }
    if (!billingDetails.cardNumber || !billingDetails.expiryDate || !billingDetails.cvv) {
      alert('Please fill in all billing details');
      return;
    }
    // Here you would typically dispatch an action to place the order
    console.log('Order placed:', { shippingDetails, billingDetails, cartItems });
    dispatch(clearCart());
    navigate('/order-confirmation');
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Checkout</h1>
      <Row className="mt-4">
        <Col md={8}>
          <Cart />
        </Col>
        <Col md={4}>
          <h2>Shipping Information</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Name" 
                value={shippingDetails.name} 
                onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formShippingAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="1234 Main St"
                value={shippingDetails.address}
                onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formShippingCity">
              <Form.Label>City</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="City"
                value={shippingDetails.city}
                onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formShippingZip">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Postal Code"
                value={shippingDetails.postalCode}
                onChange={(e) => setShippingDetails({ ...shippingDetails, postalCode: e.target.value })}
                required
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
