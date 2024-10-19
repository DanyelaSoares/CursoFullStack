const prompt = require("prompt-sync")()

//formula aproximada:

// function somarArray(array) {
//     let soma = 0;
        
//     for(let i = 0; i < array.length; i++) {
//         soma += array[i];
//     }
//     return soma;
// }


// 1. Soma dos Elementos de um Array
//2. Encontre o Maior Número em um Array
//3. Reverter um Array
//4. Criem um novo array contendo apenas os números pares
//5. Contar Ocorrências de um Valor


// //1) Para somar os elementos de um array em JavaScript, você pode criar uma função 
        //que percorre todos os elementos do array e acumula a soma deles

// function somarArray(array) //A função somarArray recebe um array como parâmetro.
   
//     function somarArray(array) {
//         let soma = 0;
        
//         for(let i = 0; i < array.length; i++) {/*O laço começa com i igual a 0 e continua 
//                                                 enquanto i for menor que array.length 
//                                                 (o número de elementos no array). Em cada iteração, 
//                                                 i é incrementado em 1.*/
//             soma += array[i]; /* Dentro do laço, o valor do elemento do array na posição i (array[i])
//                                 é adicionado à variável soma. Esse operador += é uma forma abreviada 
//                                 de escrever soma = soma + array[i];. Em cada iteração, soma acumula 
//                                 o valor do próximo elemento do array.*/
//         }        
//         return soma; //devolver um valor da função para o local
//                        //  onde a função foi chamada. Sem o return, a função somarArray 
//                        //  calcula a soma dos elementos do array, mas não fornece esse 
//                        //  resultado para quem chamou a função.

        // }
    

     //Exemplo de uso
    // let numeros = [1, 2, 3, 4, 5];
    // let resultado = somarArray(numeros);
    
    // console.log("A soma dos elementos do array é: " + resultado);
    

//outra forma.
// function arrSum (arr){
//     let sum = 0

//     for(let i=0; i< arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }


// console.log(arrSum([10, 20, 40, 30]))

    

// // //_________________________________________________________________
// //2. Encontre o Maior Número em um Array

// function encontrarMaiorNumero(array) { //recebe um array como parâmetro.
//     let maior = array[0];  // Assume que o primeiro elemento é o maior.  Inicializa a variável maior 
                                //c com o primeiro elemento do array.

//     for(let i = 1; i < array.length; i++) {
//         if(array[i] > maior) { //Um laço for começa na posição 1 e percorre todos os elementos do array.
//             maior = array[i];  // Atualiza o maior número encontrado. Dentro do laço, é feita uma verificação (if) 
                                    //para ver se o elemento atual (array[i]) é maior que o valor armazenado em maior.
//         }                        //Se o elemento atual for maior, a variável maior é atualizada com esse novo valor.
//     }
    
//     return maior;
// }

// Exemplo de uso
//let numeros = [10, 5, 8, 21, 3];
// let maiorNumero = encontrarMaiorNumero(numeros);

// console.log("O maior número no array é: " + maiorNumero);
// //_________________________________________________________

// 3. Reverter um Array manualmente//Usar o método reverse é a maneira mais simples e direta de reverter um array.

// function reverterArray(array) {
//     let novoArray = []; //Cria um novo array vazio

//     for(let i = array.length - 1; i >= 0; i--) {//Um laço for percorre o array original
                                                    // de trás para frente (começando do último 
                                                    //elemento até o primeiro).
//         novoArray.push(array[i]); //Dentro do laço, cada elemento é adicionado ao novoArray usando o método push.
//     }

//     return novoArray;//A função retorna o novo array revertido.
// }

// // Exemplo de uso
// let numeros = [1, 2, 3, 4, 5];
// let arrayRevertido = reverterArray(numeros);

// console.log("Array original: " + numeros);
// console.log("Array revertido: " + arrayRevertido);

//______________________________________________________
//reverter um array por função

// function reverterArray(array) {
//     let novoArray = [];//cria array vazio

//     for(let i = array.length - 1; i >= 0; i--) { //Um laço for percorre o array original de trás para frente, /
//                                                   //começando do último elemento até o primeiro
//                                                   // (i = array.length - 1; i >= 0; i--).
//         novoArray.push(array[i]);//adiciona elementos ao final de um array.
//     }

//     return novoArray;//novo array com os elementos de forma invertida
// }

// // Exemplo de uso
// let numeros = [1, 2, 3, 4, 5];
// let arrayRevertido = reverterArray(numeros);//essa variavel vai chamar a função para ser usada no array(numeros)

// console.log("Array original: " + numeros);
// console.log("Array revertido: " + arrayRevertido);
//Uso da Função:
// Criamos um array numeros com os elementos [1, 2, 3, 4, 5].
// Chamamos a função reverterArray passando o array numeros como argumento.
// O array revertido é armazenado na variável arrayRevertido e, em seguida, impresso no console.


// //________________________________________________________
// //Criem um novo array contendo apenas os números pares
// function filtrarNumerosPares(array) {
//     let numerosPares = [];

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] % 2 === 0) {
//             numerosPares.push(array[i]);
//         }
//     }

//     return numerosPares;
// }

// // Exemplo de uso
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrayPares = filtrarNumerosPares(numeros);

// console.log("Números pares: " + arrayPares);

// //________________________________________
// //Contar Ocorrências de um Valor

// function contarOcorrencias(array, valor) {
//     let contador = 0;

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === valor) {
//             contador++;
//         }
//     }
//     return contador;
// }

// // Exemplo de uso
// let numeros = [1, 2, 3, 4, 2, 5, 2, 6, 2, 7];
// let valorParaContar = 2;
// let ocorrencias = contarOcorrencias(numeros, valorParaContar);

// console.log("O valor " + valorParaContar + " aparece " + ocorrencias + " vezes no array.");

//________________________________________
//extrair uma string

// let nome = "equipe olimpica"

// console.log("Jaques".length)
// console.log("Jaques".charAt(0))
// console.log(nome.indexOf('q'))

//console.log(nome.replace('Ja', 'Mar'))

// console.log(nome.substr(7, 8))//a partir da setima posição, 8 caracteres
// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())
// console.log(nome.trim)//remove extremidades em branco de uma string
// console.log('-' + nome.trim() + '-')

// //matematicos
// console.log(Math.ceil())//arre p cima
// console.log(Match.floor())//arre p baixo
// console.log(Math.round())//arredonda inteligente
// console.log(Math.sqrt ()) //raiz
// console.log(Math.pow()) //potenciação
// console.log(Math.cbrt ())// raiz cubica
// console.log(Math.abs()) //absoluto
// console.log(Math.random())//numero aleatorio

//datas

// let date = new Date()
// console.log(date.getDate() + 720)//adicionar dias
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())//ano atual
// console.log(date.getDate()+720)//para mudar a data
// console.log(date.ToString())

let date1 = new Date(2024, 8,6)
let date2 = new Date(2024, 7,6)//data e hora
console.log(date1)

console.log(date1.getTime())//converte a data para milisegundos)

//calcular a diferença entre datas
console.log(date1.getTime())
console.log(date2.getTime())

let milisecondes_between_dates = Math.abs(date1.getTime() - date2.getTime())
console.log(milisecondes_between_dates)

//milisegundos em dias
let milisecondes_per_day = (1 * 24 * 60 * 60 * 1000)
console.log(`um dia tem ${milisecondes_per_day} milisegundos`)

console.log(`A diferença entre as datas é de ${Math.ceil(milisecondes_between_dates/milisecondes_per_day)} dias`)

