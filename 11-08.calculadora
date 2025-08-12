import readline from 'readline-sync'

function somar(a: number, b: number): number {
    return a + b;
}

function subtrair(a: number, b: number): number {
    return a - b;
}

function multiplicar(a: number, b: number): number {
    return a * b;
}

function dividir(a: number, b: number): number {
    if (b === 0) {
        console.log("Erro: divisão por zero!");
        return NaN;
    }
    return a / b;
}
let continuar = true;

while (continuar) {
    console.log("\n=== CALCULADORA ===");
    console.log("1. Somar");
    console.log("2. Subtrair");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("0. Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");
 
    if (opcao === 0) {
        continuar = false;
        console.log("Saindo...");
        break;
    }

    const num1 = readline.questionFloat("Digite o primeiro numero: ");
    const num2 = readline.questionFloat("Digite o segundo numero: ");

    let resultado: number;

    switch (opcao) {
        case 1:
            resultado = somar(num1, num2);
            console.log(`Resultado: ${resultado}`);
            break;
        case 2:
            resultado = subtrair(num1, num2);
            console.log(`Resultado: ${resultado}`);
            break;
        case 3:
            resultado = multiplicar(num1, num2);
            console.log(`Resultado: ${resultado}`);
            break;
        case 4:
            resultado = dividir(num1, num2);
            if (!isNaN(resultado)) {
                console.log(`Resultado: ${resultado}`);
            }
            break;
        default:
            console.log("Opcao invalida!");
    }
}
