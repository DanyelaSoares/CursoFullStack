

/*2. Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir,, adicione essa propriedade ao objeto.
*/

let livro = {
    title: "O Código Da Vince",
    author: "Robert Langdon",
    publicationYear: 2003,
    gender: "Romance policial"
};

if (!("editora" in livro)) {
    livro.editora = "HarperCollins";
}

console.log(livro);

/*
Abra o terminal e execute o comando: node -v
Se o Node.js não estiver instalado, faça o download
e instale a partir do site oficial: Node.j
Salve o código fornecido em um arquivo .js em seu computador.
Navegue até o diretório onde o arquivo .js está salvo. 
Se estiver usando o VS Code, você pode abrir o terminal integrado.
No terminal, execute o comando: node nome_do_arquivo.js

O código deve verificar se a propriedade editora existe no objeto livro.
Se não existir, o código adicionará essa propriedade com o valor "HarperCollins".
O resultado será impresso no console mostrando o objeto livro
com a propriedade editora incluída (ou sem alterações se a propriedade já existir).
*/