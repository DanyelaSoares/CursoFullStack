

// const mycar = {
//     model: "BMW",
//     year: 2023,
//     km: 6800
// }
// for(let i in mycar){

//     console.log(i, mycar[i])//imprime  que tem dentro da função+..
// }


//___________________________________________
// let professor = [

//     nome: "Daniela",
//     disciplina: "historia",
//     grades: {
//         student1: 7.0,
//         student2: 8.0,
//         student3: 9.0
//     }
// ] 


// let sumGrades = 0
// let numberOfStudents = 0

// for (let i in professor) {
//     console.log(i, professor[i])


//     for (let student in professor.grades) {
//         sumGrades += professor.grades[student]
//         numberOfStudents++
//     }

//     let average = sumGrades / numberOfStudents

//     console.log(`A nota media da turma é: ${average.toFixed(2)}`)
//     console.log(average >=6
//         ? `${professor.name} esta acima da media`
//         : `${professor.namew} esta abaixo da media`
//     )
//     }


//___________________________________________________
//objetivo: verificar e listar livros publicfados antes de 2000
//use um loop for...of para iterar sobre o array biblioteca
//imprima titulo e ano que atendam a essa condição

// const library = [
//     { title: "teste 1", autor: "eu mesma", year: 1925 },
//     { title: "teste 2", autor: "eu eu eu", year: 1940 },
//     { title: "teste 3", autor: "eu nos eu", year: 2024 },
// ];

// for (let book of library) {
//     if (book.year < 2000) { // Verifica se o ano do livro é menor que 2000
//         console.log(`O livro "${book.title}", escrito por ${book.autor}, foi publicado em ${book.year}`);
//     }
// }


//__________________________________________________

//objetivo: contar a quantidade de filmes por genero;
//use o metodo foreach para iterar sobre o array filmes
//para cada filme verfique se o genero ja existe no objeto de contagem
//se existir, incremente a contagem; se naqo, adicione o genero a objetivo com a contagen inicial de 1


const filmes = [ //array
    { titulo: "Filme 1", genero: "Ação" },
    { titulo: "Filme 2", genero: "Drama" },
    { titulo: "Filme 3", genero: "Ação" },
    { titulo: "Filme 4", genero: "Comédia" },
    { titulo: "Filme 5", genero: "Drama" }
];

const contagemPorGenero = {};//armazena a contagem de filmes

filmes.forEach(filme => {
    if (contagemPorGenero[filme.genero]) {
        contagemPorGenero[filme.genero] += 1; // Incrementa a contagem se o gênero já existir
    } else {
        contagemPorGenero[filme.genero] = 1; // Adiciona o gênero com contagem inicial de 1
    }
});

console.log(contagemPorGenero);


