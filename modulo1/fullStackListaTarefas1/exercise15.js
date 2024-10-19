const prompt = require("prompt-sync")()

/*
15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for
*/

let A = 0;
let B = 1;

console.log(A);
console.log(B);

for (let i = 3; i <= 10; i++) {
    let nextNum = A + B;

    console.log(nextNum);

    A = B;
    B = nextNum;
}

/*
Abra o terminal no diretório onde o arquivo .js está salvo. 
Se estiver usando o VS Code, você pode abrir o terminal integrado.
Certifique-se de que o Node.js está instalado em seu sistema.
Verifique isso no terminal com o comando:node -v
Se o Node.js não estiver instalado, faça o download
e instale a partir do site oficial Node.js.
Ao executar o código, o programa gerará e imprimirá os primeiros 10 números da sequência de Fibonacci.
A sequência será exibida no console, começando com 0 e 1, e os próximos números serão calculados pela soma dos dois anteriores.

*/