import "./tags.css";
import { useState } from "react";

const TagsIngredientes = (props) => {
  const [novoIngrediente, setNovoIngrediente] = useState("");

  const aoAdicionarNovoIngrediente = (evento) => {
    evento.preventDefault();
    if (novoIngrediente.trim() !== "") {
      props.adicionarIngrediente(novoIngrediente.trim());
      setNovoIngrediente("");
    }
  };

  const aoRemoverIngrediente = (index) => {
    props.removerIngrediente(index);
  };

  return (
    <div className="tags">
      <label>{props.label}</label>
      <div className="tags-input-wrapper">
        <input
          type="text"
          value={novoIngrediente}
          onChange={(evento) => setNovoIngrediente(evento.target.value)}
          placeholder={props.placeholder}
        />
        <button
          className="tag-botao"
          type="button"
          onClick={aoAdicionarNovoIngrediente}
        >
          Adicione
        </button>
      </div>

      <div className="tags-container">
        {props.ingredientes.length > 0 &&
          props.ingredientes.map((ingrediente, index) => (
            <span key={index} className="tag-ingrediente">
              {ingrediente}
              <button type="button" onClick={() => aoRemoverIngrediente(index)}>
                X
              </button>
            </span>
          ))}
      </div>
    </div>
  );
};

export default TagsIngredientes;
