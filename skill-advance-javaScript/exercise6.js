// Filter, map, reduce

//retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];
const maiorQueDez = numeros.filter((valor) => valor > 10);
//retorne os menores que 10
const menorQueDez = numeros.filter((valor) => valor < 10);
//retorne os numeros pares
const pares = numeros.filter((valor) => valor % 2 === 0);
//retorne os numeros impares
const impares = numeros.filter((valor) => valor % 2 !== 0);
//retorne os numeros que são multiplos de 5
const multiplosDeCinco = numeros.filter((valor) => valor % 5 === 0);
