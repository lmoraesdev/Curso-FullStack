// Definição de uma função que utiliza um callback
function exemploComCallback(dados, callback) {
  // Simulação de uma operação que poderia ser assíncrona
  setTimeout(() => {
    // Processamento dos dados
    const resultado = dados + ' processados';
    // Chamada do callback com o resultado
    callback(resultado);
  }, 1000); // Simulação de tempo para processamento
}

// Uso da função com um callback para lidar com o resultado
exemploComCallback('Dados de entrada', function (resultadoProcessado) {
  console.log(resultadoProcessado); // Saída: Dados de entrada processados
});
