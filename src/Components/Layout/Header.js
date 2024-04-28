import React, {Fragment} from "react"
import mealsimage from "../../asserts/image.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header=props=>{
    return(
        <Fragment>
       <header className={classes.header}>
       <h1>react meals</h1>
       <HeaderCartButton onClick={props.onshow}/>
       </header>
       <div className={classes["main-image"]}>
       <img src={mealsimage} alt ="full of delicious food"/>
       </div>
        </Fragment>
    )
}
export default Header