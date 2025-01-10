import React, { useState } from 'react'
import './Shop.css'
import { Category } from "../../Category";
import { dummydata } from '../../dummydata';
import Product from '../../components/Product/Product';
import { FaShopify } from "react-icons/fa";



function Shop() {
         let [cate , setCategory] = useState(dummydata)
        
          function filterProduct(category) {
                if (category==="All") {
                        setCategory(dummydata)
                }
                else{
                        const updateData = dummydata.filter((item)=>(item.category===category))
                        setCategory(updateData)
                }
         
          }

  return (
    <div className='shop'>

        <div className="heading">
                <span>Shop</span>
                <FaShopify/>
        </div>

        
              <div className="category-section">
        
              {Category.map((item)=>
        
                <div className="category-card" onClick={()=>{
                  filterProduct(item.name)
        
                }}>
                  <img src={item.image} alt="" />
                  <span>{item.name}</span>
                </div>
        
              )}
        
              </div>

              <div className="product-section">
        {cate.map((item)=>(
          <Product name={item.name} price={item.price} image={item.image} id={item.id}/>
        ))}
      </div> 
      
    </div>
  )
}

export default Shop
