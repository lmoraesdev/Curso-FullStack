// Filter, map, reduce

//retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];

const maiorQueDez = numeros.filter((valor) => valor > 10);
console.log(maiorQueDez);
//retorne os menores que 10
const menorQueDez = numeros.filter((valor) => valor < 10);
console.log(menorQueDez);
//retorne os numeros pares
const pares = numeros.filter((valor) => valor % 2 === 0);
console.log(pares);
//retorne os numeros impares
const impares = numeros.filter((valor) => valor % 2 !== 0);
console.log(impares);
//retorne os numeros que são multiplos de 5
const multiplosDeCinco = numeros.filter((valor) => valor % 5 === 0);
console.log(maiorQueDez);

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

//retorne pessoas com nome com mais de 5 letras
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

//retorne pessoas com mais de 50 anos
const pessoasComMaisDeCinquentaAnos = pesssoas.filter((obj) => obj.idade > 50);
console.log(pessoasComMaisDeCinquentaAnos);
