let num = document.querySelector('input#fnum') // Pega o número digitado no input number.
let lista = document.querySelector('select#flista') // Linkando com nosso select de id "flista".
let res = document.querySelector('div#res') // Linkando com nossa div de id "res".
let valores = [] // Esse vetor vazio vai ser usado para analisar os dados.

function isNumero(n) { // Vai receber um número.
    if(Number(n) >= 1 && Number(n) <= 100) { // Ele só vai aceitar valores entre 1 e 100.
        return true
    } else {
        return false
    }
}

function inLista(n, l) { // Para sabermos se o número está dentro da lista ou não. Aqui temos o número e a lista.
    if(l.indexOf(Number(n)) != -1) { // O -1 indica que o valor não foi encontrado na lista.
        return true
    } else {
        return false
    }
}

function adicionar() { // Para adicionar, tenho que verificar se é um número e ele não pode estar na lista.
    if (isNumero(num.value) && !inLista(num.value, valores)) { // Só vai adicionar se for número e não estiver na lista. O inLista vai passar o valor e a lista, que é o meu vetor valores.
        window.alert('Tudo OK!')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}





/*
Para eu fazer a adição do elemento, temos que fazer 2 funções, como vemos na linha 6 e 14.



*/