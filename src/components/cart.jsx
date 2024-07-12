import React from 'react';
import { useSelector } from 'react-redux'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


const Cart = () => {
  const item = useSelector(state => state);
  
  const total = item.cart.reduce((a, b) => a + b.price, 0);

	return(
		<>
      <Alert variant="success">
        <Alert.Heading>Cart</Alert.Heading>
        <hr />
       	<div className="d-flex">
          <h3 className="mr-5"> Total item: { item.cart.length } </h3>
       		<h3> Your Total: ₹{total}/- </h3>
       	</div>
        <div className="d-flex justify-content-end">
          <Button  variant="outline-success">
            View Cart
          </Button>
        </div>
      </Alert>
    </>
	);
}

export default Cart;