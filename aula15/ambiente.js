let num = [5, 8, 2, 9, 3] // cada espaço desta array tem a chave (indice) = 0, 1, 2, 3, 4 respectivamente, ou seja, está dividida em 5 elementos.
num.push(1) // adiciona o valor '1' no final da array, gerando o index 6.
num.sort() // ordena os valores de um array em ordem crescente.
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O segundo valor é ${num[1]}`)

let pos = num.indexOf(4) // procura um valor dentro da array e diz qual é seu index.
if (pos == -1) { // -1 indica que o valor não foi encontrado dentro da array.
    console.log(`O valor não existe`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}