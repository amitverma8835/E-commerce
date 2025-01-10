import React from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri";
import './CartCard.css'
import image1 from "../../assets/image1.jpg";
import { useDispatch } from "react-redux";
import { RemoveItem } from '../../redux/cartSlice';



function CartCard({name,price,image,id}) {
  let dispatch = useDispatch()
  return (
    <div className='Cartcard'>
       <div className="left-card">
        <img src={image} alt="" />
        <div className="name-price">
                <span>{name}</span>
                <span>Rs{price}</span>
        </div>

       </div>
       <div className="right-card">
        <button onClick={()=>{
          dispatch(RemoveItem(id))
          alert("Prodcut Removed Successfully")
        }}>Remove<RiDeleteBin5Fill/> </button>
       </div>
      
    </div>
  )
}

export default CartCard
