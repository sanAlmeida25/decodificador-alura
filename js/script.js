// script.js
const textoCriptografarDescriptografar = document.getElementById('texto-criptografar-descriptografar');
const botaoCriptografar = document.getElementById('criptografar');
const botaoDescriptografar = document.getElementById('descriptografar');
const textoRespostaCriptografarDescriptografar = document.getElementById('texto-resposta-criptografar-descriptografar');
const botaoCopiar = document.getElementById('copiar');
const respostaVazia = document.querySelector('.resposta-vazia');
const respostaConteudo = document.querySelector('.resposta-conteudo');

// Mapa de criptografia
const mapaCriptografia = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};

botaoCriptografar.addEventListener('click', () => {
    const textoOriginal = textoCriptografarDescriptografar.value;
    const textoCriptografado = criptografar(textoOriginal);
    mostrarResposta(textoCriptografado);
});

botaoDescriptografar.addEventListener('click', () => {
    const textoCriptografado = textoCriptografarDescriptografar.value;
    const textoDescriptografado = descriptografar(textoCriptografado);
    mostrarResposta(textoDescriptografado);
});

botaoCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(textoRespostaCriptografarDescriptografar.value).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
});

function criptografar(texto) {
    return texto.split('').map(char => mapaCriptografia[char] || char).join('');
}

function descriptografar(texto) {
    let textoDescriptografado = texto;
    for (const [key, value] of Object.entries(mapaCriptografia)) {
        const regex = new RegExp(value, 'g');
        textoDescriptografado = textoDescriptografado.replace(regex, key);
    }
    return textoDescriptografado;
}

function mostrarResposta(texto) {
    if (texto) {
        textoRespostaCriptografarDescriptografar.value = texto;
        respostaVazia.style.display = 'none';
        respostaConteudo.style.display = 'flex';
    } else {
        respostaVazia.style.display = 'flex';
        respostaConteudo.style.display = 'none';
    }
}
