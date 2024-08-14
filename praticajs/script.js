const form = document.getElementById('form-validar');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;

    const valorA = parseFloat(campoA);
    const valorB = parseFloat(campoB);

    const mensagemMaior = `O campo B é <b>MAIOR</b> que o campo A`;
    const mensagemMenor = `O campo B é <b>MENOR ou IGUAL</b> ao campo A`;

    if(valorB > valorA){
        const containerMensagemSucesso = document.querySelector('.message');
        containerMensagemSucesso.innerHTML = mensagemMaior;
        containerMensagemSucesso.style.display = 'block';

    } else {
        const containerMensagemSucesso = document.querySelector('.message');
        containerMensagemSucesso.innerHTML = mensagemMenor;
        containerMensagemSucesso.style.display = 'block';
    }
})

