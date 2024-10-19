/*
14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.
*/


let company = {
    departments: [
        {
            name: 'Human Resources',
            employees: ['Alice', 'Bob', 'Charlie']
        },
        {
            name: 'Development',
            employees: ['David', 'Eve', 'Frank']
        },
        {
            name: 'Marketing',
            employees: ['Grace', 'Hank', 'Ivy']
        }
    ]
};


for (let department of company.departments) {
    console.log(`Departmento: ${department.name}`);


    for (let employee of department.employees) {
        console.log(`Funcionarios: ${employee}`);
    }

    console.log('');
}

for (let index in company.departments) {
    let department = company.departments[index];
    console.log(`Departmento: ${department.name}`);

    for (let employee of department.employees) {
        console.log(`Funcionário: ${employee}`);
    }

    console.log('');
}

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

O terminal exibirá uma lista de departamentos e seus funcionários
de duas maneiras diferentes: usando for...of e for...in

Uso do for...of: Itera sobre o array company.departments, onde cada item é um objeto de departamento.
Dentro do primeiro loop for...of, outro loop for...of é usado para iterar sobre a 
lista de funcionários do departamento atual.
O código exibe o nome do departamento e, em seguida, o nome de cada funcionário.

Uso do for...in: Itera sobre os índices do array company.departments.
O índice é usado para acessar cada objeto de departamento no array.
Dentro do loop for...in, o código novamente itera sobre a lista de funcionários do 
departamento atual e exibe os nomes.

*/