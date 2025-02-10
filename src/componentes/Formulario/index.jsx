import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";
import TagsIngredientes from "../tags";
import AreaDeTexto from "../AreaDeTexto";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [tipoDeComida, setTipoDeComida] = useState("");
  const [imagem, setImagem] = useState("");
  const [listaIngredientes, setListaIngredientes] = useState([]);
  const [receita, setReceita] = useState("");

  const adicionarIngrediente = (novoIngrediente) => {
    setListaIngredientes((prevIngredientes) => [...prevIngredientes, novoIngrediente]);
  };

  const removerIngrediente = (index) => {
    setListaIngredientes((prevIngredientes) =>
      prevIngredientes.filter((_, i) => i !== index)
    );
  };

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoReceitaCadastrada({
      nome,
      tipoDeComida,
      imagem,
      listaIngredientes: listaIngredientes,
      receita,
    });
    setNome(""),
      setTipoDeComida(""),
      setImagem(""),
      setListaIngredientes([]),
      setReceita("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>CADASTRE A SUA RECEITA</h2>
        <CampoTexto
          label="NOME"
          valor={nome}
          placeholder="Qual o nome da receita"
          obrigatorio={true}
          aoAlterado={(valor) => setNome(valor)}
        />
        <ListaSuspensa
          label="TIPOS DE COMIDA"
          valor={tipoDeComida}
          itens={props.categoriaDeComida}
          placeholder="Selecione o tipo de comida..."
          obrigatorio={true}
          aoAlterado={(valor) => setTipoDeComida(valor)}
        />
        <CampoTexto
          label="IMAGEM"
          valor={imagem}
          placeholder="Insira uma imagem"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <TagsIngredientes
          label="INGREDIENTES"
          ingredientes={listaIngredientes}
          adicionarIngrediente={adicionarIngrediente}    
          removerIngrediente={removerIngrediente}     
           placeholder="Adicione os ingredientes..."
          obrigatorio={true}
        />
    
        <AreaDeTexto
          label="RECEITA"
          valor={receita}
          placeholder="Como fazer?"
          tipo="textarea"
          obrigatorio={true}
          aoAlterado={(valor) => setReceita(valor)}
        />
        <Botao />
      </form>
    </section>
  );
};

export default Formulario;
