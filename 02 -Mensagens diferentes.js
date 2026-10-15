function mostrarBoasVindas() {
    console.log("Seja bem vindo!!!");
}

function MostrarDespedida() {
    console.log("até logo!!");
}

function executarMenasagem(callback) {
    callback();
}
executarMenasagem(mostrarBoasVindas);
executarMenasagem(MostrarDespedida);
