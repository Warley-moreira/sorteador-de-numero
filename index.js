const btnDeSortear = document.getElementById('btn-sortear');
const inputEntre = document.getElementById('input-entre');
const inputE = document.getElementById('input-e');


function numeroSorteado() {
    const numeroFinal = document.querySelector('.numeroFinal');


    if (inputEntre.value === '' || inputE.value === '') {
        numeroFinal.textContent = '?';

    } else {
        let min = parseInt(inputEntre.value);
        let max = parseInt(inputE.value);

        const novoNumero = geradorDeNumero(max, min);
        numeroFinal.innerHTML = novoNumero;
    }

}

function geradorDeNumero(max, min) {

    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


btnDeSortear.addEventListener('click', numeroSorteado);