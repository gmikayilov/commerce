// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';
import { Table, Button, Form } from 'react-bootstrap';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <Table striped hover>
      <tbody>
        {/* Example product row */}
        {cartItems.map(item => (
          <tr key={item.id} as={"li"}>
            <td>
                {item.name} 
            </td>
            <td>
              {item.quantity}
            </td>
            <td>
              ${item.price * item.quantity}
            </td>
            <td>
              <Button variant='' onClick={() => dispatch(removeFromCart(item))}>X</Button>
            </td>
          </tr>
        ))}
        { totalAmount>0 &&
          <tr>
            <td>Total:</td>
            <td></td>
            <td>
              ${totalAmount.toFixed(2)}
            </td>
            <td>
              <Button variant='' onClick={() => dispatch(clearCart())}>Clear</Button>
            </td>
          </tr>
        }
      </tbody>
    </Table>
  )
};

export default Cart;
