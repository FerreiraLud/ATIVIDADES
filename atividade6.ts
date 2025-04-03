/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o
número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é
${variavel}`, se ser iguais uma frase: ` Os números ${variavel} e ${variavel} são iguais`.
Nome:Ludmila Ferreira
*/

let teclado = require ('prompt-sync')();

let numero = teclado (` insira numero1`);
let numero2 = teclado (` insira numero2`);

console.log(`o número maior é ${numero} e o número menor é ${numero2} `);

if(numero == numero2){
    console.log(`o numero ${numero} e ${numero2} são iguais`)
}
