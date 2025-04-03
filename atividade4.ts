/* (10 pontos)

10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas
são:
&quot;Telefonou para a vítima?&quot;
&quot;Esteve no local do crime?&quot;
&quot;Mora perto da vítima?&quot;
&quot;Devia para a vítima?&quot;
&quot;Já trabalhou com a vítima?&quot;
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se
a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como
&quot;Suspeita&quot;, entre 3 e 4 como &quot;Cúmplice&quot; e 5 como &quot;Assassino&quot;. Caso contrário, ele será
classificado como &quot;Inocente&quot;.
Aluno: Ludmila Ferreira
*/

let teclado = require (`prompt-sync`)();
let total: number = 0;

console.log(`+ ======================== +`);
console.log(`+ === Sistema da maçã ==== +`);
console.log(`+ quantidade de maçã menor +`); 
console.log(`+ que 12 o valor é R$ 0,30 +`);
console.log(`+ quantidade de maçã maior +`);
console.log(`+ ou igual a 12            +`);
console.log(`+ o valor é R$ 0,25        +`);
console.log(`+ ======================== +`);

let maca: number = parseInt(teclado(`Digite a quantidade de maçãs desejadas:`));

if (maca < 12){
    total = maca * 0.30;
}
else if (maca >= 12){
    total = maca * 0.25;
}
else{
    console.log(`Algo deu errado!`)
}

console.log (`A quantidade de ${maca} o preço pago é R$ ${total}`);