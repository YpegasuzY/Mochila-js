let meuElemento = document.getElementById('meuElemento');

function tornarCirculo() {
    meuElemento.classList.add('circle'); //adicionar a classe circle
    meuElemento.classList.remove('square'); //remover a classe square
}

function tornarSquare() {
    meuElemento.classList.add('square'); //adicionar a classe circle
    meuElemento.classList.remove('circle') //remover a classe square
}

function alternarFormato(){ // Togle trabalha em estadp real, ou seja ele observa o formato do elemento e faz a alternância de acordo com as atribuições que colocamos
    meuElemento.classList.toggle('circle')
    meuElemento.classList.toggle('square')
}

function VerificarFormato(){
    
}