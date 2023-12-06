function tabuada() {
    let num = document.getElementById('txtnum') // Vai pegar o número do input
    let tab = document.getElementById('seltab') // Vai linkar com nossa área de tabuada, que vai aparecer dentro do SELECT

    if (num.value.length == 0) { // Caso o campo de input esteja vazio, aparecerá o alerta abaixo
        window.alert('Por favor, insira um número.')
    } else { // Caso tenha número válido, pega o número e faz os cálculos
        let n = Number(num.value) 
        let contador = 1 // Nosso contador começará em 1 e terminará em 10, pois a tabuada vai de 1 até 10
        tab.innerHTML = `` // Antes de começarmos a mostrar a tabuada eu limpo minha área de tabuada

        while (contador <= 10) {
            let item = document.createElement('option') // Para criarmos elementos OPTION para nosso SELECT
            item.text = `${n} x ${contador} = ${n*contador}`  // Um número x outro número = resultado da multiplicação
            item.value = `tab${contador}`
            tab.appendChild(item) // Adiciona um elemento filho, que vai ser o item
            contador++ // Para somar +1 ao contador toda vez que executarmos o bloco
        }
    }
}





/*
Para fazermos a tabuada, podemos usar tanto o FOR, quanto o WHILE ou DO WHILE.
Neste exercício utilizaremos WHILE, pois já utilizamos FOR no exercício anterior.

Vamos também adicionar elementos no nosso SELECT. Para eu criar elementos qualquer que sejam dentro do JavaScript, vamos fazer o seguinte:

criar uma let item = document.createElement('option') // Para criarmos elementos OPTION para nosso SELECT
Pois dentro do nosso SELECT para eu colocar opções temos que ter OPTIONS

*Obs.: é como se eu tivesse ido no HTML e criado <option></option> dentro do nosso <select></select>

Outra coisa que vamos fazer é:
item.text = `${n} x ${contador} = ${n*contador}` // é a parte de dentro do nosso OPTION

Resumindo: vamos mostrar o número primeiro, depois vamos mostrar o contador (ex: 1x1, 1x2, 1x3) e depois vamos mostrar o resultado.


Para fazermos isso aparecer, vamos ter que colocar nosso tab, que é minha tabuada:

tab.appendChild(item) // Adiciona um elemento filho, que vai ser o item



Nosso programa tem um pequeno problema: ele vai acumulando as tabuadas dentro do nosso SELECT.
Queremos que, ao fazer uma nova tabuada, nosso campo SELECT seja limpo, de modo que apareça só a tabuada do número atual.
Fazemos assim:

tab.innerHTML = `` // Isto é: antes de começarmos a mostrar a tabuada eu limpo minha área de tabuada


A última coisa que faremos é melhorar nossa área de tabuada, deixando ela mais "bonita". Vamos colocar uma mensagem dentro do nosso SELECT para que ela apareça antes de fazermos a tabuada.
Fazemos assim no nosso HTML:

<select name="tabuada" id="seltab" size="10">                
                <option>Digite um número acima...</option>
</select>

Falta só uma coisa. Nossos options tem que ter values



*/