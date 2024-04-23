
import Cartcontext from "./Cartcontext";
const CartProvider=(props)=>{
    const addItemToCartHandler=item=>{}

    const removeItemFromCartHandler=id=>{}

    const cartcontext={
        items:[],
        totalAmount:0,
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