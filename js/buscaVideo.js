import { conectaApi } from "./conectaApi.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadoDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadoDePesquisa);

    console.log(busca)

}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))