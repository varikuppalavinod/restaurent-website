import React,{Fragment,useState} from "react"
import Header from "./Components/Layout/Header"
import Meals from "./Components/Meals/Meals"
import Cart from "./Components/Cart/Cart"
import CartProvider from "./Store/CartProvider"

const App=()=>{

  const[cartisshown,setcartisshown]=useState(false)

  const showcarthandler=()=>{
    setcartisshown(true)
  }
  const hidecarthandler=()=>{
    setcartisshown(false)
  }
  return(
    <CartProvider>
      {cartisshown && <Cart onClose={hidecarthandler}/>}
      <Header onshowcart={showcarthandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  )
}
export default App;