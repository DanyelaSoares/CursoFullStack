
/*
1. Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
*/

let car = {
    mark: "Fiat",
    model: "Uno",
    year: 2020,
    color: "Branco"
}
for (let prop in car) {
    console.log(prop + ":" + car[prop])
}

/*

Abra o terminal e execute o comando: node -v
Se o Node.js não estiver instalado, faça o download
e instale a partir do site oficial: Node.j
Salve o código fornecido em um arquivo .js em seu computador.
Navegue até o diretório onde o arquivo .js está salvo. 
Se estiver usando o VS Code, você pode abrir o terminal integrado.
No terminal, execute o comando: node nome_do_arquivo.js

Substitua nome_do_arquivo.js pelo nome do arquivo onde o código foi salvo.
O código deve imprimir no console:
mark: Fiat
model: Uno
year: 2020
color: Branco


*/

