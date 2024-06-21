//// Definindo a função externa
function funcaoExterna(variavelExterna) {
  // Definindo a função interna, que é uma closure
  return function funcaoInterna(variavelInterna) {
    // A função interna tem acesso às variáveis da função externa
    console.log('Variável Externa: ' + variavelExterna);
    console.log('Variável Interna: ' + variavelInterna);
  };
}

// Criando uma instância da closure com uma variável externa específica
const novaFuncao = funcaoExterna('externo');
// Chamando a função interna com uma variável interna
novaFuncao('interno');
