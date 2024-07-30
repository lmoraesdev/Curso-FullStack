function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo) {
  return new Promise((resolve, reject) => {
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
    return esperaAI('frase 3', rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  });
