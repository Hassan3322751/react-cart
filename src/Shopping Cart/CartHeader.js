import React from 'react'
import {Navbar, Container, Nav, FormControl, Badge, Dropdown } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { CartState } from '../Context/Context'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartHeader = () => {

  const {
    state:{cart},
    dispatch,
    productDispatch
  } = CartState();

  return (
    <>
      <Navbar bg='dark' className='sticky-header ' >
         <Container style={{boxShadow:"none", width:"100%", border:"none"}}>
            <Navbar.Brand style={{color:'white'}}>
              <Link to="/"> 
                <b>Store</b>
              </Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
              <FormControl style={{width: '50vw'}}
                Placeholder='Search for product'
                className='m-auto'
                onChange={(e)=>
                  productDispatch({
                    type:"FILTER_BY_SEARCH",
                    payload: e.target.value
                  })
                }
                />
            </Navbar.Text>  

            <Nav>
            <Dropdown>
              <Dropdown.Toggle variant='success' 
              style={{width: "85%", height:"100%", backgroundColor:"green"}}>
                <FaShoppingCart color="white" />
                <Badge bg=''>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{minWidth: '70vw'}} className="dropdown-menu-right" align={"end"}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((product)=>{
                      return(
                      <span className='cartItem' key={product._id}>
                        <img src={product.image} alt={product.name} className='cartItemImg' />
                        <span className='cartItemDetail'>
                          <span>{product.name}</span>
                          <span>$ {product.price.split(".")[0]}</span>
                        </span>
                        <AiFillDelete fontSize={'20px'} style={{cursor:'pointer'}}
                        onClick={()=>dispatch({
                          type:'REMOVE_FROM_CART',
                          payload:product,
                        })}/>
                      </span>
                    )})}
                    <Link to="/cart">
                      <Button className='btnStyle' variant='success'>
                          Go To Cart
                      </Button>
                    </Link>
                     
                  </>
                  ):(
                    <span style={{padding: 10}}> Nothing </span>
                  )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
         </Container>
      </Navbar>
    </>
  )
}

export default CartHeader