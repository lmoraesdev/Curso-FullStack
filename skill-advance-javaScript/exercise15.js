/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
protótipo é termino usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtura que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobronome) {
  this.nome = nome;
  this.sobronome = sobronome;
  Pessoa.prototype.nomeCompleto = () => {
    this.nome + ' ' + this.sobrenome;
  };
}
// instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.dir(data);
console.dir(pessoa1);
console.dir(pessoa2);
