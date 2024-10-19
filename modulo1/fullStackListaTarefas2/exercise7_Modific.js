/*
7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/

let products = [
    { name: 'Laptop', price: 1000.00, discount: 0.10 },
    { name: 'Smartphone', price: 500.00, discount: 0.10 },
    { name: 'Headphones', price: 150.00, discount: 0.10 },
    { name: 'Keyboard', price: 50.00, discount: 0.10 }
];

products.forEach(product => {
    let discountAmount = product.price * product.discount;
    let newPrice = product.price - discountAmount;
    console.log(`${product.name} - Novo preço: $${newPrice.toFixed(2)}`);
});


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

O código define um array de objetos products, onde cada objeto
representa um produto com propriedades name, price, e discount.
Utiliza o método forEach para iterar sobre cada produto no array,
aplicar um desconto de 10% ao preço original e exibir o nome do 
produto junto com o novo preço no console.
*/