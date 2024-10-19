/*
15. Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
*/

let transactions = [
    { type: 'income', value: 100 },
    { type: 'expense', value: 50 },
    { type: 'income', value: 200 },
    { type: 'expense', value: 30 }
];

let balance = 0;

transactions.forEach(transaction => {
    if (transaction.type === 'income') {
        balance += transaction.value;
    } else if (transaction.type === 'expense') {
        balance -= transaction.value;
    }
});

console.log(`Saldo final: ${balance}`);

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

O terminal exibirá o saldo final calculado com base nas transações fornecidas
O método forEach é usado para iterar sobre o array transactions.
Para cada transação, o código verifica o tipo:
Se o tipo é 'income', o valor da transação é adicionado ao saldo (balance).
Se o tipo é 'expense', o valor da transação é subtraído do saldo.
Após iterar sobre todas as transações, o saldo final é exibido no console.
*/


