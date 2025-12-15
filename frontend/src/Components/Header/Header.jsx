import React from "react";
import "./Header.css";
import{assets} from '../../assets/assets'
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h2>Order your favourite dish here</h2>
        <p>
          From hunger to happiness in minutes. Order your favorite meals on
          ChowNow and get fast, reliable delivery whenever you need it.
        </p>
        <button className="btn">View Menu</button>
      </div>
    </header>
  );
};

export default Header;
