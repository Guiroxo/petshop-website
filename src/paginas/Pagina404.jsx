import React from "react";
import Imagem from "../assets/image/doguito404.svg";
import "../assets/css/404.css";

function Pagina404() {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={Imagem} alt="imagem-error" />
      <p className="naoencontrado-texto">Ops, essa página não existe!</p>
    </main>
  );
}

export default Pagina404;
