
/*
Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
*/

function filterGradesByValue(student, minimumGrade) {
    let filteredGrades = {};

    for (let subject in student) {
        if (student[subject] > minimumGrade) {
            filteredGrades[subject] = student[subject];
        }
    }
    return filteredGrades;
}
let student = {
    math: 75,
    history: 82,
    physics: 68,
    chemistry: 50,
    geography: 90
};

let minimumGrade = 70;
let gradesAboveAverage = filterGradesByValue(student, minimumGrade);

console.log(gradesAboveAverage);
/*
Abra o terminal e execute o comando: node -v
Se o Node.js não estiver instalado, faça o download
e instale a partir do site oficial: Node.j
Salve o código fornecido em um arquivo .js em seu computador.
Navegue até o diretório onde o arquivo .js está salvo. 
Se estiver usando o VS Code, você pode abrir o terminal integrado.
No terminal, execute o comando: node nome_do_arquivo.js

O código cria uma função filterGradesByValue que filtra as propriedades
de um objeto student, retornando um novo objeto que contém apenas as 
propriedades cujo valor é maior que o valor mínimo especificado (minimumGrade).
O resultado será impresso no console mostrando um objeto com as
propriedades cujos valores são maiores que 70.
*/