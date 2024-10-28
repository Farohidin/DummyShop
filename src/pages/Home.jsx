import Nav from '../Components/Nav'
import Saidbar from '../Components/Saidbar'
import Product from '../Components/Product/Product'
import { useState } from 'react';

const Home = () => {
    const [category, setCategory] = useState("");

  return (
    <>
      <Saidbar setCategory={setCategory} />
      <Product category={category} />
    </>
  )
}

export default Home