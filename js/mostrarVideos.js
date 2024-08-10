
import { conectaApi } from "./conectaApi.js";


const lista = document.querySelector("[data-lista]");

function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
          <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="#" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
         </div>
    `
    return video;
}
/*
para cada item da lista da API criou um card, que seria uma li, que foi anexada dentro da ul dentro do index.html,
que estamos referenciando como lista. 
Então fazendo isso estamos criando o que queríamos, a conexão das duas funções, para cada item da lista uma li será criada.
*/
async function listaVideos(){
    const listaApi = await conectaApi.listaVideos();
    console.log(listaApi)
    listaApi.forEach(elemento => lista.appendChild(
    constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
}

listaVideos()

