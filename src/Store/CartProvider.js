import {useReducer} from "react"
import Cartcontext from "./Cartcontext";

const defaultCartstate={
    items:[],
    totalAmount:0,
}

const cartReducer=(state,action)=>{
    if(action.type==="ADD"){
        const updateditems=state.items.concat(action.item)
        const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount;
        return{
            items: updateditems,
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultCartstate;
}
const CartProvider=(props)=>{
    const[cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartstate)
    const addItemToCartHandler=item=>{
        dispatchCartAction({type:"ADD",item:item})
    }

    const removeItemFromCartHandler=id=>{
        dispatchCartAction({type:"REMOVE",id:id})
    }

    const cartcontext={
        items:cartState,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler

    }
    return(
        <Cartcontext.Provider value={cartcontext}>
            {props.children}
        </Cartcontext.Provider>
    )
}
export default CartProvider