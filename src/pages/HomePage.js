// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/product/productActions';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col, Form, Button, FormControl } from 'react-bootstrap';
import { motion } from 'framer-motion';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  // const productStatus = useSelector((state) => state.product.status);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1 className="text-center mt-4">Welcome to Our Store</h1>
      <Form.Group inline>
        <FormControl
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-sm-2 ml-sm-5"
        ></FormControl>
      </Form.Group>
      <Row className="mt-4">
        {filteredProducts.map(product => (
          <Col md={4} key={product.id} >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
