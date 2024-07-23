class DispositoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome}: Ligado`);
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome}: Desligado`);
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log('Olha, Você alterou o método ligar.');
  }
}

const d1 = new DispositoEletronico('Smartphone');
d1.ligar();
d1.ligar();
d1.desligar();
console.log(d1);

const s1 = new Smartphone(' Samsung', 'Preto', 'Galaxy s24');
console.log(s1);

const t1 = new Tablet('ipad', true);
console.log(t1);
t1.ligar();
