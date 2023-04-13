import style from "./style.module.css"

export function Random(props) {
    return <div>
        <p className={style.randomCSS}>Random value between {props.min} and {props.max} = {Math.floor(Math.random() * props.max + props.min)}</p>
        </div>
}