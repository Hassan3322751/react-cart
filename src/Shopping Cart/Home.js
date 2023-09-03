import React from 'react'
import { CartState } from '../Context/Context.js'
import SingleProduct from './Single Product.js';
import Filters from './Filters.js';
import './Cart.css'

const Home = () => {

  const { 
    state:{Products},
    productState : {byStock, byFastDelivery, sort, searchQuery, byRating},
  } = CartState();

  const transformProducts = ()=>{
    let sortedProducts = Products;

    if(sort){
      sortedProducts = sortedProducts.sort((a,b) => 
        sort === "lowToHigh" ? a.price-b.price : b.price-a.price
      ) 
    }

    if(byStock){
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
    }

    if(byRating){
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating)
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter(
        (prod) => prod.name.toLowerCase().includes(searchQuery)  
      )
    }

    return sortedProducts
  }

  return (
    <div className="Home">
        <Filters />
        <div className="productsContainer">
        {
          transformProducts().map((product,index)=>{
            return <SingleProduct product={product} key={index} />
          })
        }
        </div>      
    </div>
  )
}

export default Home
