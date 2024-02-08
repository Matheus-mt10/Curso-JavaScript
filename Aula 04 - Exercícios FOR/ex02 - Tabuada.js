// Crie um programa que solicite ao usuário um número e, em seguida, use um laço for para imprimir a tabuada desse número até 10.
 
const num = 5;
console.log(`TABUADA DO ${num}`);
console.log("------------------------------");

for(let cont=1; cont<=10; cont++){
    let res = num*cont
    console.log(`${num}x${cont}=${res}`);
}

console.log("Fim do programa");