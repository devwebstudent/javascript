function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(7, 5))


/*
Temos um pequeno problema se fizermos assim:
console.log(soma(2))

Se eu não mandar 2 parâmetros, mandar apenas o número 2 acima, o 2 vai para dentro do n1 e o n2 vai ficar como 'undefined' (indefinido, não definido). A soma entre os 2 vai retornar 'NaN'.

--

Podemos resolver isso deste modo:

function soma(n1=0, n2=0) -> Se eu não passar nem n1 nem n2, quero que tenham valor de 0.

Se eu colocar para somar apenas um valor, como, por exemplo, o 7, ele vai somar 7 + 0, que vai retornar o valor de 7.

*/