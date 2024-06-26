const input = document.getElementById('taskInput'); //input

const ul = document.getElementById('taskList'); //lista

function addTask() {//Aqui criamos uma função para ser atribuída dentro do botão
    if(input.value !== "") { //Aqui informamos que se (if) o input for diferente (!==) de vazio (""), ele irá criar um elemento (createElement) de "li", o texto que ela possui é igual o "input value", ou seja, é o valor do input que será digitado.
        const li = document.createElement("li");
        li.textContent = input.value;
        //Traduzindo esta linha, é o texto de lista (li)que será criado, deverá ser igual o valor que será digitado dentro do campo "input"
        const removerBotao = document.createElement("button"); //Aqui estasmos criando um botão (button) para remover esses itens de (li);

        removerBotao.textContent = "remover"; //Chamamos nossa variável "removerBotao" e inserindo nele um texto chamado "Remover".

        removerBotao.onclick = function() { //Criamos uma Função que ao clicar neste botão ele irá executar uma função.
            ul.removeChild(li); //A função é pegar o elemento Filho (child) do UL, que no caso é a "li" e remove-la.
        };

        ul.appendChild(li); //Estamos adicionando um filho para nossa UL.
        li.appendChild(removerBotao); //Aquichamamos nossa const "li" e estamos adicionando a ela um filho (appendChild)

        input.value = ""; // Usado para limpar o campo Input, depois de adicionado o item em questão.
    } else { //Caso o campo input estiver vazio, ele irá aparecer esta mensagem.
        alert("Por favor, insira uma tarefa");

    }

}