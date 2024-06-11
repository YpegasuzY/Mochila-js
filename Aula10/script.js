// getAttribute - Obter o valor do atributo (valor da linha)

// setAtribute - definir ou modificar o valor

function changeImage() {
    const img = document.getElementById('myImage'); // Aqui conseguimos armazenar o conteúdo da imagem
    const currentSrc = img.getAttribute("src"); //Aqui pegamos o atributo src da imagem para trabalhar a troca da mesma.
    
        if (currentSrc === 'img/chuva.jpg'){
            //Se a origem atual da imagem for igual a 'img/chuva.jpg' execute algo.

            img.setAttribute("src", "img/cidade.jpg"); // usando o Set Attribute vamos modificar o valor dela, através do src e especificando a outra img.
            img.setAttribute("alt", "Imagem Cidade");
        } else { // Caso contrário faça o procedimento inverso
            img.setAttribute("src", "img/chuva.jpg");

            img.setAttribute("alt", "Cidade Futurista chovendo");
        };}



        function changeType() {
            const input = document.getElementsByTagName("input")[0]; //Indice 0, primeiro elemento da lista de Input, que são vários, varia de acordo com a ordem digidata no html.
            const currentType = input.getAttribute('type');

            switch (currentType) { //fazer a troca do type na seguinte ordem
                case 'text': //caso seja tipo text executar a função
                    input.setAttribute('type', 'number'); //alter
                    break;
                
                case 'number':
                    input.setAttribute('type', 'radio');
                    break;

                case 'radio':
                    input.setAttribute('type', 'range');
                    break;

                default: //padrao do codigo (inicio do codigo, sempre volta para isso no fim)
                    input.setAttribute('type', 'text');
            };
        }