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

async function executa() {
  try {
    const fase1 = await esperaAI('fase 1', rand(1, 5));
    console.log(fase1);
    const fase2 = await esperaAI('fase 2', rand(1, 5));
    console.log(fase2);
    const fase3 = await esperaAI('fase 3', rand(1, 5));
    console.log(fase3);
    console.log('Terminamos na fase:', fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();

/*
Pending -> pendente
Fullfilled -> resolvida
rejected -> rejeitada
*/
