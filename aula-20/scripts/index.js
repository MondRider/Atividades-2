let inputNome = document.querySelector('#nome')
let inputIdade = document.querySelector('#idade')
let listaInformacoes = document.querySelector('#lista-informacoes')

const informacoes = []

function salvarInformacoes() {

    informacoes.push({
        nome: inputNome.value
    })

    inputNome.value = ''
}

function visualizarInformacoes() {
    let itemListaInformacoes

    informacoes.forEach((informacoes) => {
        itemListaInformacoes = document.createElement('li')
        itemListaInformacoes.innerHTML = informacoes.nome

    })

    listaInformacoes.appendChild(itemListaInformacoes)
}