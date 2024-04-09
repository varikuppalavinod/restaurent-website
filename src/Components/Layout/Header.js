import React,{Fragment} from "react";
import mealsimage from"../../asserts/image.jpg"
import classes from"./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"


const Header=(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
               
               <HeaderCartButton></HeaderCartButton>
                
            </header>
            <div  className={classes["main-image"]}>
           <img src={mealsimage} alt="a table full of delicious food"/>
            </div>
        </Fragment>
    )
}
export default Header