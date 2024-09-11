import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { CartReducer,productReducer } from './Reducer.js';
const Cart = createContext();
faker.seed(99);

const Context = ({children}) => {
  
  const Products = [...Array(60)].map(()=>({
    _id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatarGitHub(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.commerce.price({min:1, max:6}),
  }))

  const [state, dispatch] = useReducer(CartReducer,{
    Products: Products,
    cart:[]
  })
  
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock:false,
    byFastDelivery:false,
    byRating:0,
    bySearchQuery:"",
  })

  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
        {children}
    </Cart.Provider>
  )
}

export const CartState = ()=>{
  return useContext(Cart);
}
export default Context