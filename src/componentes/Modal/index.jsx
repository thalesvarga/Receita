import "./modal.css";

const ModalCard = (props) => {
  const { listaIngredientes = [] } = props;
  console.log("listaIngredientes em Receita:", props.listaIngredientes);

  return (
    <div className="background-translucido">
      <div className="modal">
        <span
          className="modal-fechar"
          onClick={(e) => {
            e.stopPropagation();
            props.aoFechar();
          }}
        >
          &times;
        </span>
        <div className="modal-esquerdo">
          <img
            className="modal-imagem"
            src={props.imagem || "/public/imagens/melancia_fotopadrao.png"}
            alt={props.nome}
          />
          <div className="modal-esquerdo-ingrediente">
          <h3>Ingredientes:</h3>
          <ul>
            {listaIngredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
          </div>
        </div>

        <div className="modal-direita">
          <h2>{props.nome}</h2>
          <br />
          <br />
          <p className="modal-receita">{props.receita}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
