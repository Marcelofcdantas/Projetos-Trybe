console.log('triângulo de lados iguais')
let lado1 = prompt ('Digite um lado do triângulo');
let lado2 = prompt ('Digite outro lado do triângulo');
let lado3 = prompt ('Digite um terceiro lado do triângulo');
console.log(lado1==lado2 && lado2==lado3);


console.log('movimento peças xadrez')
let peao = 'frente';
let dama = 'qualquer lado';
let rei = 'qualquer lado';
let cavalo = 'l';
let bispo = 'diagonal';
let torre = 'lateral, frente e trás';

let entrada = 'dama';
if (entrada.toLowerCase() == 'peao') {
  console.log (peao)
} else if (entrada.toLowerCase() == 'dama') {
  console.log (dama)
} else if (entrada.toLowerCase() == 'rei') {
  console.log (rei)
} else if (entrada.toLowerCase() == 'cavalo') {
  console.log (cavalo)
} else if (entrada.toLowerCase() == 'bispo') {
  console.log (bispo)
} else if (entrada.toLowerCase() == 'torre') {
  console.log (torre)
} else {
  console.log ('nome inválido')
}


console.log('conversao nota em conceito');
nota = 90;
while (typeofnota != Number) {
  nota = prompt ('Digite uma nota válida')
}
if (nota >= 90 && nota<=100) {
  console.log('A')
} else if (nota >= 80) {
  console.log('B')
} else if (nota >= 70) {
  console.log('C')
} else if (nota >= 60) {
  console.log('D')
} else if (nota >= 50) {
  console.log('E')
} else if (nota < 50 && nota >= 0) {
  console.log('F')
} else {
  console.log('nota inválida')
}