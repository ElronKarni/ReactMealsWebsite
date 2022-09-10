import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const mealPrice = `$${props.mealPrice.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.mealName,
      amount: amount,
      price: props.mealPrice,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.mealDescription}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
