// Exemplo de uso do método splice para estudo

// Definindo um array inicial
let frutas = ['Maçã', 'Banana', 'Laranja', 'Abacaxi', 'Manga'];

console.log('Array original:', frutas);

// Removendo elementos
let removidos = frutas.splice(2, 2); // Remove 'Laranja' e 'Abacaxi'
console.log('Array após remoção:', frutas);
console.log('Elementos removidos:', removidos);

// Adicionando elementos
frutas.splice(2, 0, 'Kiwi', 'Melancia'); // Adiciona 'Kiwi' e 'Melancia' na posição 2
console.log('Array após adição:', frutas);

// Substituindo elementos
frutas.splice(1, 1, 'Pera'); // Substitui 'Banana' por 'Pera'
console.log('Array após substituição:', frutas);
