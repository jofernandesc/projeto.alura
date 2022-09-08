const MENU = document.querySelector('#menu-mobile')
const ICONE_MENU = document.querySelector('.icone-menu')
const EXIT = document.querySelector('#menu-exit')

function abrirMenuMobile() {
    MENU.classList.remove('display-menu')
}

function fecharMenuMobile() {
    MENU.classList.add('display-menu')
}

ICONE_MENU.onclick = abrirMenuMobile
EXIT.onclick = fecharMenuMobile

/*--- interesses ---*/
const LISTA_INTERESSES = document.querySelectorAll('.icones-interesses')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const INTERESSE = LISTA_INTERESSES[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const descricoesInteresses = {
    'interesse-notebook': 'Sou apaixonada em mexer com notebooks, tanto com software quanto com hardware. ',
    'interesse-filme': 'No meu tempo livre o que mais gosto de fazer é maratonar filmes e séries, e claro, não pode faltar a pipoca!',
    'interesse-academia': 'Adoro ir para a academia, meu dia fica incompleto quando não vou.',
    'interesse-praia': 'Ir para a praia é minha viagem preferida, principalmente quando estou com minha família!',
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('display-informacoes-interesses')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}

