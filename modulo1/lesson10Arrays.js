const prompt = require("prompt-sync")()



// // let thingslist = array()

// thingsList['hardware'] = Array()
// thingsList['fruits'] = Array()
// thingsList['people'] = Array('Dani', 'Caio')

// thingsList['hardware'][0] = 'Notebook'
// thingsList['hardware'][0] = 'Mouse'
// thingsList['hardware'][0] = 'Notebook'

// //implementar função sort para ordenação


// let num = [7, 8, 9]

// num.push(10, 11, 12) //adiciona elementos no final da array
// num.unshift(1,2)//adiciona no inicio
// num.splice(3, 0, 3, 4, 5, 6)//a partir do index 3....vou deletar algum numero? exa 01 se nao. Adiciona os numeros que faltam

// console.log(num)

//LOCALIZANDO ITENS EM UM ARRAY


// let num = [9, 7, 8, 9]

// console.log(num.indexOf(8))// retornou a posição do numero 8  (2)
// console.log(num.indexOf(4)) // numero nao existe, entao ele coloca o sinal de menos -1
// console.log(num.includes(8)) // metodo fala se é falso ou verdadeiro (se o numero esta la)

// referencia: onde passo mais de uma informação dentro de uma array

// let movies = [
//     {id: 1, movieName: 'Dejavu'},
//     {id: 2, movieName: 'Back to the future'},
//     {id: 3, movieName: 'The matrix'}
// ]
// console.log(movies)

// //procurar por um filme

// console.log(movies.includes({id: 1, movieNames: 'Dejavu'}))

// console.log(movies.find(function(movie){
//     return movie.movieName == 'The matrix'
// })) //so funciona com uma função dentro dele

//no caso do include eu nao posso procurar valores dentro de uma array
//quando se trata de varias entradas, tenho que utilizar o find, mas ele so funciona com uma função
//foi criada uma função, ela chama pela variavel e retorna se for igual ao que preciso
//ele retorna, esse retorno vem pra função find, a função find coloca no log e do log pra saida
//array de rfeferencia preciso de find, se for array primitiva nao precisa

//_____________________________________________
//encurtando o maximo possivel ou encurtando a sintaxe:
//podemos remover essa sintaxe: 
// (function(movie){
//     return movie.movieName ==
//     //por uma array function, mais curta

// let movies = [
//         {id: 1, movieName: 'Dejavu'},
//         {id: 2, movieName: 'Back to the future'},
//         {id: 3, movieName: 'The matrix'}
//     ]
//     console.log(movies)
    
//          console.log(movies.includes({id: 1, movieNames: 'Dejavu'}))
    
//     console.log(movies.find(movie => movie.movieName == 'The matrix'))
    //vai procurar a movie, executar a função e procurar dentro de movie.movieName

    //utilizando => eu to falando que ali é uma function e o return esta incluso
    //**movie esta dentro de movieName e la dentro existe The matrix. se existe ele retorna e a função é executada.

    //__________________________________________________________

    //REMOVER ITENS DE UMA ARRAY

// const num = [5, 6, 7, 8]
// //const final = num.pop()  //item removido: 8
// //const final = num.shift() // remove o primeiro: 5
// //const final = num.splice(2, 1) //passei o valor pra ele. "a partir do index 2, quero que remova 1 item"
// const final = num.splice(2, 2) //vai remover 2 itens a partir do index 2


// console.log(num)
// console.log(final)

//push adiciona numeros ao final.
// unshift adiciona itens no inicio da array
// e splice adiciona no meio
//pop tira o ultimo item na array. o pop vai ser - a ultima
//shift: remove o primeiro item da array

//_________________________________
//concate4nando arrays

let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters)
half = all.slice(3,5)

console.log(all)
console.log(half)

//slice = quero pegar uma porção da minh array e criar uma nova array