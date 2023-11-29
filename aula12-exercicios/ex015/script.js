function verificar() {
    var data = new Date() // Vai pegar a data atual do sistema
    var ano = data.getFullYear() // Ele vai pegar o ano atual com 4 digitos (ex: 2023) e guardar na variável
    var fAno = document.getElementById('txtano') // Vai pegar a data digitada no input number
    var resultado = document.getElementById('resultado') // Vai mostrar a idade e a foto correspondente

    if (fAno.value.length == 0 || fAno.value > ano) { // Se o comprimento do ano digitado for 0 (pessoa não digitou o ano) ou maior que o ano atual, vai exibir a mensagem abaixo
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else { // Caso esteja tudo correto, faça a conta da idade da pessoa
        var fsex = document.getElementsByName('radsex') // Recebe nossos input radio.
        var idade = ano - fAno.value // Ano atual - ano que a pessoa digitou no formulário.
        var gênero = ''
        var img = document.createElement('img') // Ele vai criar uma tag <img>.
        img.setAttribute('id', 'foto') // Configura nosso <img> criado, colocando um ID="foto".

        if (fsex[0].checked) { // Se o que tiver marcado como checado for a posição 0 (masculino), faça isso.
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-h.png') // Seta o atributo src e seu valor é a imagem
            } else if (idade >= 10 && idade < 18) {
                // Jovem
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade >= 18 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-h.png')
            } else if (idade >= 50) {
                // Idoso
                img.setAttribute('src', 'idoso-h.png')
            }
        } 
        
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade >= 10 && idade < 18) {
                // Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade >= 18 && idade < 50) {
                // Adulta
                img.setAttribute('src', 'adulto-m.png')
            } else if (idade >= 50) {
                // Idosa
                img.setAttribute('src', 'idosa-m.png')
            }
        }

        resultado.style.textAlign = 'center' // Para centralizar o que for aparecer no resultado
        resultado.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        resultado.appendChild(img) // appendChild = Serve para adicionarmos um elemento, que no caso é um <img>.
    }


}


/* 
A primeira coisa que vamos verificar é a data atual e também vamos pegar o ano atual. Fica assim:
var data = new Date()
var ano = data.getFullYear() -> nossa variável ano vai pegar o ano da variável data


Outra coisa que vamos criar é uma variável que vai receber o ano digitado no formulário:
var fAno = document.getElementById('txtano')


Outra coisa que vamos pegar antes de fazermos nosso teste é pegar o resultado, que está na nossa div:
var resultado = document.getElementById('resultado')


Outra coisa que vamos fazer é verificar se o ano está vazio ou se é maior que o ano atual. Essa parte fará uma microvalidação dos dados digitados:
if (fAno.value.lenght == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        window.alert('tudo ok')
    }


    Outra coisa que poderiamos ter feito seria converter o que foi digitado no formulário para Número. Ficaria assim:
if (fAno.value.length == 0 || Number(fAno.value) > ano)


Agora que já tenho os dados e sei que eles já estão preenchidos, vou pegar o sexo e a idade do nosso formulário e colocar para a idade aparecer na tela:
else { 
    var fsex = document.getElementsByName('radsex')
    var idade = ano - fAno.value    
    }


Obs.: Eu tenho 2 input radios com o mesmo nome. Eles têm que ter o mesmo nome, se não vamos ter um problema que vamos conseguir selecionar os 2 radios e depois não vamos conseguir desmarcar. Isso ocorre quando temos names diferentes.
No caso acima, não vai dar pra selecionar por ID, nem por seletor. Temos que selecionar por NAME.

Nota do professor: precisamos testar nosso programa aos poucos, não adianta ir fazendo tudo de uma vez e testar apenas no final. Isso evita erros no nosso programa.


Continuando: vamos criar uma variável gênero e colocá-la dentro do nosso else:
var gênero = ''   -> vamos deixá-la vazia por enquanto.


Vou verificar agora o sexo da pessoa, isto é, se foi marcado Masculino ou Feminino no input radio:
if (fsex[0].checked) {
    gênero = 'Masculino'
} else if (fsex[1].checked) {
    gênero = 'Mulher'
}

Agora podemos colocar para o resultado aparecer na tela e para aparecer de forma centralizada:
resultado.style.textAlign = 'center'
resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`


Para finalizarmos, vamos ter que colocar a foto na parte de baixo. Para eu colocar a foto, posso criar um img no nosso HTML ou posso criar dinamicamente pelo JavaScript. Existem várias maneiras de fazer isso, mas a que vamos utilizar é a seguinte:

var img = document.createElement('img') // Ele vai criar uma tag img para mim.
img.setAttribute('id', 'foto') // Agora criei um img com id foto.

Obs.: isso é a mesma coisa de irmos no nosso HTML e criarmos um <img ID="foto">



Após isso, vamos carregar a imagem de acordo com o sexo e a idade. Se for homem, vamos testar se ele é uma criança, um jovem, um adulto ou um idoso. Com mulher faremos a mesma coisa. Vamos utilizar as seguintes faixas:

if (fsex[0].checked) { // Se o que tiver marcado como checado for a posição 0 (masculino), faça isso.
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-h.png')
            } else if (idade >= 10 && idade < 18) {
                // Jovem
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade >= 18 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-h.png')
            } else if (idade >= 50) {
                // Idoso
                img.setAttribute('src', 'idoso-h.png')
            }
        } else if (fsex[1].checked) { // Se o que tiver marcado como checado for posição 1 (mulher), faça:
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade >= 10 && idade < 18) {
                // Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade >= 18 && idade < 50) {
                // Adulta
                img.setAttribute('src', 'adulto-m.png')
            } else if (idade >= 50) {
                // Idosa
                img.setAttribute('src', 'idosa-m.png')
            }
        }


==================== NOTAS IMPORTANTES ====================
Para carregarmos qual foto irá carregar dentro das determinadas faixas de idade, utilizamos:
img.setAttribute('src', 'nomedoarquivo.png') -> onde src é o atributo e nomedoarquivo é o seu valor.




Ainda não irá aparecer a imagem. Para eu fazer aparecer a imagem, utilizamos:
resultado.appendChild(img)  -> appendChild serve para adicionarmos um elemento, que no caso é o elemento img.

Dessa forma, nossa imagem aparecerá após o texto: Detectamos ${gênero} com ${idade} anos.


*/