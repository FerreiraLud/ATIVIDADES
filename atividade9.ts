/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo
é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno:Ludmila Ferreira da silva
E-mail: Ludsilva4yy@gmail.com
*/

let teclado = require ('prompt-sync')();

let angulo1 : numero = ('digite o valor do ângulo');
let angulo2 : numero = ('digite o valor do ângulo');
let angulo3 : numero = ('digite o valor do ângulo');

if(angulo1 angulo2 angulo3 == 90){
    console.log(`o triângulo é retângulo`)
}
if(angulo1 angulo2 angulo3 >90){
    console.log(`o triângulo é Obtusângulo`)
}
if(angulo1 angulo2 angulo3 <90){
    console.log(`o triângulo è Acutângulo`)
}

