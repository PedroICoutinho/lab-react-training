 import style from "./style.module.css"
 
 
 
 export function Greetings(props){
    
    return <div className = {style.greetingsCSS}>
        <p><strong>{props.lang === "de" && "Holla" || props.lang === "fr" && "Bonjour"} {props.children}</strong></p>
    </div>

 }