function executarTarefa(callback) {
    callback();
}

executarTarefa(() => {
    console.log('Tarefa concluída');
});
