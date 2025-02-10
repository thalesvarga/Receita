import Receita from "../Receita";
import "./tiposDeReceita.css";

const TiposDeReceitas = (props) => {
  const css = { backgroundColor: props.corSecundaria};

  return props.receitas.length > 0 ? (
    <section className="tipos-de-receitas" style={css}>
      <h2>{props.nome}</h2>

      <div className="receitas">
        {props.receitas.map((receita) => (
          <Receita
            key={receita.nome}
            nome={receita.nome}
            tipoDeComida={receita.tipoDeComida}
            listaIngredientes={receita.listaIngredientes}
            receita={receita.receita}
            imagem={receita.imagem}
            corDeFundo={props.corPrimaria}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default TiposDeReceitas;
