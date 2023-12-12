let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

console.log(valores)

/* para consultar os valores em cada indice da array.

----- VERSÃO BURRRA -----
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

----- VERSÃO MAIS INTELIGENTE -----
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}

*/


// ----- VERSÃO INTELIGENTE MAIS SIMPLIFICADA -----
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}