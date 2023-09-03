import React from 'react'
// import { useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import Rating from './Rating'
import './Cart.css'
import { CartState } from '../Context/Context'

const SingleProduct = ({product}) => {
    const{
      state:{ cart },
      dispatch,
    } = CartState();

  return (
    <div className='products'>
      <Card className='card' style={{padding:"0px"}}>
        <Card.Img variant='top' src={product.image} alt={product.name} className='image'/>
        {/* Card Body */}
        <Card.Body className='cardBody'>
            <Card.Title className='title'>{product.name}</Card.Title>
            <Card.Subtitle style={{paddingBottom:10}}>
              <span>${product.price.split(".")[0]}</span>
              {product.fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>4 Days Delivery</div>
              )}
              <Rating rating={product.rating} />
            </Card.Subtitle>

          {/* Toggling btween add to cart and remove from cart buttom */}

          {cart.some((p) => p._id === product._id) ? (
            <Button variant="danger"
              onClick={() => dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
            })}>
              Remove from Cart
            </Button>
          ) : (
            <Button onClick={() => dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
            })}disabled={!product.inStock}>
                {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>            
          )} {/* ButtonToggle End */}

        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct
