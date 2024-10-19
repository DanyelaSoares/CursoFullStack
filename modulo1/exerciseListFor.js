const prompt = require("prompt-sync")()


// 1 - Imprima a sequência de Fibonacci até o 10º termo
// Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.

// Inicializa os dois primeiros termos da sequência
// let a = 0, b = 1;

// // Loop para imprimir os primeiros 10 termos
// for (let i = 0; i < 10; i++) {//Este loop irá repetir o bloco de código 10 vezes. Cada iteração representa um termo da sequência de Fibonacci.
//     console.log(a); // Imprime o valor atual de a
//     let next = a + b; // Calcula o próximo termo
//     a = b; // Atualiza o valor de a para o próximo termo
//     b = next; // Atualiza o valor de b para o próximo termo
// }


// //_____________________________________________
// // 2 - Verifique se um número é primo
// // Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. Imprima "É primo" ou "Não é primo".
// // Dica: Um número primo só é divisível por 1 e por ele mesmo.
// // Função para verificar se um número é primo

// function verificarPrimo(numero) { // Caso especial para números menores ou iguais a 1
//                                     //function verificarPrimo(numero): Define a função chamada
//                                     // verificarPrimo que recebe um parâmetro numero,
//                                     //o qual será verificado para determinar se é primo ou não.
//     if (numero <= 1) {
//         return "Não é primo";
//     }

//     // Verifica divisores do número de 2 até o número - 1
//     for (let i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//             return "Não é primo";
//         }
//     }

//     // Se nenhum divisor foi encontrado, o número é primo
//     return "É primo";
// }

// // Exemplo de uso
// const numero = 29; // Substitua este valor pelo número que deseja verificar
// console.log(verificarPrimo(numero));



//_________________________________________________
// 3 - Imprima um triângulo de números
// Escreva um programa que use um loop for para imprimir um triângulo de números.
// Dica: Utilize dois loops for, um dentro do outro.(um para percorrer as linhas e outro para imprimir os números em cada linha.)

// // Função para imprimir um triângulo de números
// function imprimirTriangulo(linhas) {
//     for (let i = 1; i <= linhas; i++) { // Loop para cada linha. Este loop controla o número de linhas do triângulo. Ele começa em 1 e vai até o número total de linhas.
//         let linha = ''; // Inicializa uma string para armazenar a linha atual. construir o conteúdo de cada linha do triângulo
//         for (let j = 1; j <= i; j++) { // Loop para imprimir números na linha atual. Este loop imprime os números em cada linha.
//                                             //O número de iterações aumenta com o valor de i, criando o efeito de triângulo.
//             linha += j + ' '; // Adiciona o número e um espaço à string
//         }
//         console.log(linha); // Imprime a linha atual
//     }
// }

// // Exemplo de uso
// const numeroDeLinhas = 5; // Substitua este valor pelo número de linhas desejado
// imprimirTriangulo(numeroDeLinhas);


//________________________________________


// Escreva um algoritmo que exiba 20 vezes a mensagem “Eu gosto de estudar
// Algoritmos!”

// let message = "Eu gosto de estudar algoritmos"

// for(i = 0; i < 20; i++){
//     console.log(`${message}`)
// }


//_______________________________________________

//Escreva um algoritmo que calcule a soma dos números de 1 a 15. 


// let soma = 0
// for(i = 0; i <= 15; i++){
//     console.log(i)
//     soma += i; 
    
// }
// console.log(`A soma tem o valor de ${soma}`)
//________________________________________________________

//Escreva um algoritmo que exiba 20 vezes a mensagem “Eu gosto de estudar Algoritmos!”. 
// for(i = 0; i< 20; i++){// se fosse <= a 20, inclui o zero e o 20, sendo executado 21 vezes
//     console.log("Eu gosto de estudar algoritmos!")
// }

//__________________________________________

//Escreva um algoritmo que calcule a soma dos números de 1 a 15. 
// let soma = 0
// for(let i = 0; i <= 15; i++){
//     console.log(i)
//     soma += i; 
// }
      
// console.log(soma)

//________________________________

// Leia o nome do usuário e escreva o nome dele na tela 10 vezes. 

// let user = prompt("Digite seu nome: ")

// for(let i = 0; i < 10; i++){
//     console.log(user)
// }

//__________________________________________________
//Escreva um algoritmo que leia 10 números do usuário e calcule a soma desses números. 
// let soma = 0
// let numbers = []//array para armazenar o numeros digitado


// for(let i = 0; i < 10; i++){
//     let number = parseInt(prompt("Digite um número: "))
//     numbers.push(number)//adiciona os numeros ao array
//     soma += number//adiciona nuero à soma
// }

// console.log("Numeros digitados: ")
// for(let i = 0; i < numbers.length; i++){ //Itera sobre o array numeros e imprime cada número no console.
//     console.log(numbers[i])
// }


// console.log(`A soma dos numeros digitados é: ${soma} `)
//______________________________________________________________

//Escreva um algoritmo que leia 10 números do usuário e calcule a soma desses números. numeros impressos lado a lado


let soma = 0;
let numeros = []; // Array para armazenar os números digitados

for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt("Digite um número:"));//numeros digitados
    numeros.push(numero); // Adiciona o número ao array
    soma += numero; // Adiciona o número à soma
}

// Imprime os números digitados lado a lado
let numerosImpressos = numeros.join(' '); // Converte o array em uma string com números separados por espaço
console.log(`Números digitados: ${numerosImpressos}`);

// Imprime a soma dos números
console.log(`A soma dos números digitados é: ${soma}`);
