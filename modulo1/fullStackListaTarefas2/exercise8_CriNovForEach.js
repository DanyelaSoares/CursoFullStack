/*
8. Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/


let movies = [
    { titulo: "O Senhor dos Anéis", diretor: "Peter Jackson", anoLancamento: 2001 },
    { titulo: "Matrix", diretor: "Lana Wachowski, Lilly Wachowski", anoLancamento: 1999 },
    { titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
];

let movieTitles = [];

movies.forEach(movie => {
    movieTitles.push(movie.titulo);
});

console.log(movieTitles);


/*
Verifique se o Node.js está instalado no seu sistema com
o comando node -v no terminal. Se o Node.js não estiver
instalado, faça o download e a instalação a partir do site
oficial do Node.js. Salve o código fornecido em um arquivo .js
no seu computador. Navegue até o diretório onde o arquivo .js está salvo.
Se estiver usando o VS Code,você pode abrir o terminal
integrado no VS Code. No terminal, execute o código usando
o comando node nome_do_arquivo.js.Substitua nome_do_arquivo.js
pelo nome do arquivo onde o código foi salvo.

O código define um array de objetos filmes, onde cada objeto representa
um filme com propriedades titulo, diretor, e anoLancamento.
Utiliza o método forEach para iterar sobre cada filme no array e adicionar 
o título de cada filme ao novo array movieTitles.
Ao final, o código exibe no console o array movieTitles contendo apenas os títulos
dos filmes.
*/
