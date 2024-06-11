const botao = document.querySelector('button'); //aqui recuperamos nosso botão

const cores = document.querySelector('select'); //recuperando o select

const fundo = document.querySelector('body'); //recuperando o corpo da pagina

function mudarCor() { // definindo uma função
    botao.style.backgroundColor = cores.value; // definindo a cor de fundo do botão pela cor descrita no value
    botao.style.border = cores.value; // definindo a cor da borda do botão pela cor descrita no value
    botao.style.color = cores.value; // definindo a cor da letra do botão pela cor descrita no value
    fundo.style.backgroundColor = cores.value; // definindo a cor de fundo do corpo pela cor descrita no value
};