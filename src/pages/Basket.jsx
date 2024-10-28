import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/Product/ProductCard'

const Basket = () => {
  const basket =  useSelector((state) => state.basket.value)
  return (
    <div className="container">
    <div className="sevimli">
      <div className='product_wrapper'>
        {basket.map((item)=> (
            <ProductCard item={item} key={item.id}/>
            ))}
      </div>  
    </div>
  </div>
  )
}

export default Basket