const hamburgerButton = document.querySelector("#hamburgerButton"); //Estamos recuperando o Botão de hamburguer (Fora da Div).
const closeButton = document.querySelector("#closeButton");
//Estamos recuperando o Botão de Fechamento.

const mobileMenu = document.querySelector("#mobileMenu");
// Estamos recuperando a caixa preta (Quando aberta o menu Hamburguer).

//Aqui adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo nossa caixa (DIV) aparecer, ou seja, ficar visível.
});


//criamos uma função que a ouvir o click do Mouse, ele REMOVA uma Class, que está fazendo nossa caixa (DIV) aparecer, ou seja, ficar visível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});