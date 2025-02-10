import { useState } from "react";
import ModalCard from "../Modal";
import "./receita.css";

const Receita = (props) => {


  const [modalAberto, setModalAberto] = useState(false);

  const { listaIngredientes = [] } = props;
  console.log("listaIngredientes em Receita:", listaIngredientes);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <div className="receita" onClick={abrirModal}>
      <div
        className="cabecalho-card"
        style={{ backgroundColor: props.corDeFundo }}
      >
        <img
          className="card-imagem"
          src={props.imagem || "/imagens/melancia_fotopadrao.png"}
          alt={props.nome}
        />
      </div>

      <div className="rodape">
        <h3>{props.nome}</h3>
      </div>
      {modalAberto && (
        <ModalCard
          aoFechar={fecharModal}
          nome={props.nome}
          imagem={props.imagem}
          listaIngredientes={listaIngredientes}
          receita={props.receita}
        />
      )}
    </div>
  );
};

export default Receita;
