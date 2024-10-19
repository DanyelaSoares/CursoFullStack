
/*
Vamos explicar como se fosse uma brincadeira com brinquedos!

Imagine que você tem uma fila de brinquedos (como carrinhos, bonecos, etc.) e quer olhar cada um deles para ver o que são. Você tem duas maneiras de fazer isso: uma com o forEach e outra com o for...of.
forEach - A "Inspeção Automática"
Como Funciona: Imagine que você colocou os brinquedos numa esteira rolante, e cada brinquedo passa por uma máquina que diz o nome dele em voz alta.
O que Acontece: Todos os brinquedos passam pela esteira, um por um, e a máquina (função) sempre diz o nome do brinquedo. Você não pode parar a esteira ou pular um brinquedo; ela sempre vai continuar até o final.
Exemplo Real: Se a esteira tem 5 brinquedos, ela vai olhar cada um, na ordem, e não pode parar no meio.

for...of - A "Inspeção Manual"
Como Funciona: Agora, você está segurando os brinquedos na mão e pode escolher como quer olhar para eles.
O que Acontece: Você olha para o primeiro brinquedo, decide se quer continuar ou parar, ou até pular para o próximo brinquedo sem olhar para ele.
Exemplo Real: Se você estiver segurando 5 brinquedos, pode olhar para o primeiro, depois decidir pular o segundo, olhar o terceiro, e assim por diante. Se quiser, pode parar no meio.
Diferença Simples:

forEach é como uma esteira automática: Você não pode parar ou pular, ela só vai até o final.
for...of é como segurar os brinquedos na mão: Você pode olhar no seu próprio ritmo, parar ou pular quando quiser.
Assim, dá para escolher qual maneira usar, dependendo de como quer "brincar" com os brinquedos!
*/

/*
*************Exemplo com forEach - A "Esteira Automática"****************
Vamos usar o forEach para dizer o nome de cada brinquedo.
*/
let brinquedos = ["Carrinho", "Boneca", "Bola", "Urso de Pelúcia", "Robô"];

// Usando forEach para dizer o nome de cada brinquedo
brinquedos.forEach(brinquedo => {
  console.log(`Brinquedo: ${brinquedo}`);
});

/*
O que acontece:

O forEach passa por cada brinquedo na lista e imprime o nome de cada um na ordem: "Carrinho", "Boneca", "Bola", etc.
Não tem como parar ou pular algum brinquedo; ele sempre vai olhar para todos.
*/

/*
*****************Exemplo com for...of - A "Inspeção Manual"*************************
Agora, vamos usar o for...of para olhar os brinquedos, mas vamos pular o brinquedo "Bola".
*/

let brinquedos = ["Carrinho", "Boneca", "Bola", "Urso de Pelúcia", "Robô"];

// Usando for...of para olhar os brinquedos, mas pulando "Bola"
for (const brinquedo of brinquedos) {
  if (brinquedo === "Bola") {
    continue; // Pula o brinquedo "Bola"
  }
  console.log(`Brinquedo: ${brinquedo}`);
}

/*
O que acontece:

O for...of vai passando pelos brinquedos, mas quando chega na "Bola", ele usa continue para pular e não mostrar o nome dela.
Aqui você tem mais controle: pode pular ou parar quando quiser.

*****************Resumo dos Exemplos:*******************

forEach: Percorre todos os brinquedos automaticamente, sem pular ou parar.

for...of: Você pode escolher como inspecionar os brinquedos, podendo pular ou parar a qualquer momento.
Esses exemplos mostram como usar cada um deles de forma bem simples e clara!
*/






