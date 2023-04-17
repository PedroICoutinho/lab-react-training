import visa from "../../assets/Imagens/visa.png"
import master from "../../assets/Imagens/master.png"
import style from "./style.module.css"

export function CreditCard(props){
    let type = props.type === "Visa" ? visa:master
    let number = props.number.slice(-4)
    let bgc = { backgroundColor:  props.bgColor,
                    color: props.color
                }

    return (
        <div className={style.card} style={bgc}>
            <img className={style.bandeira} src={type} alt="bandeira do cartão"></img>
            <div className={style.numberCard}>•••• •••• •••• {number}</div>
            <div className={style.textCard}>Expires <span>{props.expirationMonth}/{props.expirationYear}</span> <span>{props.bank}</span></div>
            <div className={style.textCard}>{props.owner}</div>
        </div>
    )
}