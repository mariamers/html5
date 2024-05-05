

function nome() {
    var meuNome = (document.getElementById('meuNome').value);
    var meuNomeResposta = document.getElementById("nomeResposta");
    meuNomeResposta.innerHTML = "Olá, " + meuNome + "!"

}

function showFrame(frameId) {
    var frames = document.querySelectorAll('.frame');
    frames.forEach(function(frame) {
        frame.style.display = 'none';
    });

    var frameToShow = document.getElementById(frameId);
        frameToShow.style.display = 'block';
}

function uppercase() {
    var meuTexto = (document.getElementById('meuTexto').value);
    var meuTextoResposta = document.getElementById("textoResposta");
    meuTextoResposta.innerHTML = (meuTexto.toUpperCase());

}

function lowercase() {
    var meuTexto = (document.getElementById('meuTexto').value);
    var meuTextoResposta = document.getElementById("textoResposta");
    meuTextoResposta.innerHTML = (meuTexto.toLowerCase());

}

function firstletter() {
    var meuTexto = (document.getElementById('meuTexto').value);
    var meuTextoResposta = document.getElementById("textoResposta");
    const meuTextoDividido = (meuTexto.split(" "));
    for (let i = 0; i < meuTextoDividido.length; i++) {
        meuTextoDividido[i] = meuTextoDividido[i][0].toUpperCase() + meuTextoDividido[i].substr(1);
    }
    var textoFinal = meuTextoDividido.join(" ");    
    meuTextoResposta.innerHTML = (textoFinal);
}

