
import {useContext} from "react"
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartContext from "../../Store/cart-context"
import CartItems from "./CartItems"
const Cart=props=>{
  const cartCtx=useContext(CartContext)

  const cartItemAddHandler=(item)=>{
    console.log("adding item",item)
    cartCtx.addItem({ ...item,amount:1})
  }
  const cartItemRemoveHandler=(id)=>{
      cartCtx.removeItem(id)
  }

  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`
  const hasitems=cartCtx.items.length>0
  const cartitems= cartCtx.items.map((item)=>(
    <CartItems
     key={item.id}
     name={item.name}
     amount={item.amount}
     price={item.price}
     onAdd={cartItemAddHandler.bind(null, item)}
     onRemove={cartItemRemoveHandler.bind(null,item.id)}
     />
  ))
  
    return(
        <Modal onClose={props.onClose}>
        <ul className={classes["cart-items"]}>
        {cartitems}
        </ul>
        <div className={classes.total}>
        <span>total amount</span>
        <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>close</button>
        {hasitems&&<button className={classes.button}>order</button>}
        </div>
        </Modal>
    )
}
export default Cart


/*
import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cart-context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    console.log("adding items:",item)
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
   // cartCtx.removeItem(id);
  };

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = cartCtx.items.map((item) => (
    <CartItems
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={cartItemAddHandler.bind(null, item)} // Changed to cartItemAddHandler
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
*/