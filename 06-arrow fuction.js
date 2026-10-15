const processarNumero = (numero, callback) => {
    callback(numero);
};

console.log('primeiro exemplo');
processarNumero(5, (numero) => {
    const triplo = numero * 3;
    console.log(`O triplo de ${numero} é ${triplo}`);
});

console.log('segundo exemplo');
processarNumero(12, (numero) => {
    const triplo = numero * 3;
    console.log(`O triplo de ${numero} é ${triplo}`);
});

console.log('terceiro exemplo');
processarNumero(-7, (numero) => {
    const triplo = numero * 3;
    console.log(`O triplo de ${numero} é ${triplo}`);
});
