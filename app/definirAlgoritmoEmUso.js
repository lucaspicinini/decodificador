import { globals } from "./globals.js"

const algoritmoEmUso = {}

function setDefinirAlgoritmoEmUso(algoritmo) {
    algoritmoEmUso.algo = algoritmo.algo
    algoritmoEmUso.key = algoritmo.key
    globals.formLetra_a.value = ""
    globals.formLetra_e.value = ""
    globals.formLetra_i.value = ""
    globals.formLetra_o.value = ""
    globals.formLetra_u.value = ""
    return algoritmoEmUso
}

export const definirAlgoritmoEmUso = setDefinirAlgoritmoEmUso
