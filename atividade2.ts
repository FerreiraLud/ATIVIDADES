/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x.
Nome Aluno: Ludmila Ferreira
*/

let teclado = require ('prompt-sync')();

let x = parseInt(teclado(`Digite o primeiro número: `));
let y = parseInt(teclado(`Digite o segundo número: `));

console.log(`x é igual a 5 e y é igual a 10`);

let z = x;

x = y;
y = z;