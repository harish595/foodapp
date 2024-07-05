import React, { useContext } from 'react'
import "./placeholder.css";
import { StoreContext } from '../../context/StoreContext';
const Placeholder = () => {
  const {getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() ===0 ? 0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total : </b>
              <b>${getTotalCartAmount() === 0 ? 0 :getTotalCartAmount() + 2}</b>
            </div>

          </div>
          <button onClick={()=>navigate("/order")}>Proceed to checkout</button>
        </div>
      </div>
    </form>
  )
}

export default Placeholder
