function contar() {
    // Por mais que as caixas de texto sejam numéricas, o JS considera como STRING, por isso fizemos conversões a partir da linha 13
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar' // No caso de deixarmos algum campo em branco

    } else {
        resultado.innerHTML = 'Contando: <br>' // Vai aparecer contando se eu colocar os dados corretamente
        let ini = Number(inicio.value) // Vou pegar o valor dentro de inicio e converter para número
        let f = Number(fim.value)
        let pas = Number(passo.value)

        if (pas <= 0) { // O passo vai receber 1 caso alguém coloque PASSO 0
            window.alert('Passo inválido! Considerando PASSO 1.')
            pas = 1
        }

        if (ini < f) { // Caso o início seja menor que o fim, faça isso
            // Contagem crescente
            for (let contador = ini; contador <= f; contador += pas) {
                resultado.innerHTML += ` ${contador} \u{27A1}`
            }
        }

        else { // Caso o início seja maior que o fim, faça isso
            // Contagem decrescente
            for (let contador = ini; contador >= f; contador -= pas) {
                resultado.innerHTML += ` ${contador} \u{27A1}`
            }

        }
        resultado.innerHTML += ` \u{1F3C1}` /* O código dos emojis só funcionam se for \u{} */
    }
}
