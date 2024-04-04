const nomeCompleto = 'Leandro Moraes';
const idade = 33;
const peso = 102;
const alturaEmMetro = 1.83;
const data = new Date();
const AnoAtual = data.getFullYear();

let imc;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmMetro * alturaEmMetro);
anoNascimento = AnoAtual - idade;

console.log(`${nomeCompleto} tem ${idade} anos, pesa ${peso} KG
tem ${alturaEmMetro} e seu imc é de ${indiceMassaCorporal.toFixed()}.
${nomeCompleto} nasceu em ${anoNascimento}`);
