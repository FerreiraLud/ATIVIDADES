/* (10 pontos)
7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
Nome Aluno:
E-mail:
*/
let teclado = require('prompt-sync')();

let total: number = 0
let maca: number = teclado(`custa 0,30`);
let compras: number = teclado(`Quantas maças você ira comprar?`)

console.log(`Então foram compradas ${compras}`)

if (compras <= 12) {
    let maca : number = 0.30
    console.log(`Cada maça ira sair por 0.30 centavos`)
    let total : number = compras * maca 
}

else {
    let maca: number = 0.25
    console.log(`Cada maça ira sair por 0.25 centavos`)
    let total : number = compras * maca 
}
console.log(`o valor total da compra é ${total}`)