const prompt = require("prompt-sync")()

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) { // Corrigido de 'lengt[i]' para 'length'
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`);
//     }
// }


//___________________________________________________________________________
// Função para somar duas matrizes
// Função para somar duas matrizes
// function somarMatrizes(matrizA, matrizB) {
//     let linhas = matrizA.length;
//     let colunas = matrizA[0].length;
    
//     // Cria uma matriz para armazenar o resultado
//     let matrizResultado = [];

//     // Percorre cada linha das matrizes
//     for (let i = 0; i < linhas; i++) {
//         // Cria uma nova linha para a matriz resultado
//         matrizResultado[i] = [];
        
//         // Percorre cada coluna da linha atual
//         for (let j = 0; j < colunas; j++) {
//             // Soma os elementos correspondentes e armazena no resultado
//             matrizResultado[i][j] = matrizA[i][j] + matrizB[i][j];
//         }
//     }

//     return matrizResultado;
// }

// // Exemplo de uso
// const matrizA = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const matrizB = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1]
// ];

// const resultado = somarMatrizes(matrizA, matrizB);
// console.log("Matriz Resultado:");
// console.log(resultado);

//_________________________________________________________________
let matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrizB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

let matrizResultado = [];//matriz vazia p/ armazenar o resultado

for (let i = 0; i < matrizA.length; i++) {// percorre cada linha das matrizes. matrizA.length fornece o número total de linhas na matriz
    matrizResultado[i] = [];
    for (let j = 0; j < matrizA[i].length; j++) {//percorre cada coluna da linha atual. 
        matrizResultado[i][j] = matrizA[i][j] + matrizB[i][j];//soma os elementos correspondentes
                                                                // das duas matrizes e armazena o resultado na matriz de resultado.
    }
}

console.log("Matriz Resultado:");
console.log(matrizResultado);
