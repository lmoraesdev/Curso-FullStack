function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') return reject('Bad value');
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAI('frase 1', rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAI('frase 2', rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAI(5461231, rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((e) => {
    console.log('erro:', e);
  });
