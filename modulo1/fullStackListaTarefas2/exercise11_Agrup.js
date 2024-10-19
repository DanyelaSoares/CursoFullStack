/*
11. Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/

let orders = [
    { client: 'Laura', product: 'Camiseta', quantity: 3 },
    { client: 'João', product: 'Calça', quantity: 2 },
    { client: 'Sara', product: 'Tênis', quantity: 1 },
    { client: 'Daniela', product: 'Camiseta', quantity: 4 },
    { client: 'Guilherme', product: 'Tênis', quantity: 2 }
];

let totalByClient = {};

orders.forEach(order => {
    let { client, quantity } = order;

    if (!totalByClient[client]) {
        totalByClient[client] = 0;
    }

    totalByClient[client] += quantity;
});

console.log(totalByClient);

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

Após executar o comando, o terminal exibirá o total de quantidades
de produtos pedidos por cada cliente.
*/
