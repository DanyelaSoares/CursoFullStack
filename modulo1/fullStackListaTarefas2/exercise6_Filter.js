/*
6. Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
*/

let employees = [
    { name: 'John', position: "Manager", salary: 5000.00 },
    { name: 'Mary', position: "Supervisor", salary: 4000.00 },
    { name: 'Peter', position: "Seller", salary: 3000.00 },
    { name: 'Anna', position: "Assistant", salary: 2000.00 },
];

let minimumWage = 3500;
for (let employee of employees) {
    if (employee.salary > minimumWage) {
        console.log(`${employee.name} - Cargo: ${employee.position}, Salario: ${employee.salary}`);
    }
}

/*
Verifique se o Node.js está instalado no seu sistema com
o comando node -v no terminal.
Se o Node.js não estiver instalado, faça o
download e a instalação a partir do site oficial do Node.js.
Salve o código fornecido em um arquivo .js no seu computador.
Navegue até o diretório onde o arquivo .js está salvo.
Se estiver usando o VS Code,você pode abrir o terminal
integrado no VS Code.
No terminal, execute o código usando o comando node
nome_do_arquivo.js.Substitua nome_do_arquivo.js
pelo nome do arquivo onde o código foi salvo.

O código define um array de objetos funcionarios, onde cada objeto representa
um funcionário com propriedades nome, cargo e salario.
Um loop for...of é usado para iterar sobre cada funcionário no array 
e verificar se o salário é maior que o valor específico (minimumWage).
Funcionários que têm um salário maior que o valor específico serão
exibidos no console com seu nome, cargo e salário.
*/