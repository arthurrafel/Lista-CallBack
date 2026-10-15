function somar(a, b) {
    return a +b
}

function multiplicar(a, b) {
    return a *b
}

function calcular(a, b, operacao) {
    const resultado = operacao(a, b);
    console.log(`O resultado da operação é: ${resultado}`);
}

console.log(" Calculo soma");
calcular(15, 15, somar);

console.log("calculo multiplicação");
calcular(5, 3, multiplicar);
