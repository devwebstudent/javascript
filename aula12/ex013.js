var agora = new Date()
var diaSem = agora.getDay() //Para pegarmos o dia da semana.

/* Para o JavaScript, os dias da semana são assim:

0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado

*/

switch (diaSem) {
    case 0: //Se meu dia da semana for 0
        console.log('Hoje é Domingo')
        break
    
    case 1: 
        console.log('Hoje é Segunda')
        break
    
    case 2: 
        console.log('Hoje é Terça')
        break
    
    case 3: 
        console.log('Hoje é Quarta')
        break

    case 4: 
        console.log('Hoje é Quinta')
        break
    
    case 5: 
        console.log('Hoje é Sexta')
        break

    case 6: 
        console.log('Hoje é Sábado')
        break

    default:
        console.log('[ERRO]: Dia inválido!')
        break //Esse break é opcional, pois não temos comandos em baixo
}
