import React from "react";
import ProductCard from "../Components/Product/ProductCard";
import { useSelector } from "react-redux";

const Favorite = () => {
  const fav = useSelector((state) => state.favorite.value)
  
  return (
    <div className="container">
      <div className="sevimli">
        <div className='product_wrapper'>
          {fav.map((item)=> (
              <ProductCard item={item} key={item.id}/>
              ))}
        </div>  
      </div>
    </div>
  );
};

export default Favorite;
