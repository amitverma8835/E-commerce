import React from 'react';
import './Cart.css';
import CartCard from '../../components/CartCard/CartCard';
import { useSelector } from 'react-redux';
import ec from "../../assets/emptycart.png";

function Cart() {
  const items = useSelector((state) => state);
  let total = items.cart.reduce((a,b)=>a+b.price,0)

  return (
    <div className='cart'>
      {items.cart.length <= 0 ? (
        <div className='empty-cart'>
          <img src={ec} alt="Empty Cart" />
          <h1>Empty Cart</h1>
        </div>
      ) : (
        <div className="cartCart-section">
          {items.cart.map((item) => (
            <CartCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
            />


          ))}

          <div className="price-section">
            <span>Total Products :{items.cart.length}</span>

            <span>Total Price:{total}</span>

          </div>
        </div>

      )}
    </div>
  );
}

export default Cart;
