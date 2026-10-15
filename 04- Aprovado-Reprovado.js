function Nota(Nota) {
    if (Nota >= 6) {
        console.log('Aprovado!!');
    } else {
        console.log('Reprovado');
    }
}

function VerificarNota(nota, callback) {
    callback(nota);
}

VerificarNota(7, Nota);
VerificarNota(9, Nota);
VerificarNota(4, Nota);
