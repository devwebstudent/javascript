let num = document.querySelector('input#fnum') // Pega o número digitado no input number.
let lista = document.querySelector('select#flista') // Linkando com nosso select de id "flista".
let res = document.querySelector('div#res') // Linkando com nossa div de id "res".
let valores = [] // Esse vetor vazio vai ser usado para analisar os dados.

function isNumero(n) { // Vai receber um número.
    if (Number(n) >= 1 && Number(n) <= 100) { // Ele só vai aceitar valores entre 1 e 100.
        return true
    } else {
        return false
    }
}

function inLista(n, l) { // Para sabermos se o número está dentro da lista ou não. Aqui temos o número e a lista.
    if (l.indexOf(Number(n)) != -1) { // O -1 indica que o valor não foi encontrado na lista.
        return true
    } else {
        return false
    }
}

function adicionar() { // Para adicionar, tenho que verificar se é um número e ele não pode estar na lista.
    if (isNumero(num.value) && !inLista(num.value, valores)) { // Só vai adicionar se for número e não estiver na lista. O inLista vai passar o valor e a lista, que é o meu vetor valores.
        valores.push(Number(num.value)) // Vamos adicionar o número digitado no input dentro do nosso array.
        let item = document.createElement('option') // Estamos criando option para nosso select.
        item.text = `Valor ${num.value} adicionado.` // Esse item vai ter o seguinte texto.
        lista.appendChild(item) // Adicionando nosso item (option) dentro da lista (select).
        res.innerHTML = '' // Para que seja limpa a nossa div res caso seja adicionado algum novo número.
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // Atributo vazio, para ele apagar o que está dentro de num após adicionarmos um número.
    num.focus() // É como se eu clicasse com o mouse dentro do nosso input para o cursor voltar a piscar.
}

function finalizar() {
    if(valores.length == 0) { // Se o vetor estiver vazio.
        window.alert('Adicione valores antes de finalizar!') // Vai aparecer essa mensagem caso clicamos no botão finalizar sem nada.
    } else { // Caso contrário, faça isso.
        let total = valores.length // Total de elementos. Vai guardar o total de elementos do nosso array (vetor).
        let maior = valores[0]
        let menor = valores[0] // O maior e o menor número, caso tenhamos 1 número, é o primeiro valor.
        let soma = 0
        let media = 0
        for (let pos in valores) { // Para cada posição em valores, vamos fazer um teste abaixo, que vai verificar:
            soma += valores[pos] // Para ele ir somando o valor atual com os seguintes (segundo, terceiro, etc.).
            if (valores[pos] > maior) // Se o valor na posição pos for maior que o maior valor.
                maior = valores[pos] // O maior valor passa a ser valores[pos] - deixa de ser o anterior e passa a valer esse.
            if (valores[pos] < menor) // Se o valor na posição pos for menor que o menor valor.
                menor = valores[pos] // O menor passa a ser o valores[pos].
        }
        media = soma / total // Para calcularmos a média.

        res.innerHTML = '' // Para zerar o valor.
        res.innerHTML += `<p>Ao todo temos <strong>${total}</strong> números cadastrados.</p>` // Vai mostrar na nossa div res o total de elementos dentro do array.
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados foi de <strong>${media}</strong>.</p>`
    }
}




/*
Para eu fazer a adição do elemento, temos que fazer 2 funções, como vemos na linha 6 e 14.

No VÍDEO 32 temos nossa página e quando eu mando adicionar um número no select, não acontece nada. Ele não vai pra nossa lista e nem vai para o vetor.
Vamos resolver isso.
A primeira coisa que vamos fazer é adicionar o valor na lista. Então se o número for realmente um número e não tiver na lista (linha 23), vamos fazer o que fizemos na linha 24, onde vamos adicionar valores digitados no input dentro do nosso array.


Agora vamos dar nosso retorno visual, de modo que os números adicionar no nosso array apareçam no select.
Para adicionar esses valores no nosso select, temos que criar nossos option. Para isso, vamos criar um item (linha 24), deste modo:

let item = document.createElement('option') -> ele vai criar a tag option

E esse item vai ter o valor text, e fica assim:
item.text = `Valor ${num.value} adicionado.` -> string com possibilidade de interpolação

Para adicionar na lista eu tenho que colocar (linha 27):
lista.appendChild(item)

Algo que está incomodando no nosso formulário é quando adicionamos um número no select e ele continua aparecendo no input. Resolvemos isso na nossa linha 31 e 32, assim:

num.value = ''
num.focus()

Com isso, concluimos a parte de adicionar os números. 

Agora é fazer com que o botão 'Finalizar' analise todos os dados que estão no array valores. Vamos analisar esses dados para poder totalizar e mostrar as funcionalidades que eu quero.


--------------------- BOTÃO FINALIZAR (CONFIGURAÇÕES) --------------------
A primeira coisa que vamos fazer é começar o programa, não adicionar nenhum número e clicar em 'Finalizar', não pode finalizar, pois não temos dado.

Vamos no HTML e no botão 'Finalizar' chamamos a função finalizar(), que é um método que vou criar no nosso script. Depois disso, ao clicarmos em 'Finalizar', se não tivermos dado nenhum, não vamos poder finalizar, pois não temos valores nenhum no input nem na lista.

Após isso, vamos colocar para que apareça um alerta caso tentemos finalizar sem nenhum dado no input e na lista. Fica assim:
window.alert('Adicione valores antes de finalizar!')

No nosso else, vamos fazer a análise dos nossos valores (linha 39). 


Outra coisa que temos que fazer é, se está aparecendo algo escrito na nossa div res, que ela seja limpa caso adicionemos um novo número na nossa lista. Faremos isso dentro da nossa função adicionar(), logo abaixo do lista.appendChild(item). Fica assim (linha 28):
res.innerHTML = ''-> se eu adicionar um novo número, ele tem que limpar a div res; depois vamos ter que clicar em finalizar de novo para que gere um novo resultado na nossa div res.


A próxima coisa que precisamos fazer é exibir o maior e o menor número. Para eu analisar o menor e o maior número, tenho que começar do primeiro e ir varrendo todos os outros. Concorda que quando analisamos o primeiro número ele não é nem o maior e nem o menor? O maior e o menor número é ele, pois ainda não foram adicionados outros números. Vamos fazer o seguinte (linha 41 e 42):
let maior = valores[0]
let menor = valores[0]

E nossas variáveis para a soma e para a média (linhas 43 e 44):
let soma = 0
let media = 0

O maior e o menor número até o momento é o primeiro. Faremos então algumas configurações (a partir da linha 45);




*/