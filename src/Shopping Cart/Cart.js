import React, { useEffect, useState } from 'react'
import { Button,ListGroup,Col,Row } from 'react-bootstrap'
import { CartState } from '../Context/Context'
import Rating from './Rating'
import { AiFillDelete } from "react-icons/ai";
import { Form,Image } from 'react-bootstrap'
const Cart = () => {
  const { 
    state: { cart },
    dispatch,
  } = CartState();
  
  const [total, setTotal] = useState(0);
  
  useEffect(()=>{
    setTotal(
      cart.reduce((acc,curr) => acc + Number(curr.price) * curr.qty,0)
    );
  },[cart])

  return (
    <>
       <div className="Home">
        <div className="productsContainer">
          {/* nice cart */}
          <ListGroup>
            {
              cart.map((product)=>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <Image src={product.image} alt={product.name} fluid rounded />
                    </Col>
                    <Col>
                      <span>{product.name}</span>
                    </Col>
                    <Col>$ {product.price}</Col>
                    <Col>
                      <Rating rating={product.rating}></Rating>
                    </Col>

                    {/* Change QTY form control */}

                    <Col>
                      <Form.Control as='select' value={product.qty}
                      onChange={(e) => dispatch({
                          type:"CHANGE_CART_QTY",
                          payload:{
                            id: product._id,
                            qty: e.target.value
                        }
                      })}>
                        {[...Array(Number(product.rating * 2)).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>

                  {/* Delete from cart button */}
                    
                    <Col>
                      <span type="button" variant="light"
                        onClick={() => dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                        })
                      }>
                        <AiFillDelete fontSize="20px" />
                      </span>
                    </Col>      
                  </Row>
                </ListGroup.Item>
              )
            }
          </ListGroup>
        </div>
        <div className="filters summary">
          <span className='title'>Subtotal ({cart.length}) items</span>
          <span style={{fontWeight:700, fontSize: '1.3rem'}}>Total: ${total}</span>
          <Button type="button" disabled={cart.length === 0} style={{width:'95%',margin:'0 10px'}}>
            Proceed to Checkout
          </Button>
        </div>
       </div>
    </>
  )
}

export default Cart
