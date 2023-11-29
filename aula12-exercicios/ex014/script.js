function carregar() {
    var mensagem = window.document.getElementById('msg') // Recebendo nossa div#msg
    var imagem = window.document.getElementById('imagem') // Recebendo nossa imagem da manhã
    var data = new Date() // Para pegarmos a data atual.
    var hora = data.getHours() //Para pegarmos a hora atual do sistema.
    var minutos = data.getMinutes() // Professor não colocou, eu que adicionei depois

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        mensagem.innerHTML = `Agora são ${hora}h${minutos}m. <strong>Bom dia!</strong>`
        imagem.src = 'manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    }

    else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        mensagem.innerHTML = `Agora são ${hora}h${minutos}m. <strong>Boa tarde!</strong>`
        imagem.src = 'tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    }

    else if (hora >= 18 && hora < 24) {
        //BOA NOITE
        mensagem.innerHTML = `Agora são ${hora}h${minutos}m. <strong>Boa noite!</strong>`
        imagem.src = 'noite.png'
        document.body.style.backgroundColor = '#003F7D'
    }
}

/*
Para eu rodar o function carregar() quando a página carregar temos que ir no nosso HTML, ir no nosso body e colocar onload="carregar()"

Para mostrar a imagem certa dependendo da hora, vamos no nosso JavaScript e fazemos nosso if e else.

Para fazermos o nosso bom dia, vamos carregar a imagem manha.png dentro do site.
Já temos nosso objeto imagem.

Depois, é só fazermos dentro dos nosso if bom dia:
imagem.src = 'manha.png' -> isso vai carregar nossa foto manhã


Outra coisa que vamos fazer é mudar a cor do fundo do site dependendo do horário, utilizando:
document.body.style.backgroundColor = 'cor de fundo aqui'

*/