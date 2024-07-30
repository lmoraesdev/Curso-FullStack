function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('Bad value');
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, tempo);
  });
}

//Promise.all Promise.rate Promise.resolve Promise.reject

//Promise.all
const promises = [
  //  'Primeiro valor',
  esperaAI('Primese 1', rand(1, 5)),
  esperaAI('Primese 2', rand(1, 5)),
  esperaAI('Primese 3', rand(1, 5)),
  esperaAI('Primese 4', rand(1, 5)),
  esperaAI('Primese 5', rand(1, 5)),
  // esperaAI(100, 4500),
  esperaAI('Primese 6', rand(1, 5)),
  //  'Outro valor',
];
Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

//Promise.race
Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

//Promise.resolve
function baixaPagina() {
  const emChace = false;

  if (emChace) {
    return Promise.resolve('Pagina em cache');
  } else {
    return esperaAI('Baixei a página', 3000);
  }
}

baixaPagina()
  .then((dandosPagina) => {
    console.log(dandosPagina);
  })
  .catch((e) => console.log(e));
