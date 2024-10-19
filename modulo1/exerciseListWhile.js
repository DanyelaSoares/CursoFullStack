const prompt = require("prompt-sync")()

// 4 - Calcule o fatorial de um número
// Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.
// Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.oop while para multiplicar o resultado pelo número atual 
//e depois decrementar o número: Continue o processo até que o número seja 1.

// Função para calcular o fatorial de um número
// function calcularFatorial(numero) {
//     // Verifica se o número é um inteiro positivo
//     if (numero < 0) {
//         return "Número inválido. O fatorial não é definido para números negativos.";
//     }

//     let fatorial = 1; // Inicializa o resultado do fatorial

// Loop para calcular o fatorial
//     while (numero > 1) {
//         fatorial *= numero; // Multiplica o resultado atual pelo número
//         numero--; // Decrementa o número
// //     }

// //     return fatorial; // Retorna o resultado final
// // }

// // // Exemplo de uso
// // const numero = 5; // Substitua este valor pelo número que deseja calcular o fatorial
// // console.log(`O fatorial de ${numero} é ${calcularFatorial(numero)}`);




// //_______________________________________________
// // 5 - Inverta os dígitos de um número
// // Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).
// // Dica: Use operações de módulo e divisão para extrair os dígitos. 

// let number = parseInt(prompt("Digite uma sequencia de numeros:  "))
// let inverter = 0

// while (number > 0) { //continua a rodar enquanto o número for maior que 0. 
//                         //Ou seja, ele vai processar todos os dígitos do número.
//     let digit = number % 10; //O operador % (módulo) dá o resto da divisão de numero por 10.
//                                 // Isso nos dá o último dígito do número (por exemplo, 4 para 1234).
//     inverter = inverter * 10 + digit;; //extrai o ultimo digito Multiplica invertido por 10 
//                                         //(para deixar espaço para o novo dígito) e depois adiciona o digito extraído. 
//                                         //Assim, os dígitos são colocados na ordem invertida.
//     number = Math.floor(number / 10);  //Divide o número por 10 e usa Math.floor() para arredondar para baixo,
//                                         // removendo o último dígito do número original (por exemplo, 1234 se torna 123).
// }

// console.log(`Numero invertido: ${inverter}`)




//_____________________________________________________
// 6 - Verifique se um número é palíndromo
// Escreva um programa que use um loop while para verificar se um número fornecido 
//(por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.


// Solicita o número ao usuário e converte para inteiro
// let numero = parseInt(prompt("Número que queremos verificar: "), 10);

// // Verifica se a conversão foi bem-sucedida e se o número é não negativo
// if (isNaN(numero) || numero < 0) {
//     console.log("Por favor, insira um número inteiro positivo.");
// } else {
//     let original = numero; // Guarda o número original
//     let invertido = 0; // Onde vamos construir o número invertido

//     // Inverte o número
//     while (numero > 0) {
//         let digito = numero % 10; // Pega o último dígito
//         invertido = invertido * 10 + digito; // Adiciona o dígito ao número invertido
//         numero = Math.floor(numero / 10); // Remove o último dígito do número
//     }

//     // Verifica se o número original é igual ao número invertido
//     if (original === invertido) {
//         console.log(original + " é um palíndromo.");
//     } else {
//         console.log(original + " não é um palíndromo.");
//     }
// }


//_______________________________________________________
//Questão 1
// Faça um programa que calcule o fatorial de um número.
// Esse programa deve receber como entrada um número inteiro positivo e imprimir na tela o fatorial dele.


// let num1 = parseFloat("digite um numero: ")
// let number = 0

// while(num1 > 1){
//     number = number*(num1 - 1)
//     num1--
// console.log(number)
// }
// // // 

// let x = parseInt(prompt("numero:  "))
// f = 0

// while (x > 1) {
//     f = f * (x - 1)
//     x--;
//     console.log(x)
// }

// let num1 = parseInt(prompt("Digite um número: ")); // Use prompt para obter a entrada do usuário
// let fatorial = 1;

// while (num1 > 1) {
//     fatorial *= num1; // Multiplica o valor atual de fatorial por num1
//     num1--; // Decrementa num1
// }

// console.log(fatorial);

//_____________________________________________

//Questão 1
// Faça um programa que dado um número inteiro positivo digitado pelo usuário imprima o próximo número primo.

// let numInt = parseInt(prompt("digite um numero:  "))

// Função para encontrar o próximo número primo
function proximoPrimo(num) {
    let proximo = num + 1; // Começa com o próximo número após o número fornecido

    while (true) { // Loop infinito até encontrar um número primo
        let ehPrimo = true; // Assume que o número atual é primo

        // Verifica se 'proximo' é primo
        for (let i = 2; i <= Math.sqrt(proximo); i++) { // Verifica divisores de 2 até a raiz quadrada de 'proximo'
            if (proximo % i === 0) { // Se 'proximo' for divisível por 'i'
                ehPrimo = false; // Não é primo
                break; // Sai do loop de verificação
            }
        }

        // Se 'proximo' for primo e maior que 1
        if (ehPrimo && proximo > 1) {
            return proximo; // Retorna o número primo encontrado
        }

        // Caso contrário, incrementa 'proximo' e continua procurando
        proximo++; // Testa o próximo número
    }
}

// Obtendo o número do usuário
let numero = parseInt(prompt("Digite um número inteiro positivo: "), 10); // Pede ao usuário um número e converte para inteiro

if (numero > 0) { // Verifica se o número é positivo
    let resultado = proximoPrimo(numero); // Encontra o próximo número primo
    console.log(`O próximo número primo após ${numero} é ${resultado}.`); // Exibe o resultado
} else {
    console.log("Por favor, digite um número inteiro positivo."); // Mensagem de erro se o número não for positivo
}



