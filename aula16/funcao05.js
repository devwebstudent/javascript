// RECURSIVIDADE
function fatorial(n) {
    if (n == 1) { // Se eu tentar calcular o fatorial de 1
        return 1 // eu sei que o resultado é 1
    } else { // Se não for 1
        return n * fatorial(n-1) // o número * fatorial(número-1)
    }
}

console.log(fatorial(5))


/* 
Podemos ainda fazer o fatorial de outra maneira diferente, de uma maneira recursiva. Uma recursão acontece quando uma função chama ela mesma. 

No exemplo acima, vamos raciocinar:

5! = 5.4.3.2.1 - se pararmos para analisa, o 4.3.2.1 = 4!

Podemos reescrever assim:
5! = 5 x 4! - isto é: o fatorial de um número pode ser calculado baseado no fatorial de outro.

Por exemplo se temos de forma genérica:

n! = n x (n-1)!

Baseado nesses conceitos, conseguimos fazer uma função recursiva.


O que aconteceu no nosso exercício foi:
Estou criando a função fatorial que dentro dela ela possui uma chamada para ela mesma. Eu tenho fatorial que chama fatorial lá dentro.

Isso que fizemos é o que chamamos de RECURSIVIDADE.



*/