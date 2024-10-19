const prompt = require("prompt-sync")()

// 6 - Verifique o dia da semana
// Escreva um programa que leia um número de 1 a 7 e use uma
// estrutura switch para imprimir o dia da semana correspondente. (1 =
// Domingo, 2 = Segunda-feira, etc.)



// function daysWeek(week) {
//   switch (week) {
//     case 1:
//       console.log("Sua escolha foi opção 1: Domingo");
//       break;
//     case 2:
//       console.log("Sua escolha foi Segunda-feira");
//       break;
//     case 3:
//       console.log("Sua escolha foi Terça-feira");
//       break;
//     case 4:
//       console.log("Sua escolha foi Quarta-feira");
//       break;
//     case 5:
//       console.log("Sua escolha foi Quinta-feira");
//       break;
//     case 6:
//       console.log("Sua escolha foi Sexta-feira");
//       break;
//     case 7:
//       console.log("Sua escolha foi Sábado");
//       break;
//     default:
//       console.log("Número inválido. Por favor, insira um número de 1 a 7.");
//   }
// }


// const week = parseInt(prompt("Digite um número de 1 a 7: "));

// daysWeek(week);

//______________________________________________________________________

// 7 - Calcule o valor de uma expressão matemática simples

// Escreva um programa que leia dois números e um operador (+, -, *,
// /) e use uma estrutura switch para calcular o resultado da operação.
// Imprima o resultado.

// let num1 = parseFloat(prompt("Digite o primeiro numero: "))
// let num2 = parseFloat(prompt("Digite o segundo numero: "))
// let operator = prompt("Digite o operador para realizar o calculo (+, -, /, *): ")


//     switch (operator) {
//         case '+':
//             console.log("Você escolheu: Soma (+) ")
//             console.log(`Resultado: ${num1 + num2}`)
//             break
//         case '-':
//             console.log("Você escolheu: Subtração (-) ")
//             console.log(`Resultado: ${num1 - num2}`)    //`Resultado: ${Math.abs(num1 - num2)}`)//para garantir que o resultado seja sempre positivo, independentemente da ordem dos operandos
//             break
//         case '/':
//             console.log("Você escolheu: Divisão (/) ")
//             console.log(`Resultado: ${num1 / num2}`)
//             break;
//         case '*':
//             console.log("Você escolheu: Multiplicação (*)")
//             console.log(`Resultado: ${num1 * num2}`)
//             break
//         default:
//             console.log("Operador inválido. Por favor, use +, -, *, ou /.");
//             return;
//         }

//_________________________________________________________________

// 8 - Verifique a estação do ano
// Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente. (1 =
// Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)

// console.log("1 - Outono")
// console.log("2 - Inverno")
// console.log("3 - Primavera")
// console.log("4 - Verão")
// let station = parseInt(prompt("Escolha a estação do ano de acordo com o menu:"))


// switch (station) {
//     case 1:
//         console.log("você escolheu a opção 1: Outono")
//         break
//     case 2:
//         console.log("você escolheu a opção 2: Inverno)")
//         break
//     case 3:
//         console.log("você escolheu a opção 3: Primavera")
//         break
//     case 4:
//         console.log("você escolheu a opção 4: Verão")
//         break
//     default:
//         console.log(" Você escolheu uma opção inválida! ")
//         return
// }

//_____________________________________________________

// Exercícios combinados
// 9 - Verifique a faixa etária de uma pessoa
// Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

// Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem específica para cada faixa etária.

// Leitura da idade
// let idade = parseInt(prompt("Digite a sua idade: "));

// // Determinação da faixa etária usando if/else
// let faixaEtaria


// if (idade >= 0 && idade <= 12) {
//     faixaEtaria = "Criança";
// } else if (idade >= 13 && idade <= 17) {
//     faixaEtaria = "Adolescente";
// } else if (idade >= 18 && idade <= 59) {
//     faixaEtaria = "Adulto";
// } else if (idade >= 60) {
//     faixaEtaria = "Idoso";
// } else {
//     faixaEtaria = "Idade inválida";
// }

// // Impressão da mensagem usando switch
// switch (faixaEtaria) {
//     case "Criança":
//         console.log("Você é uma criança. Aproveite sua infância!");
//         break;
//     case "Adolescente":
//         console.log("Você é um adolescente. Esta é uma fase de muitas mudanças!");
//         break;
//     case "Adulto":
//         console.log("Você é um adulto. Hora de encarar as responsabilidades!");
//         break;
//     case "Idoso":
//         console.log("Você é um idoso. Aproveite sua sabedoria e experiência!");
//         break;
//     default:
//         console.log("Idade inválida.");
// }
//______________________________________________
// 10 - Calcule o IMC e determine a categoria

// Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
// if/else para determinar a categoria:
//             Abaixo do peso: IMC < 18.5
//             Peso normal: IMC 18.5 - 24.9
//             Sobrepeso: IMC 25 - 29.9
//             Obesidade grau I: IMC 30 - 34.9
//             Obesidade grau II: IMC 35 - 39.9
//             Obesidade grau III: IMC >= 40
// Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).
// IMC = peso/(altura x altura).

// let bodyWeight = parseFloat(prompt("Digite seu peso corporal: "))
// let height = parseFloat(prompt("Digite sua altura: "))

// let result = parseFloat((bodyWeight / (height * height)))
// if (result % 1 !== 0) {
//     result = Math.ceil(result * 100) / 100
// }



// console.log(`Você digitou: Peso: ${bodyWeight}, Altura: ${height}.\n`)

// if (result >= 18.5) {
//     imc = "Abaixo"
// } else if (result >= 18.5 && result <= 24) {
//     imc = "Normal"
// } else if (result >= 25 && result <= 29.9) {
//     imc = "Sobrepeso"
// } else if (result >= 25 && result <= 29.9) {
//     imc = "Obes1"
// } else if (result >= 35 && result <= 39.9) {
//     imc = "Obes2"
// } else if (result >= 40) {
//     imc = "Obes3"
// }


// switch (imc) {
//     case "Abaixo":
//         console.log(`O resultado de seu IMC foi de ${result}. Voce esta abaixo do peso`);
//         break;
//     case "Normal":
//         console.log(`O resultado de seu IMC foi de ${result}. Voce esta com seu peso normal`);
//         break;
//     case "Sobrepeso":
//         console.log(`O resultado de seu IMC foi de ${result}. Voce esta com sobrepeso`);
//         break;
//     case "Obes1":
//         console.log(`O resultado de seu IMC foi de ${result}. Voce esta com obesidade grau 1`);
//         break;
//     case "Obes2":
//         console.log(`O resultado de seu IMC foi de ${result}. Voce esta com obesidade grau 2`)
//     case "Obes3":
//         console.log(`O resultado de seu IMC foi de ${result}. Voce esta com obesidade grau 3`)
//         break;
//     default:
//         console.log("?")

// }
// _______________________________________________________________



// console.log("0 = Segunda-feira\n1 = Terça-feira\n2 = Quarta-feira\n3 = Quinta-feira\n4 = Sexta-feira\n5 = Sábado\n6 = Domingo\n")

// let choice = prompt(" Digite um numero conforme o menu acima para dizer que dia da semana é hoje: ")

// //dou nome para as variaveis, depois crio uma variavel que nao precisa declarar
// //e esta variavel, neste caso, esta no if else

// if (choice == "0") {
//     dayWeek = "Segunda"
// } else if (choice == "1") {
//     dayWeek = "Terça"
// } else if (choice == "2") {
//     dayWeek = "Quarta"
// } else if (choice == "3") {
//     dayWeek = "Quinta"
// } else if (choice == "4") {
//     dayWeek = "Sexta"
// } else if (choice == "5") {
//     dayWeek = "Sabado"
// } else if (choice == "6") {
//     dayWeek = "Domingo"
// } else {
//     dayWeek = "Erro"
// }


// switch (dayWeek) {
//     case "Segunda":
//         console.log("Hoje é Segunda-feira");
//         break;
//     case "Terça":
//         console.log("Hoje é Terça-feira");
//         break;
//     case "Quarta":
//         console.log("Hoje é Quarta-feira");
//         break;
//     case "Quinta":
//         console.log("Hoje é Quinta-feira");
//         break;
//     case "Sexta":
//         console.log("Hoje é Sexta-feira");
//         break;
//     case "Sabado":
//         console.log("Hoje é Sabado");
//         break;
//     case "Domingo":
//         console.log("Hoje é Domingo");
//         break;
//     case "Erro":
//         console.log("Digite um numero válido conforme o menu acima! ");


// }

//__________________________________________________________

console.log("Escolha o que deseja fazer: ")
console.log("1 - Fazer Check \n2 - Chamar serviço de quarto\n3 - Fazer pedido\n")

let choice = prompt("Digite sua escolha: ")


if (choice == "1") {
    option = "check"
} else if (choice == "2") {
    option = "service"
} else if (choice == "3") {
    option = "order"
} else {
    option = "Erro"
}


switch (option) {
    case "check":
        console.log("Você solicitou: Fazer check-in.")
        break
    case "service":
        console.log("Você solicitou: Chamar serviço de quarto.")
        break
    case "order":
        console.log("Voce solicitou: Fazer pedido.")
        break
    case "Erro":
        console.log("Digite um numero invá0lido")
}