import React from "react";
import styles from "./item.module.css";

const Item = ({ foods, handleBuybutton, bought }) => {
  /*const [isBought, setIsBought] = useState(false);

  const handleClick = () => {
    setIsBought(true);
    handleBuybutton();
  };*/

  return (
    <li
      className={`${styles["hj-item"]} list-group-item ${
        bought ? "active" : ""
      }`}
      /*style={{ backgroundColor: isBought ? "yellow" : "" }}*/
    >
      <span className={styles["hj-item-span"]}>{foods}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuybutton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
