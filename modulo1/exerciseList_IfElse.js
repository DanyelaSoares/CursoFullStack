
const prompt = require("prompt-sync")()


// 1) Escreva um programa que leia um número e use uma estrutura if
// para verificar se o número é positivo, negativo ou zero. Imprima uma
// mensagem apropriada para cada caso. Negativo é abaixo de zero

// let chosenNumber = Number(prompt("Digite um numero para verificação"))//numero escolhido

// if(chosenNumber > 0){
//     console.log(`O número escolhido é ${chosenNumber} e ele é um numero positivo `)

// }else if (chosenNumber < 0){
//     console.log(`O numero ${chosenNumber} é um número negativo`)

// }else{
//     console.log("O numero é igual a zero")
// }
//ou
//else if (choseNumber === 0){
//}console.log("o numero é zero")
//else{
//console.log("erro")}
//____________________________________________________

// 2) Escreva um programa que leia um ano e use uma estrutura if para
// verificar se o ano é bissexto. Um ano é bissexto se for divisível por 4,
// mas não por 100, exceto se também for divisível por 400. Imprima uma
// mensagem apropriada.

// let year = parseInt(prompt("Digite um ano com 4 digitos:  "))

// if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
//     console.log(`O ano ${year} é bissexto`)

// }else{
//     console.log ("O ano não é bissexto")
// }

//______________________________________________

// 3 - Calcule a média de três números e determine o conceito
// Escreva um programa que leia três notas de um aluno, calcule a
// média e use uma estrutura if/else para determinar o conceito (A, B, C,
// D, F) baseado na média. Imprima o conceito.

//conceito A = aprovado com louvor (media >= 9.0).  IF
//Conceito B = aprovado (media >=7.0 && < 9.0 ) . 
//conceito C = Recuperação (media > 7.0 && <=6.0). 
//Conceito D = Recuperação urgente (media < 6.0 && >= 5.0) 
//conceito E = Reprovado (media <5.0 && >= 1.0)
//conceito F = Sem futuro!! (média >1.0 && >=0)

// Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito..

// let num1 = parseFloat(prompt("Digite o primeiro numero:  "))
// let num2 = parseFloat(prompt("Digite o segundo numero:  "))
// let num3 = parseFloat(prompt("Digite o terceiro numero:  "))

// let media = (num1 + num2 + num3) / 3
// if(media % 1 !== 0){ // Verifica a parte decimal de media e arredonda somente se necessário, para cima mantendo duas casas decimais
//     media = Math.ceil(media * 100) / 100}



// if(media >= 9.0){
//     console.log(`\nVocê obteve conceito A com a nota ${media}. Parabéns!! Você foi aprovado com louvor, orgulhe-se!!`)

// }else if(media >= 7.0 && media < 9.0 ){
//     console.log(`\nVocê obteve conceito B com a nota ${media}. Parabéns!! Você foi aprovado !!`)

// }else if(media > 7.0 && media <= 6.0){
//     console.log(`\nVocê obteve conceito C com a nota ${media}. Você ficou em recuperação! Estude mais!!`)

// }else if(media < 6.0 && media >= 5.0){
//     console.log(`\nVocê obteve conceito D com a nota ${media}. Você esta em recuperação urgente!! Estude, revise o conteudo!!`)

// }else if(media < 5.0 && media >=1.0){
//     console.log(`\nVocê obteve conceito E com a nota ${media}. Você foi reprovado. Precisa se esforçar mais na proxima vez!!`)

// }else{
//     console.log(`\nVocê obteve conceito F com a nota ${media}. Você foi reprovado com nota super baixa. Você não tem futuro!!`)
// }

//_________________________________

// 4 - Verifique se um número é par ou ímpar

// Escreva um programa que leia um número e use uma estrutura
// if/else para verificar se o número é par ou ímpar. Imprima uma mensagem
// apropriada.

// let verification = parseInt(prompt("Digite um numero para verificação:  "))


// if(verification % 2 === 0 ){
//     console.log(`O numero ${verification} é um numero par.`)

// }else{
//     console.log(`O numero ${verification} é um numero impar.`)
// }

//___________________________________________

// 5 - Verifique a categoria de um nadador

// Escreva um programa que leia a idade de um nadador e use uma estrutura
// if/else para determinar a categoria do nadador de acordo com a idade:
//             Infantil A: 5 - 7 anos
//             Infantil B: 8 - 10 anos
//             Juvenil A: 11 - 13 anos
//             Juvenil B: 14 - 17 anos
//             Adulto: 18 anos ou mais



//______________________________________________________

let note1 = parseFloat(prompt('Qual a primeira nota do aluno?  '))
let note2 = parseFloat(prompt('Qual a segunda nbota do aluno?  '))


console.log(`As notas digitadas foram:  ${note1} e ${note2}.`)
let media = (note1 + note2) / 2

if(media >=7.0){
   console.log(`A sua médias foi ${media}, portanto, você foi  APROVADO! `)

   }else{
      console.log(`A sua média foi ${media}, portanto, você foi reprovado! `)
   }
