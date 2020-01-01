var inputTamanho = document.querySelector('[name=tamanho]');
var outputTamanho = document.querySelector('[name=Valortamanho]');

function mostrarTamanho(){

    outputTamanho.value = inputTamanho.value;
}

inputTamanho.oninput = mostrarTamanho;