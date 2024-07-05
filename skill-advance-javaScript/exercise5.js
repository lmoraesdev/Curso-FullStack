const a1 = [1, 2, 3, 4, 5];
const a2 = [6, 7, 8, 9, 10];
// concat method
const a3 = a1.concat(a2, [11, 12, 13], 'luiz');
console.log(a3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 'luiz']
// rest operator => spread operator
const a4 = [...a1, ...a2, ...[11, 12, 13], 'luiz'];
console.log(a4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 'luiz']
