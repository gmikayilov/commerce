// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card as={Link} to={"/product/"+product.id}>
      <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary me-2" block>Add to Cart</Button>
        <Button variant="secondary" block>Buy Now</Button>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
