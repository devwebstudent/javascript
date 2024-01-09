var agora = new Date()
var hora = agora.getHours() //Pega a hora atual do sistema
console.log(`Agora são exatamente ${hora} horas.`)

if (hora >= 6 && hora < 12) {
    console.log(`Bom dia, são ${hora} horas.`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde, são ${hora} horas.`)
} else if (hora >= 18 && hora < 24) {
    console.log(`Boa noite, são ${hora} horas.`)
} else if (hora < 6 || hora > 24) {
    console.log(`Boa madrugada, são ${hora} horas.`)
}