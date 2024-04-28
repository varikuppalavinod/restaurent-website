import {useContext} from "react"
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
import cartcontext from "../../../Store/cart-context"

const MealItem=props=>{
    const cartctx=useContext(cartcontext)
    const price=`$${props.price}`

    const addtocarthandler=amount=>{
       cartctx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price,
       })
    }
    return(
        <li className={classes.meal} >
        <div>
        <h2>{props.name}</h2>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
       <div>
        <MealItemForm onaddtocart={addtocarthandler}/>
       </div>

        </li>
    )
}
export default MealItem