const bntBotao = document.getElementById('btn-sortear');

function gerarNumero() {
    const min = Math.ceil(document.getElementById('input-min').value);
    const max = Math.floor(document.getElementById('input-max').value);
    const numeroFinal = document.querySelector('.numero-final');
    const mensagem = document.querySelector('.mensagem');
    const valorFinal = document.querySelector('.valor-final');

    if (min == '' || max == '') {
        alert('Digite um valor')
    } else if (min >= max) {
        mensagem.innerHTML = 'O numero minino não pode ser maior que o numero maximo 😞';
        mensagem.style.color = 'red';
        numeroFinal.style.display = 'none';

    } else {
        const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
        valorFinal.innerHTML = resultado;
        mensagem.innerHTML = `<h2 class="mensagem">O numero sorteado é:</h2>`;
        numeroFinal.style.display = 'block';
    }
}

bntBotao.addEventListener('click', gerarNumero);