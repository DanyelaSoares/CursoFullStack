/*
10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.
*/

let sales = [
    { product: 'Produto A', quantity: 10, value: 20.00 },
    { product: 'Produto B', quantity: 5, value: 50.00 },
    { product: 'Produto C', quantity: 2, value: 15.00 },
    { product: 'Produto D', quantity: 8, value: 25.00 }
];

let totalSalesValue = 0;

sales.forEach(sale => {
    totalSalesValue += sale.quantity * sale.value;
});

console.log(`Total de vendas: R$ ${totalSalesValue.toFixed(2)}`);

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

Utiliza o método forEach para iterar sobre cada objeto no array sales. 
Para cada venda (sale), calcula o valor total da venda multiplicando a quantity 
pelo value e adiciona esse valor à variável totalSalesValue.
Quando o código é executado, o console exibirá o valor total das vendas.
*/



