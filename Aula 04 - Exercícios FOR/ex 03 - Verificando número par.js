//  Escreva um programa que calcule a soma dos números pares de 1 a 100 e imprima o resultado.

let soma=0;
for(let cont=0; cont<=100; cont++){

    if(cont%2==0){
        soma=soma+cont 
        console.log(`R: ${soma}`);
    }


}