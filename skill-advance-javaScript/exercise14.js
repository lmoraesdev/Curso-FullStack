/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)
//ja vi
Object.key (retorna as chaves)
Object.freeze ( congela o objeto)
Object.defineProperties(define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Caneca', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
  writable: false,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));
console.log(Object.keys(produto));
console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
  console(chave, valor);
}

// const outraCoisa = produto;
// const canecata = Object.assign({}, produto, { material: 'porcelana' });
// Object.freeze(produto);
// outraCoisa.nome = 'Outra nome';
// outraCoisa.preco = 2.5;

// console.log(produto);
// console.log(outraCoisa);
