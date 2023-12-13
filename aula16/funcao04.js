function fatorial(n) { // Function fatorial vai receber um número e retornar um fatorial desse número.
    let fat = 1
    for (let c = n; c > 1; c--) { // Contador começando com um número (n); enquanto contador for maior do que 1, o contador vai perdendo 1. 
        fat *= c
    } 
    return fat
}

console.log(fatorial(5)) // Me mostra na tela o fatorial de 5.



/* 
Nesse exercício vamos calcular o fatorial de um número. Exemplo:

5! = 5.4.3.2.1 = 120


Podemos ainda fazer o fatorial de outra maneira diferente da de cima, de uma maneira recursiva. Uma recursão acontece quando uma função chama ela mesma. 
Veja mais no funcao05.js

*/