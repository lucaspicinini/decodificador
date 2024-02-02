// Módulos ------------->

// elementos ----->
import { globals } from "./globals.js";
// validação de inputs da formação de algoritmos ------>
import { validacao } from "./validacao.js"
// instancia um algoritmo personalizado ------>
import { formarAlgoritmoPersonalizado } from "./Algoritmo.js"
// alterna entre os algoritmos disponíveis no programa ----->
import { definirAlgoritmoEmUso } from "./definirAlgoritmoEmUso.js"
// processamento de criptografia e descriptografia ----->
import { criptografarTexto, descriptografarTexto } from "./decodificador.js";
// função salvar, copiar e excluir textos
import { salvarTexto, copiarTextoSalvo, excluirTexto } from "./salvarExcluirCopiarTexto.js";
// FIM ------^

// configura a imagem de background ao ------>
// carregar a página e na troca de tema
window.addEventListener("load", () => {
    changeBackground()
})

globals.themeClick.forEach((button) => {
    button.addEventListener("click", () => {
        setTimeout(changeBackground, 10)
    })
})

function changeBackground() {
    if (document.children[0].attributes[1].nodeValue == "dark") {
        document.body.style.backgroundImage = `url("assets/page-turner-dark.png")`
    } else if (document.children[0].attributes[1].nodeValue == "light") {
        document.body.style.backgroundImage = `url("assets/page-turner-light.png")`
    }
}
// FIM ------^

// configurações de codificação ---------->
// alterna entre os modos QRCode e Decodificação
function alternaQRCodeDecodificacao() {
    if (globals.containerAlgoritmos.classList.contains("d-none") && !globals.containerQRCode.classList.contains("d-none")) {
        globals.containerAlgoritmos.classList.remove("d-none")
        globals.containerQRCode.classList.add("d-none")
    } else if (globals.containerQRCode.classList.contains("d-none") && !globals.containerCards.classList.contains("d-none")) {
        globals.containerQRCode.classList.remove("d-none")
        globals.containerAlgoritmos.classList.add("d-none")
    }
}

// define o algoritmo em uso, iniciando no default do desafio Alura
const algoritmoEmUso = definirAlgoritmoEmUso(globals.algoritmoAlurithm)

// seleciona o Alurithm, algoritmo default do challenge
globals.btnAlurithm.addEventListener("click", () => {
    alternaQRCodeDecodificacao()
    definirAlgoritmoEmUso(globals.algoritmoAlurithm)
    globals.algoBannerAlurithm.classList.remove("d-none")
    globals.algoBannerCustom.classList.add("d-none")
    globals.algoBannerQRCode.classList.add("d-none")
    globals.formContainer.classList.add("d-none")
})

// exibe os inputs para a formação do algoritmo personalizado,
// checa no módulo de validação, instancia um novo algoritmo
// e passa para a função que define o algoritmo em uso.
globals.btnPersonalizado.addEventListener("click", () => {
    globals.formContainer.classList.remove("d-none")
    globals.btnDefinirAlgo.addEventListener("click", () => {
        if(validacao() == false){
            setTimeout(() => globals.btnDefinirAlgo.classList.remove("disabled"), 1000)
        } else if(validacao() == true) {
            alternaQRCodeDecodificacao()
            const algoritmoPersonalizado = formarAlgoritmoPersonalizado()
            definirAlgoritmoEmUso(algoritmoPersonalizado)
            globals.algoBannerCustom.classList.remove("d-none")
            globals.algoBannerAlurithm.classList.add("d-none")
            globals.algoBannerQRCode.classList.add("d-none")
            globals.formContainer.classList.add("d-none")
        }      
    })
})

// alterna para o modo de codificação em QRCode
globals.btnQRCode.addEventListener("click", () => {
    alternaQRCodeDecodificacao()
    globals.algoBannerQRCode.classList.remove("d-none")
    globals.algoBannerCustom.classList.add("d-none")
    globals.algoBannerAlurithm.classList.add("d-none")
    globals.formContainer.classList.add("d-none")
})
// FIM ------^

// botões decodificador ------>
globals.btnCriptografar.addEventListener("click", () => {
    if(!globals.textoInput.value == "") {
        globals.textoOutput.innerHTML = criptografarTexto(algoritmoEmUso.algo, globals.textoInput.value);
    }
});

globals.btnDescriptografar.addEventListener("click", () => {
    if(!globals.textoInput.value == "") {
    globals.textoOutput.innerHTML = descriptografarTexto(algoritmoEmUso.key, globals.textoInput.value);
    }
});

globals.btnCopiar.addEventListener("click", () => {
    if (!globals.textoInput.value == "") {
        copiarTexto()
    }
})
function copiarTexto() {
    if (globals.btnCopiar) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById('avisoTextoCopiado'))
        toastBootstrap.show()
    }

    fetch(navigator.clipboard.writeText(globals.textoOutput.innerHTML))
    .catch((err) => console.error("Falha ao copiar: ", err))
}

globals.btnReset.addEventListener("click", () => {
    if(!globals.textoOutput.innerHTML == "") {
        salvarTexto(globals.textoOutput.innerHTML)
        excluirTexto()
        copiarTextoSalvo()
    }
    globals.textoInput.value = ""
    globals.textoOutput.innerHTML = ""
})
// FIM ------^

// botão QRCode ------>

globals.btnGerarQRCode.addEventListener("click", () => {
    if (!globals.textoInputQR.value == "") {
        const textoParaQRCode = globals.textoInputQR.value
        QRCode.toCanvas(globals.QRcanvas, textoParaQRCode, {scale: 6, margin: 2}, function (error) {
            if (error) console.error(error)
            console.log('success!');
        })
    }
})

// FIM ------^

// Salvar e Excluir Texto ------>
globals.btnSalvarTexto.addEventListener("click", () => {
    if(!globals.textoOutput.innerHTML == "") {
        salvarTexto(globals.textoOutput.innerHTML)
        excluirTexto()
        copiarTextoSalvo()
    }
})
// FIM ------^

