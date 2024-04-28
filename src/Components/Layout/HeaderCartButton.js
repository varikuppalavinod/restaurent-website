import {useContext} from "react"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import Cartcontext from "../../Store/cart-context"
const HeaderCartButton=props=>{
    const cartctx=useContext(Cartcontext)
     console.log(cartctx)
     const numberofcartitems=cartctx.items.reduce((currnumber,item)=>{
        return  currnumber+item.amount
     },0)
    return <button className={classes.button} onClick={props.onClick} >
    <span className={classes.icon}>
    <CartIcon/>
    </span>
    <span> Your Cart</span>
    <span className={classes.badge}>{numberofcartitems}</span>

    </button>
}
export default HeaderCartButton