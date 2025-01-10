import React, { useState } from 'react'
import Gif from "../assets/bg0.gif";
import './Home.css'
import { Category } from '../Category';
import Product from '../components/Product/Product';
import { dummydata } from "../dummydata";

function Home() {
  let [cate , setCategory] = useState(dummydata)

  function filterProduct(category) {
    const updateData = dummydata.filter((item)=>(item.category===category))
    setCategory(updateData)
  }
  
  return (
    <div className='home'>

      <div className="hero-bg">
        <img src={Gif} alt="" />
      </div>

      <div className="category-section">

      {Category.slice(0,5).map((item)=>

        <div className="category-card" onClick={()=>{
          filterProduct(item.name)

        }}>
          <img src={item.image} alt="" />
          <span>{item.name}</span>
        </div>

      )}

      </div>

      <h1>Trending Products</h1>
      <div className="product-section">
        {cate.slice(0,7).map((item)=>(
          <Product name={item.name} price={item.price} image={item.image} id={item.id}/>
        ))}
      </div>


    </div>
  )
}

export default Home
