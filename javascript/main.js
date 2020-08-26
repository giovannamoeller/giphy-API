/* 1. Pegar o valor do input e fazer a requisição com a API */

var input = document.querySelector("input") // Pegar valor com enter
input.addEventListener("keyup", e => {
    if (e.which == 13) {
        click()
    }
})

document.querySelector('.js-go').addEventListener('click', () => { // Pegar valor com click do botão
    click()
})

function click() {
    var container = document.querySelector(".js-container")
    container.innerHTML = ""
    let gif = input.value
    var url = `http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=dc6zaTOxFJmzC`
    // Requisição AJAX - conceito em Javascript de pegar dados sem dar refresh na página
    var giphy = new XMLHttpRequest()
    giphy.open('GET', url)
    giphy.send()
    giphy.addEventListener('load', e => {
    var data = JSON.parse(e.target.response)
    pushToDOM(data)
})
}

/* 2. Mostrar os GIFs */

function pushToDOM(dados) {
    dados.data.forEach(dado => {
        var src = dado.images.fixed_height.url
        console.log(src)
        var container = document.querySelector(".js-container")
        container.innerHTML += `<img src = ${src}> </img>`
    })
}