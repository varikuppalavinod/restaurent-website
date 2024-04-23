import {Fragment} from "react";
import ReactDOM from "react-dom"
import classes from "./Modal.module.css"

const Backdrop=(props)=>{
  return <div className={classes.backdrop} onClick={props.onClose}/>

}
const ModalOverlay=props=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}

            </div>

        </div>
    )
}
const portalelement=document.getElementById("overlays")

const Modal=props=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>,portalelement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalelement)}
        </Fragment>
    )
}
export default Modal