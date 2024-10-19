const prompt = require("prompt-sync")()
// Exercício 1: Verifiquem o dia da semana com a estrutura switch-case

// Exercício 2: Calcular o número de dias em um mês.

// - Sendo que o mês 1, 3, 5, 7, 8, 10 e 12 tem 31 dias
// - Os meses 4, 6, 9 e 11 tem 30 dias 
// - Mês 2 tem 28 dias

function diasNoMes(mes) {
    switch (mes) {
        case 1: 
        case 3: 
        case 5: 
        case 7: 
        case 8: 
        case 10: 
        case 12:
            return 31;
        case 4: 
        case 6: 
        case 9: 
        case 11:
            return 30;
        case 2:
            return 28;
        default:
            return 'Mês inválido';
    }
}

// Captura a entrada do usuário e verifica se é válida
let mes = parseInt(prompt("Digite o número do mês (1-12): "));

if (isNaN(mes) || mes < 1 || mes > 12) {
    alert("Por favor, digite um número válido entre 1 e 12.");
} else {
    // Exibe o resultado
    console.log(`O mês ${mes} tem ${diasNoMes(mes)} dias.`);
    //alert(`O mês ${mes} tem ${diasNoMes(mes)} dias.`);
}
