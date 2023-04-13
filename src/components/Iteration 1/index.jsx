import style from "./style.module.css"

export function IdCard (props){

    return (
        <>
       
        <div className = "container-principal">
            <div className= {style.containerPerfil}>
                <div>
                <img src={props.img} alt={props.cardTitle} />
                </div>
                <div>
                <p> <strong>First Name:</strong>    {props.firstName}</p>
                <p> <strong>Last Name:</strong>    {props.lastName}</p>
                <p> <strong>Gender:</strong>    {props.gender}</p>
                <p> <strong>Height:</strong>    {props.height}</p>
                <p> <strong>Birth:</strong>    {props.birth}</p>
                </div>
            </div>
        </div>

        </>
    )


}