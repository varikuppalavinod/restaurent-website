import {useContext} from "react"
import CartImage from "../Cart/CartImage"
import  classes from "./HeaderCartButton.module.css"
import Cartcontext from "../../Store/Cartcontext"

const HeaderCartButton=(props)=>{
    const cartctx=useContext(Cartcontext)

    const numberofcartitems=cartctx.items.reduce((currnumber,item)=>{
     return currnumber+item.amount
    },0)
    return(
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartImage/>
        </span>
        <span>your cart</span>
        <span className={classes.badge}>{numberofcartitems}</span>
        </button>
    )
}
export default HeaderCartButton