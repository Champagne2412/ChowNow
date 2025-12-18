import React, { useContext } from "react";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multiple-field">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" /> <br />
        <input type="text" placeholder="Street" />
        <div className="multiple-field">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multiple-field">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="number" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</p>
            </div>
          </div>
          <button className="btn">Proceed to payment</button>
        </div>
      </div>
    </form>
  );
};
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";

export default PlaceOrder;
