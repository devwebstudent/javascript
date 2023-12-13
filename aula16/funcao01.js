function parimpar(n) {
    if (n % 2 == 0) {
        return 'par' // se o número dividido por 2 der resto 0, é sinal de que o número é par
    } else {
        return 'ímpar' // caso contrário, o número é ímpar.
    }
}

console.log(parimpar(4)) // Aqui é a minha chamada e o 4 é o nosso parâmetro, que vai ser jogado lá pra cima dentro de (n). No caso do 4, vai retornar par, que vai ser jogado dentro do console.log