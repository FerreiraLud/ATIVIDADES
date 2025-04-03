/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno:
*/

let teclado = require ('prompt-sync')();

let letra = teclado (` insira a letra do alfabeto `);

if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    console.log(`letra que você digitou é uma vogal`)
}
else{
    console.log(`letra é uma consoante`)
}