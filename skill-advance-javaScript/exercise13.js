// defineProperty => Getter e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let _estoque = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: true, // configuravel
    get: function () {
      return _estoque;
    },
    set: function (valor) {
      if (typeof valor !== Number) {
        throw new TypeError('Valor invalido');
      }
      _estoque = valor;
    },
  });
}

const p1 = new Produto('camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));
