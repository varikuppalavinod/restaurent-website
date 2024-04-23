import React,{Fragment} from "react"
import mealsimage from "../../asserts/image.jpg"
import classes from"./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"
const Header=(props)=>{
    return(
        <Fragment>
            <div className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onshowcart}/>
            </div>
            <div className={classes["main-image"]}>
                <img src={mealsimage} alt="this is restaurent"/>
            </div>
        </Fragment>
    )
}
export default Header