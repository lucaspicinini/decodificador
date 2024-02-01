import { globals } from "./globals.js";

const form = Array.from(globals.algoForm)
form.pop()
form.forEach((input) => {
    input.addEventListener("focus", () => {
        input.offsetParent.classList.add("was-validated")
    })

    input.addEventListener("focusout", () => {
        input.offsetParent.classList.remove("was-validated")
    })

    input.addEventListener("input", () => {
        checarVogais(input)
        checarConsoantes(input)
    })
})

function checarVogais(input) {
    const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let textoSemVogais = ""
    for (const vogal of vogais) {
        textoSemVogais = input.value.replaceAll(vogal, "")
        input.value = textoSemVogais
    }
}

function checarConsoantes(input) {
    let textoSemAConsoante = ""
    let formAuxiliar = form.slice()
    const index = formAuxiliar.indexOf(input)
    formAuxiliar.splice(index, 1)
    for (let i = 0; i < input.value.length; i++) {
        formAuxiliar.forEach((inputRestante) => {
            if (inputRestante.value.includes(input.value.charAt(i))) {
                textoSemAConsoante = inputRestante.value.replaceAll(input.value.charAt(i), "")
                inputRestante.value = textoSemAConsoante
            }
        })
    }
    formAuxiliar = form.slice()
}

function setValidacao() {
    let aux = 0
    form.forEach((input) => {
        if (input.value == "") {
            input.offsetParent.classList.add("was-validated")
            globals.btnDefinirAlgo.classList.add("disabled")
            aux++
        }
    })
    let valid;
    aux > 0 ? valid = false : valid = true
    aux = 0
    return valid
}

export const validacao = setValidacao
