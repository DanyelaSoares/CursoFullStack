/*
4. Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.
*/

let people = [
    { name: 'Ana', age: 25, city: 'São Paulo' },
    { name: 'John', age: 30, city: 'Rio de Janeiro' },
    { name: 'Maria', age: 22, city: 'Belo Horizonte' }
];

for (let person of people) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`City: ${person.city}`);
    console.log('---');
}

/*
Abra o terminal e execute o comando: node -v
Se o Node.js não estiver instalado, faça o download
e instale a partir do site oficial: Node.j
Salve o código fornecido em um arquivo .js em seu computador.
Navegue até o diretório onde o arquivo .js está salvo. 
Se estiver usando o VS Code, você pode abrir o terminal integrado.
No terminal, execute o comando: node nome_do_arquivo.js

O código define um array de objetos people, onde cada objeto
representa uma pessoa com propriedades name, age e city.
Um loop for...of é usado para iterar sobre cada pessoa no 
array e imprimir suas propriedades no console.
*/