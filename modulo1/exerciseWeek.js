// const prompt = require("prompt-sync")();

// let dayNumber = Number(prompt('Digite um número de 1 a 7'));

// switch (dayNumber) {
//     case 1:
//         console.log('Hoje é segunda-feira')
//         break
//     case 2:
//         console.log('Hoje é terça-feira')
//         break
//     case 3:
//         console.log('Hoje é quarta-feira')
//         break
//     case 4:
//         console.log('Hoje é quinta-feira')
//         break
//     case 5:
//         console.log('Hoje é sexta-feira')
//         break
//     case 6:
//         console.log('Hoje é sabado')
//         break
//     case 7:
//         console.log('Hoje é domingo')
//         break
//     default:
//         console.log('Número inválido. Por favor, digite um número entre 1 e 7.');
// }


const prompt = require("prompt-sync")()

nome = prompt("Qual seu nome? ")
idade = prompt("Qual sua idade? ")

if (idade >= 18) {
  console.log("Pode tirar a habilitação!")
} else {
  console.log(
    "Você não tem idade suficiente para tirar a carteira de habilitação")
}

