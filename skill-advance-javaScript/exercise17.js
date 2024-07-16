//Produto -> aumento, desconto
// Camiseta = Cor  caneca = material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  this.cor = cor;
  Produto.call(this, nome, preco);
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(100);
console.log(camiseta);

function Caneca(nome, preco, cor, material) {
  this.material = material;
  Camiseta.call(this, nome, preco, cor);
}
Caneca.prototype = Object.create(Camiseta.prototype);
Caneca.prototype.constructor = Caneca;
const caneca = new Caneca('Pokemon', 8.99, 'vermelho', 'porcelana');
caneca.aumento(100);
console.log(caneca);
