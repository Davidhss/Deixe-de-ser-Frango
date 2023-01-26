var altura
var largura
var vidas = 1
var tempo = 15

var criaCreatinaTempo = 1250

var nivel = window.location.search

if (nivel === '?normal') {
    criaCreatinaTempo = 1250
} else if (nivel === '?dificil') {
    criaCreatinaTempo = 1000

} else if (nivel === '?mrolympia') {
    criaCreatinaTempo = 750
}

// Definindo dimensões do jogo
function ajustaDimensaoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaDimensaoJogo()

var cronometro = setInterval(function () {
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaCreatina)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('time').innerHTML = tempo

        if (document.getElementById('time').innerHTML <= 10 && document.getElementById('time').innerHTML > 5) {
            document.getElementById('html').id = 'html2'
        } else if (document.getElementById('time').innerHTML <= 5 && document.getElementById('time').innerHTML >= 0) {
           document.getElementById('html2').id = 'html3'
        }
    }

}, 1000)

function posicaoRandomica() {
    // Removendo a creatina anterior (caso exista)
    if (document.getElementById('creatina')) {
        document.getElementById('creatina').remove()

        if (vidas > 3) {
            //Interrompemos o jogo (game over)
            window.location.href = "game_over.html"
        } else {
            document.getElementById('v' + vidas).src = "img/Vida-Vazia.png"

            vidas++
        }
    }

    //Criando posições aleatórias para a creatina aparecer dentro do limite das dimensões estabelecidas
    var posicaoX = Math.floor(Math.random() * largura) - 120
    var posicaoY = Math.floor(Math.random() * altura) - 120

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Criando a imagem que será exibida na tela
    var creatina = document.createElement('img')
    creatina.src = 'img/creatina.png'
    creatina.className = tamanhoAleatorio() + ' ' + rotacaoAleatoria()
    creatina.id = 'creatina'

    creatina.style.position = 'absolute'
    creatina.style.left = posicaoX + 'px'
    creatina.style.top = posicaoY + 'px'

    creatina.onclick = function () {
        this.remove()
    }

    //Tornando a imagem criada parte do body
    document.body.appendChild(creatina)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'creatina1'
        case 1:
            return 'creatina2'
        case 2:
            return 'creatina3'
    }
}

function rotacaoAleatoria() {
    var rotacao = Math.floor(Math.random() * 3)

    switch (rotacao) {
        case 0:
            return 'rotA'
        case 1:
            return 'rotB'
        case 2:
            return 'rotC'
    }
}

function criarGalinha(){
    var posicaoY = Math.floor(Math.random() * altura) - 120

    var galinha = document.createElement('img')
    galinha.src = 'img/frango.png'
    galinha.id = 'galinha'
    galinha.className = giroGalinha()
    galinha.style.top = posicaoY + 'px'

    galinha.style.zIndex = '99'
    galinha.style.position = 'absolute'

    document.body.appendChild(galinha)
}

function giroGalinha(){
    var giro = Math.floor(Math.random() * 2)

    switch (giro){
        case 0:
            return 'galinha'
        case 1:
            return 'galinha2'
    }
}