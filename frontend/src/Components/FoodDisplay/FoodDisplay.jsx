import React, { useContext } from "react";

const FoodDisplay = ({ category, setCategory }) => {
  const food_List = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <div>
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import { food_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";

export default FoodDisplay;
