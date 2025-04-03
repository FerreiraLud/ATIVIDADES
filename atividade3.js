/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno:
*/
var teclado = require('prompt-sync')();
var letra = teclado(" insira a letra do alfabeto ");
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log("letra que voc\u00EA digitou \u00E9 uma vogal");
}
else {
    console.log("letra \u00E9 uma consoante");
}
