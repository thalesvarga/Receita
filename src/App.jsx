import { useState } from "react";
import Background from "./componentes/Background/index.jsx";
import Formulario from "./componentes/Formulario/index.jsx";
import Header from "./componentes/header/index.jsx";
import TiposDeReceitas from "./componentes/TiposDeReceita/index.jsx";

function App() {
  const categoriaDeComida = [
    {
      categoria: "Vegetariano",
      corPrimaria: "#8B4513",
      corSecundaria: "#FFEFD5",
    },
    {
      categoria: "Japonesa",
      corPrimaria: "#F4A460",
      corSecundaria: "#FAFAD2",
    },
    {
      categoria: "Massa",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      categoria: "Brasileira",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      categoria: "Doces",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      categoria: "Sucos",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      categoria: "Fit",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [receitas, setReceitas] = useState([]);

  const aoNovaReceitaAdicionada = (receita) => {
    console.log(receita);
  setReceitas([...receitas, receita]);
  }

  return (
    <div className="App">
      <Header />
      <Background categoriaDeComida={categoriaDeComida}/>
      <Formulario
        categoriaDeComida={categoriaDeComida.map((tipo) => tipo.categoria)}
        aoReceitaCadastrada={(receita) => aoNovaReceitaAdicionada(receita)}
      />

      {categoriaDeComida.map((tipo) => (
        <TiposDeReceitas
          key={tipo.categoria}
          nome={tipo.categoria}
          corPrimaria={tipo.corPrimaria}
          corSecundaria={tipo.corSecundaria}
          receitas={receitas.filter(receita => receita.tipoDeComida === tipo.categoria)}
        />
      ))}
    </div>
  );
}

export default App;
