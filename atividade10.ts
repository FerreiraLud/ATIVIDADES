/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça um
aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou
não, caso não diga o(s) motivo(s).
Nome:
*/

let teclado = require ('prompt-sync')();

let idade = teclado (` insira idade`);
let peso = teclado (`insira peso`);

console.log(`A ${insira a idade} tera mais que 18 e menos que 67 `);
console.log(`O ${insira peso} tera mais que 60kg`);

if(` idade > 18 e < 67`){
    console.log(se a ${idade} tiver mais que 18 e menos que 67 ela pode doar );
}
if(`peso > 60kg`){
    console.log(se o ${peso} for maior que 60kg ela pode doar);
}
