function setCriptografarTexto(algo, textoParaCriptografar) {
    let textoCriptografado;
    for (const chave in algo) {
        textoCriptografado = textoParaCriptografar.replaceAll(chave, algo[chave]);
        textoParaCriptografar = textoCriptografado;
    }
    return textoCriptografado;
}

function setDescriptografarTexto(algoKey, textoParaDescriptografar) {
    let textoDescriptografado;
    for (const chave in algoKey) {
        textoDescriptografado = textoParaDescriptografar.replaceAll(chave, algoKey[chave]);
        textoParaDescriptografar = textoDescriptografado;
    }
    return textoDescriptografado;
}

export const criptografarTexto = setCriptografarTexto;
export const descriptografarTexto = setDescriptografarTexto;
