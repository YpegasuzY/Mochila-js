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
        }};