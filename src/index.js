import Leao from "./assets/imagens/leao.jpg";

import "./assets/css/estilos.css";

function carregarImagem(){
    document.body.innerHTML = `
     <img src=${Leao} />
    `;
}

carregarImagem();

