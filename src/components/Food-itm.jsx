import React, { useState } from "react";
import Item from "./item";

const Fooditm = ({ foods }) => {
  const [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item) => {
    if (!activeItems.includes(item)) {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <ul className="list-group">
      {foods.map((item) => (
        <Item
          key={item}
          foods={item}
          bought={activeItems.includes(item)}
          handleBuybutton={() => onBuyButton(item)}
        />
      ))}
    </ul>
  );
};

export default Fooditm;
