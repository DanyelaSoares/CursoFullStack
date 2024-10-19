/*
9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/

let clients = [
    { name: 'Laura', age: 25, city: 'São Paulo' },
    { name: 'João', age: 35, city: 'Rio de Janeiro' },
    { name: 'Sara', age: 32, city: 'Curitiba' },
    { name: 'Daniela', age: 47, city: 'Porto Alegre' },
    { name: 'Guilherme', age: 27, city: 'Belo Horizonte' }
];

let countOver30 = 0;

clients.forEach(client => {
    if (client.age > 30) {
        countOver30++; 
    }
});

console.log(`Número de clientes com mais de 30 anos: ${countOver30}`);

/*
Verifique se o Node.js está instalado no seu sistema com
o comando node -v no terminal. Se o Node.js não estiver
instalado, faça o download e a instalação a partir do site
oficial do Node.js. Salve o código fornecido em um arquivo .js
no seu computador. Navegue até o diretório onde o arquivo .js está salvo.
Se estiver usando o VS Code,você pode abrir o terminal
integrado no VS Code. No terminal, execute o código usando
o comando node nome_do_arquivo.js.Substitua nome_do_arquivo.js
pelo nome do arquivo onde o código foi salvo

O array clients contém objetos com informações sobre clientes, incluindo name (nome), age (idade) e city (cidade).
O código usa forEach para iterar sobre cada cliente no array
O código irá exibir no console o número de clientes com mais de 30 anos
*/

