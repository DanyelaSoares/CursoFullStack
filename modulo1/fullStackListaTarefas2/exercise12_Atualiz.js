/*
12. Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

let inventory = [
    { product: 'Rice', quantity: 10, minimum: 20 },
    { product: 'Beans', quantity: 5, minimum: 15 },
    { product: 'Pasta', quantity: 25, minimum: 10 },
    { product: 'Oil', quantity: 8, minimum: 10 }
];

inventory.forEach(item => {
    if (item.quantity < item.minimum) {
        item.quantity *= 2;
    }
});

console.log(inventory);

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

Após executar o comando, o terminal exibirá o array atualizado com as 
quantidades dos produtos que estavam abaixo do mínimo duplicadas.
*/