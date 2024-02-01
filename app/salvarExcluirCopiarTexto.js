import { globals } from "./globals.js";

function setSalvarTexto(texto) {
    const textoEmCard = `<div class="card mb-3 col-6 border border-1 border-primary-subtle rounded-3 bg-light-subtle bg-gradient text-body fw-medium fs-5">
                <div class="card-body">
                    <h5 class="card-title text-body text-opacity-50 fs-3 fw-semibold">Texto salvo</h5>
                    <p class="card-text text-body fw-medium">${texto}</p>
                    <div class="d-grid gap-1">
                        <button class="btn btn-secondary bg-gradient w-100 btnsCopiarTextoSalvo" id="btnCopiar" type="button">Copiar texto</button>
                        <button class="btn btn-danger bg-gradient w-100 btnsExcluir" type="button">Excluir</button>
                    </div>
                </div>
            </div>`
    
    globals.containerCards.innerHTML += textoEmCard

    if (globals.btnSalvarTexto) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById('avisoTextoSalvo'))
        toastBootstrap.show()
    }
}

function setCopiarTextoSalvo() {
    const btnsCopiarTextoSalvo = Array.from(globals.btnsCopiarTextoSalvo)
    btnsCopiarTextoSalvo.forEach((btn) => {
        if (btn) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById('avisoTextoCopiado'))
            btn.addEventListener('click', () => {
                toastBootstrap.show()
            })
        }

        btn.addEventListener("click", () => {
            fetch(navigator.clipboard.writeText(btn.offsetParent.children[0].children[1].innerHTML))
            .catch((err) => console.error("Falha ao copiar: ", err))
        })
    })
}

function setExcluirTexto() {
    const btnsExcluir = Array.from(globals.btnsExcluir)
    btnsExcluir.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.offsetParent.remove()
        })
    })
}

export const salvarTexto = setSalvarTexto;
export const copiarTextoSalvo = setCopiarTextoSalvo
export const excluirTexto = setExcluirTexto;
