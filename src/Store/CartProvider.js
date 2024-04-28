

import {useReducer} from "react"
import Cartcontext from "./cart-context"

const defaultcartstate={
    items:[],
    totalAmount:0
}

const cartreducer=(state,action)=>{   
    //addition operation  
    if(action.type==="Add"){
      
        const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount
        const existingcartitemindex=state.items.findIndex(
            (item)=>item.id===action.item.id)
            const existingcartitem=state.items[existingcartitemindex]
           let updatedItems;
           
            if(existingcartitem){
               
             const   updatedItem={
                   ...existingcartitem,
                   amount:existingcartitem.amount+action.item.amount
                }
                updatedItems=[...state.items];
                updatedItems[existingcartitemindex]=updatedItem;
            }else{
               // updatedItem={...action.item}
                updatedItems=state.items.concat(action.item)
            }

    //    const updateditems=state.items.concat(action.item)
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
      //removing operation
    if (action.type === 'Remove') {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        };
      }
  return defaultcartstate
}
const CartProvider=props=>{

    const[cartstate,dispatchcartaction]=useReducer(cartreducer,defaultcartstate)
    const additemcarthandler=(item)=>{
        dispatchcartaction({type:"Add",item:item})
    }
    const removeitemcarthandler=(id)=>{
        dispatchcartaction({type:"Remove",id:id})
    }
    const cartContext={
        items:cartstate.items,
        totalAmount:cartstate.totalAmount,
        addItem: additemcarthandler,
        removeItem:removeitemcarthandler,
    }
    return(
     <Cartcontext.Provider value={cartContext}>
        {props.children}
     </Cartcontext.Provider>
    )
}
export default CartProvider

