const h1 = document.querySelector('.container h1');

const currentDate = new Date();
const diaDaSemana = currentDate.toLocaleDateString('pt-BR', {
  weekday: 'long',
});
const dia = currentDate.getDate();
const mes = currentDate.toLocaleDateString('pt-BR', { month: 'long' });
const ano = currentDate.getFullYear();
const horaEMinuto = currentDate.toLocaleTimeString('pt-BR', {
  hour: '2-digit',
  minute: '2-digit',
});

h1.innerHTML = `${diaDaSemana}, ${dia} ${mes} ${ano} ${horaEMinuto}`;
