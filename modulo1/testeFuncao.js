//soma arrays

// function somarArray(array){
//     let soma = 0;
//     for(let i = 0; i < array.length; i++){
//         soma += array[i];
//     }
//     return soma;
// }

// let numeros = [1, 2, 3, 4, 5, 6];
// let resultado = somarArray(numeros);

// console.log(`A soma dos elementos do array é:${resultado} `)

//_______________________________________________________________

//maior numero array

function maiorNum(array){
    let retornoMaior = array[0];//inicia a variavel na primeira posição (0). primeiro valor é maior ate que se prove o contrario

    for(let i = 1; i < array.length; i++){ //a partir do segundo elemento (1)

        if(array[i] > retornoMaior){ //Em cada iteração, o código compara o elemento atual (array[i]) com retornoMaior, ou seja, com a posição zero
            retornoMaior = array[i]
        }
        
    }   return retornoMaior;//encontrou o  maior

}

let numeros = [2, 8, 10, 6, 1];
let encontraMaior = maiorNum(numeros)

console.log(encontraMaior)

// 1. Criação da Função maiorNum
// Função maiorNum: Você criou uma função chamada maiorNum que recebe um array como argumento. Esta função será responsável por encontrar e retornar o maior número desse array.

// 2. Inicialização da Variável retornoMaior
// retornoMaior: Dentro da função, você inicializa a variável retornoMaior com o primeiro elemento do array (array[0]). Isso significa que, 
//inicialmente, você assume que o primeiro elemento é o maior até que você encontre um número maior.

// 3. Laço for para Encontrar o Maior Número
// Laço for: Você utiliza um laço for para iterar através do array, começando do segundo elemento (índice 1) até o final do array.
// Comparação e Atualização: Durante cada iteração, você compara o elemento atual (array[i]) com retornoMaior.
// Se o elemento atual for maior que retornoMaior, você atualiza retornoMaior com esse novo valor. Isso significa que, ao final do laço, retornoMaior conterá o maior valor do array.

// 4. Retorno do Maior Valor Encontrado
// return retornoMaior;: Quando o laço for termina, a função retorna o valor armazenado em retornoMaior, que é o maior número encontrado no array.

// 5. Chamada da Função e Armazenamento do Resultado
// Variável encontraMaior: Fora da função, você cria uma variável chamada encontraMaior. Esta variável vai armazenar o valor retornado pela função maiorNum.
// Chamada da Função: Ao chamar a função maiorNum(numeros), você passa o array numeros como argumento, e o resultado (o maior número) é armazenado em encontraMaior.

// 6. Impressão do Resultado
// console.log(encontraMaior);: Finalmente, você usa console.log(encontraMaior); para imprimir o valor armazenado em encontraMaior, que é o maior número encontrado no array.