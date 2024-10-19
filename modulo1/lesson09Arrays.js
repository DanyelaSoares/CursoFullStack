const prompt = require("prompt-sync")()


//Soma de elementos de um array

// let number = [2,4,6,9,7]
// let sum = 0

// console.log(`O tamano do array é de ${number.length} elementos.`)// tamanho do meu array


// for(i = 0; i < number. length; i++) {
//      sum += number[i] } 
//      console. log(`A soma dos elementos é ${sum}`);

//__________________________________

// let number = [2, 4, 6, 9, 7];
// let sum = 0;
// let max = number[0]; // Inicialize com o primeiro elemento do array

// console.log(`O tamanho do array é de ${number.length} elementos.`); // Tamanho do array

// for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//     if (number[i] > max) {
//         max = number[i]; // Atualiza o maior número
//     }
// }

// console.log(`A soma dos elementos é ${sum}`);
// console.log(`O maior número do array é ${max}`);

// __________________________________________________________

// let number = [2, 4, 6, 9, 7];
// let sum = 0;
// let max = number[0]; // Inicialize com o primeiro elemento do array

// console.log(`O tamanho do array é de ${number.length} elementos.`); // Tamanho do array

// for (let i = 0; i < number.length; i++) {
//     sum += number[i]; // Soma os elementos do array
//     if (number[i] > max) {
//         max = number[i]; // Atualiza o maior número
//     }
// }

// console.log(`A soma dos elementos é ${sum}`);
// console.log(`O maior número do array é ${max}`);

//_______________________________________

// Reverter um array

// let arr = [2, 4, 6, 9, 7];
// let reversed = [];

// for(let k = arr.length - 1; k >= 0; k--){
//     reversed.push(arr[k]);//método em JavaScript que adiciona um ou mais elementos ao final de uma array
// }

// console.log(reversed);




// crie um novo array contando somente pares

// let evens = []
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let m = 0; m < arr.length; m++){
//     if(arr[m] % 2 == 0) // Verifica se o número atual (arr[m]) é par 
//         evens.push(arr[m]) //Se a condição no if for verdadeira (ou seja, se o número for par), este número é adicionado ao final da array evens usando o método push.


// }
// console.log(evens)


//receb um valor a ser pesquisado e dizer se o valor esta no array, e se aparece, quantas vezes aparece

//contar ocorrencias de um valor
// let vet = [10, 10, 7, 5, 10];
// let value = 10;
// let cont = 0;

// for(let i = 0; i < vet.length; i++){
//     if(vet[i] === value){
//         cont++;
//     }
// }

// console.log(`O valor ${value} aparece ${cont} vezes.`);

// const prompt = require("prompt-sync")()

//o que aconteceu?
// Declaração das variáveis:

// let vet = [10, 10, 7, 5, 10];: Cria uma array vet contendo os valores [10, 10, 7, 5, 10].
// let value = 10;: Define o valor que queremos contar as ocorrências, que é 10.
// let cont = 0;: Inicializa uma variável cont com 0, que será usada para contar as ocorrências de value na array vet.


//explicação: loop for:

// for(let i = 0; i < vet.length; i++): Itera sobre cada elemento da array vet utilizando o índice i.
// if(vet[i] === value): Verifica se o elemento atual vet[i] é igual ao value. Se for, incrementa a variável cont com cont++.


// let list = ["Daniela", "Matheus", "Bernardo", "Alexandre", "Patrick", "Andre"];

// console.log(list.length)

// console.log(list[0])

// console.log(list)

//console.log(list.indexOf("x"))
// list.push("Guilherme")
// list.pop() //tira o ultimo elemento inserido

//  console.log(list)
// // // console.log(list.pop = []);
// // list.pop()

// // list = [];//deixa o array vazio
// // console.log(list[1])

// //trocar a posição de um elemento
// list[1]= "Marciano"
// console.log(list)

// for(let i = 0; i < list.length; i++){
//     console.log(list[i])
// }
    

//array de notas
// let notas = [8.5, 8.2, 10, 7.8]
// let soma = 0
// console.log(notas)

// for(let i = 0; i < notas.length; i++){
//      soma +=(notas[i])/4;
     
// }
// //console.log(soma)


// console.log(soma)

// if(soma >= 7.0){
// console.log(`Sua nota foi ${soma}, portanto, voce esta APROVADO`)
// }else{
//  console.log(`Sua nota foi ${soma}, portanto, você esta REPROVADO`)
//  }

let notas = [8, 8.5, 5]


function media(){
    var soma = 0;
    for(let i = 0; i < notas.length; i++){
        soma += (notas[i])
    }
    var m = soma/notas.length;
    console.log(m);
}

media()