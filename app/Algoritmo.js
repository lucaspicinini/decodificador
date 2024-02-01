import { globals } from "./globals.js";

class Algoritmo {
    constructor(algo = {}, key = {}) {
        this.algo = algo
        this.key = key
    }
};

function setFormarAlgoritmoPersonalizado() {
    const valoresAlgo = {
        a: globals.formLetra_a.value,
        e: globals.formLetra_e.value,
        i: globals.formLetra_i.value,
        o: globals.formLetra_o.value,
        u: globals.formLetra_u.value,
    }

    const valoresKey = {}
    for (const chave in valoresAlgo) {
        valoresKey[valoresAlgo[chave]] = chave
    }

    const algoritmoPersonalizado = new Algoritmo(valoresAlgo, valoresKey)
    return algoritmoPersonalizado
}

export const formarAlgoritmoPersonalizado = setFormarAlgoritmoPersonalizado
