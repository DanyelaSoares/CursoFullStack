/*
13. Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/

let cart = {
    items: [
        { name: 'Apple', quantity: 3, unitPrice: 2.50 },
        { name: 'Banana', quantity: 5, unitPrice: 1.20 },
        { name: 'Milk', quantity: 2, unitPrice: 3.00 },
        { name: 'Bread', quantity: 1, unitPrice: 1.80 }
    ]
};

let totalValue = 0;

cart.items.forEach(item => {
    totalValue += item.quantity * item.unitPrice;
});

console.log('Valor total do carrinho: R$', totalValue.toFixed(2));

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

Após executar o comando, o terminal exibirá o valor total do carrinho 
calculado com base na quantidade e no preço unitário de cada item
*/
