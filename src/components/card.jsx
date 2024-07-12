import React from "react";
import { useDispatch } from 'react-redux';
import { Button, Card } from "react-bootstrap";

import { addItem } from '../redux/slices/cartSlice';
import "bootstrap/dist/css/bootstrap.min.css"

const ProductCard = (props) => {
    const dispatch = useDispatch();
    return (
        <Card style={{ width: '18rem' }} className="m-2">
      <Card.Img variant="top" src={ props.value.image }/>
      <Card.Body>
        <Card.Title>{props.value.title}</Card.Title>
        <Card.Text>{ props.value.description }</Card.Text>
        <Card.Title>MRP: ₹{props.value.price}</Card.Title>
        <Button onClick={() => dispatch(addItem({ name:props.value.title, price:props.value.price }))} variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    );
}

export default ProductCard;