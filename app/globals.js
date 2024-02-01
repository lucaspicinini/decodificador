const setGlobals = {
    themeClick: Array.from(document.querySelectorAll(".themeClick")),
    textoInput: document.getElementById("textoInput"),
    btnCriptografar: document.getElementById("btnCriptografar"),
    btnDescriptografar: document.getElementById("btnDescriptografar"),
    textoOutput: document.getElementById("textoOutput"),
    btnCopiar: document.getElementById("btnCopiar"),
    btnReset: document.getElementById("btnReset"),
    btnSalvarTexto: document.getElementById("btnSalvarTexto"),
    containerCards: document.getElementById("containerCards"),
    btnsExcluir: document.getElementsByClassName("btnsExcluir"),
    btnsCopiarTextoSalvo: document.getElementsByClassName("btnsCopiarTextoSalvo"),
    btnAlurithm: document.getElementById("btnAlurithm"),
    btnPersonalizado: document.getElementById("btnPersonalizado"),
    algoBannerAlurithm: document.getElementById("algoBannerAlurithm"),
    algoBannerCustom: document.getElementById("algoBannerCustom"),
    formContainer: document.getElementById("formContainer"),
    algoForm: document.getElementById("algoForm"),
    formLetra_a: document.getElementById("formLetra_a"),
    formLetra_e: document.getElementById("formLetra_e"),
    formLetra_i: document.getElementById("formLetra_i"),
    formLetra_o: document.getElementById("formLetra_o"),
    formLetra_u: document.getElementById("formLetra_u"),
    btnDefinirAlgo: document.getElementById("btnDefinirAlgo"),

    algoritmoAlurithm: {
        algo: {
            e: "enter",
            i: "imes",
            a: "ai",
            u: "ufat",
            o: "ober",
        },
        key: {
            enter: "e",
            imes: "i",
            ai: "a",
            ufat: "u",
            ober: "o",
        },
    },
};

export const globals = setGlobals;