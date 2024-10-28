import React from 'react'
import ProductCard from './ProductCard'; // ProductCard importi
import Sort from './Sort'; // Sort importi
const List = () => {
    

  return (
      <div>
      <h1>Product List</h1>
      <Sort setSort={setSort} /> {/* Sort komponentini ulash */}
      <div className="product-list">
        {sortedProducts.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}


export default List