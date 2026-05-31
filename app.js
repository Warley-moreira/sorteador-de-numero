const btnSortear = document.getElementById('btn-sortear');

function gerarNumero() {
    const inputMin = Math.ceil(document.getElementById('input-entre').value);
    const inputMax = Math.floor(document.getElementById('input-e').value);
    const numeroFinal = document.querySelector('.numero-final');

    const resultado = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

    numeroFinal.innerHTML = resultado;
}

btnSortear.addEventListener('click', gerarNumero);