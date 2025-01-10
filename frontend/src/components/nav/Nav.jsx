import React from 'react'
import { FaShopify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";



function Nav() {
        let dispatch = useDispatch()

        let items = useSelector(state=>state)
        console.log(items)
  return (
    <div className='nav'>
        <div className="top-nav">
               <Link to='/'> <div className="logo">
                        <span>V-Shop</span>
                        <FaShopify/>
                </div></Link>

                <form className="search-box">
                        <input type="text" name="" id="" placeholder='Search Items' />

                        <button>< FaSearch/> </button>
                </form>

                <Link to={'/cart'}><div className="cart-box">
                        <FaCartPlus/>
                        <span>{items.cart.length}</span>
                </div></Link>
        </div>

        <div className="bottom-nav">
               <Link to="/"> <li>Home</li> </Link>
               <Link to='/shop'> <li>Shop</li> </Link>
               <Link to='/cart'> <li>Cart</li> </Link>
               <Link to='/contact'> <li>Contact</li> </Link>
        </div>
      
    </div>
  )
}

export default Nav
