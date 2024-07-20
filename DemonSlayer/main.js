const html = document.querySelector('html')
const tanjiroBt = document.querySelector('.list_item_tanjiro')
const dakiBt = document.querySelector('.list_item_daki')
const kyojuroBt = document.querySelector('.list_item_kyojuro')
const personName = document.querySelector('.person_name')


const imagemPersonagem = document.querySelector('.img-personagem')



tanjiroBt.addEventListener('click', () => {
    removerBorda();
    html.setAttribute('data-contexto', 'tanjiro');
    personName.innerHTML='Tanjiro';
    imagemPersonagem.setAttribute('src', './imgs/tanjiro_section.png');
    tanjiroBt.classList.add('border');
});



dakiBt.addEventListener('click', () => {
    removerBorda();
    html.setAttribute('data-contexto', 'daki');
    personName.innerHTML='Daki';
    imagemPersonagem.setAttribute('src', './imgs/daki_section.png');
    dakiBt.classList.add('border');
})

kyojuroBt.addEventListener('click', () => {
    removerBorda();
    html.setAttribute('data-contexto', 'kyojuro');
    personName.innerHTML='Kyojuro';
    imagemPersonagem.setAttribute('src', './imgs/kyojuro_section.png');
    kyojuroBt.classList.add('border')
})



function removerBorda() {
    tanjiroBt.classList.remove('border');
    dakiBt.classList.remove('border');
    kyojuroBt.classList.remove('border');
}