
import classes from "./Cart.module.css"
import Modal from "../UI/Modal"

const Cart=(props)=>{
    const cartItems = (
        <ul className={classes['cart-items']}>
          {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      );
    return(
    <Modal>
        <div>{cartItems}</div>
        <div className={classes.total}>
        <div>Total Amount</div>
        <div>35.99</div>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>close</button>
        <button className={classes.button}>open</button>
        </div>
    </Modal>
    )
}
export default Cart