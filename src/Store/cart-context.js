import React ,{useContext} from "react"

const CartContext=React.createContext({
  items:[],
  Totalamount:0,
  addItem:(item)=>{},
  removeItem:(id)=>{}
}) 
export  default CartContext