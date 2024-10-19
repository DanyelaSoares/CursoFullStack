
/*
5. Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.
*/

// 
let students = [
    { name: 'Emily', grade1: 8, grade2: 7 },
    { name: 'James', grade1: 9, grade2: 6 },
    { name: 'Olivia', grade1: 7, grade2: 8 },
    { name: 'Michael', grade1: 10, grade2: 9 }
];

for (let student of students) {
    let average = (student.grade1 + student.grade2) / 2;
    console.log(`${student.name} tem media ${average}`);
}

/*
Verifique se o Node.js está instalado no seu sistema com o comando node -v no terminal.
Se o Node.js não estiver instalado, faça o download e a instalação a partir do site
oficial do Node.js.
Salve o código fornecido em um arquivo .js no seu computador.
Navegue até o diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, 
você pode abrir o terminal integrado no VS Code.
No terminal, execute o código usando o comando node nome_do_arquivo.js. Substitua nome_do_arquivo.js
pelo nome do arquivo onde o código foi salvo.

O código define um array de objetos students, onde cada objeto representa um aluno com 
propriedades name, grade1, e grade2.
Um loop for...of é usado para iterar sobre cada aluno no array e calcular a média das 
notas (grade1 e grade2) de cada aluno.
O nome do aluno e sua média são exibidos no console.
*/