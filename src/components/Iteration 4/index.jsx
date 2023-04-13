import css from "./style.module.css"

export function Boxcolor (props){
   
    const style = {
        backgroundColor : `rgb(${props.red},${props.green},${props.blue})`,
        height : "50px"
    }

   return <div className= {css.boxcolor} style = {style}>
        <p>rgb({props.red},{props.green},{props.blue})</p>
   </div> 


}