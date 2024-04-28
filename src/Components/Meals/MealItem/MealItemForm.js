
import {useRef,useState} from "react"
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input"
const MealItemForm=props=>{
    const[amountisvalid,setamountisvalid]=useState(true)
    const amountinputref=useRef()
    const submithandler=(event)=>{
       event.preventDefault()

       const enteredamount=amountinputref.current.value;
       const enteredamountnumber= +enteredamount

       if(enteredamount.trim().length===0 
       ||enteredamountnumber<1 
       || enteredamountnumber>5){
        setamountisvalid(false)
        return
       }
       props.onaddtocart(enteredamountnumber)
    }
    return(
     <form className={classes.form} onSubmit={submithandler}>
     <Input
      ref={amountinputref}
      label="Amount"
      input={{
      id:"amount",
        type:"number",
        min:"1",
        max:"5",
        step:"1",
        defaultValue:"1"
     }}/>
     <button>+ Add</button>
     {!amountisvalid && <p>please enter a valid number (1-5)</p>}
     </form>
    )
}
export default MealItemForm