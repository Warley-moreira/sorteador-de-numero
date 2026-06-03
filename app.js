const bntBotao = document.getElementById('btn-sortear');

function gerarNumero() {
    const min = Math.ceil(document.getElementById('input-min').value);
    const max = Math.floor(document.getElementById('input-max').value);
    const mensagem = document.querySelector('h2');
    const numeroFinal = document.querySelector('.numero-final');

    if (min >= max) {
        mensagem.innerHTML = 'O valor minimo não pode ser maior ou igual o valor maximo : (';
        mensagem.style.color = 'red';
        numeroFinal.innerHTML = ''; numeroFinal.style.cssText = 'border: none; backgroundColor: #111828;';
    } else {
        const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
        numeroFinal.innerHTML = resultado; numeroFinal.style.border = '2px solid #00FF7F';
        mensagem.innerHTML = 'O numero sorteado é:';
        mensagem.style.color = '';
    }
}

bntBotao.addEventListener('click', gerarNumero);