import "./campotexto.css";

const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <section className="campo-texto">
      <label>{props.label}</label>
        <input
          value={props.valor}
          onChange={aoDigitado}
          required={props.obrigatorio}
          type="text"
          placeholder={placeholderModificado}
        />
    </section>
  );
};

export default CampoTexto;
