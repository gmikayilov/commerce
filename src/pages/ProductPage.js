// src/pages/ProductPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../features/product/productActions';
import { addToCart } from '../features/cart/cartSlice';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.product);
  const status = useSelector(state => state.product.status);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Failed to load product.</p>;
  }

  return (
    <Container className="product-page">
      <Row className="mt-4">
      {product && (
        <>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
              </Card>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h4>${product.price}</h4>
              <Button variant="primary" className="me-2"  onClick={handleAddToCart}>Add to Cart</Button>
              <Button variant="success">Purchase Now</Button>
            </motion.div>
          </Col>
        </>
      )}
      </Row>
    </Container>
  );
};

export default ProductPage;
