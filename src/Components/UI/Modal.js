import {Fragment} from "react"
import classes from "./Modal.module.css"
import ReactDOM from "react-dom"

const Backdrop=props=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
const Modaloverlay=props=>{
    return(
        <div className={classes.modal}>
         <div className={classes.content}>{props.children}</div>

        </div>
    )
}

const portalelement=document.getElementById("overlays")
  
const Modal=props=>{
return(
<Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalelement)}
    {ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,portalelement)}
</Fragment>
)
}
export default Modal