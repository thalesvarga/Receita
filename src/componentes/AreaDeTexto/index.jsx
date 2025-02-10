import "./areaDeTexto.css"

const AreaDeTexto = (props) =>{
    return(
        <div className="Area-de-texto">
           <label>{props.label}</label>
            <textarea
              value={props.valor}
              onChange={(evento) => props.aoAlterado(evento.target.value)}
              placeholder={props.placeholder}
              required={props.obrigatorio}
            ></textarea>
            </div>
        
    )
}

export default AreaDeTexto