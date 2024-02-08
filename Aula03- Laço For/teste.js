// Escreva um programa que use um laço for para imprimir os números de 1 a 10 no console.

const num =5;
console.log(`TABUADA`);
console.log(`O número escolhido foi: ${num}`);

for(let cont=0; cont<=10; cont++){

    let result = num*cont
    console.log(`${num}X${cont}=${result}`)
    
}