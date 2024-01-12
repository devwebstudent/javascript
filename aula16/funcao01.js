function parimpar(n) {
    if (n % 2 == 0) {
        return 'par' // se o número dividido por 2 der resto 0, é sinal de que o número é par
    } else {
        return 'ímpar' // caso contrário, o número é ímpar.
    }
}

let res = parimpar(4) // CHAMADA e o 4 é o nosso parâmetro, que vai ser jogado lá pra cima dentro de (n). No caso do 4, vai retornar par, que vai ser jogado dentro do res
console.log(res) // Se mando exibir res, aparecerá o resultado, que no caso é par.