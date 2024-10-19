

/*
for...in
Uso: Itera sobre as propriedades enumeráveis de um objeto.
Contexto: Geralmente usado para iterar sobre as chaves de um objeto ou os índices de um array.
const person = {
  name: 'Alice',
  age: 30,
  occupation: 'Engineer'
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Saída:
// name: Alice
// age: 30
// occupation: Engineer

Exemplo com Arrays (iterando pelos índices):

javascript
Copiar código
const colors = ['red', 'green', 'blue'];

for (const index in colors) {
  console.log(`${index}: ${colors[index]}`);
}
// Saída:
// 0: red
// 1: green
// 2: blue

---------------------------------------------------
*************for...of**************
Uso: Itera sobre os valores de objetos iteráveis, como arrays, strings, ou outros objetos que implementam o protocolo iterável.
Contexto: Ideal para iterar diretamente sobre os valores dos arrays ou outros iteráveis.
Exemplo com Arrays:
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color);
}
// Saída:
// red
// green
// blue
Exemplo com Strings:
const greeting = 'Hello';

for (const char of greeting) {
  console.log(char);
}
// Saída:
// H
// e
// l
// l
// o
--------------------------------------------------
**************Resumo das Diferenças:*************
*******for...in:*********

Itera sobre as chaves (ou índices) de um objeto ou array.
Pode ser usado para iterar sobre as propriedades de um objeto.
for...of:

Itera diretamente sobre os valores de um objeto iterável.
Não é recomendado para objetos que não são iteráveis, como objetos literais
 (a menos que o objeto implemente o protocolo iterável).
Para arrays e outros iteráveis, o for...of geralmente é mais direto 
e intuitivo para obter os valores diretamente, enquanto for...in é útil 
para acessar as chaves ou índices.
*/

/*
****for...of***
Imagine que você tem uma caixa com vários brinquedos e quer brincar com cada um deles. 
Para isso, você simplesmente pega cada brinquedo da caixa e vê o que é. Isso é como usar o for...of.
Aqui, for...of é como você pegando cada brinquedo (carro, boneca, bola) e olhando para ele.
Você não está interessado na posição do brinquedo, só quer ver cada um deles.

const toys = ['car', 'doll', 'ball'];

for (const toy of toys) {
  console.log(`Brinquedo: ${toy}`);
}

Aqui, for...of é como você pegando cada brinquedo (carro, boneca, bola) e olhando para ele.
Você não está interessado na posição do brinquedo, só quer ver cada um deles.
_______________________________

****for...in****
Agora, imagine que você quer saber a posição de cada brinquedo na caixa. Por exemplo, 
você quer saber que o carro  está na posição 0, a boneca na posição 1, e a bola na 
posição 2. Isso é como usar o for...in.
const toys = ['car', 'doll', 'ball'];


for (const index in toys) {
  console.log(`Posição ${index}: ${toys[index]}`);
}


Aqui, for...in é como você verificando a posição de cada brinquedo na caixa e
 dizendo qual brinquedo está em cada posição.

Resumindo
for...of: É como pegar cada brinquedo e brincar com ele. Você vê o que há 
dentro da caixa sem se preocupar com a posição.

for...in: É como contar as posições dos brinquedos na caixa e dizer qual brinquedo 
está em cada posição.
*/