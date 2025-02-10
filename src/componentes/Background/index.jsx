import "./background.css";
import React, { useRef } from "react";

const Background = (props) => {
    const refs = props.categoriaDeComida.map(() => useRef(null));
    
    const rolarParaItem = (index) => {
        refs[index].current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      };
  return (
    <div className="background">
      <img src="/imagens/pratosomente.png" alt="" />

      <div className="categorias-de-receitas">
        <ul>
          {props.categoriaDeComida.map((listaCategoria, index) => (
            <li onClick={() => rolarParaItem(index)} key={index}>{listaCategoria.categoria}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Background;
