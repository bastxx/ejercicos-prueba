const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const sumarNumeros = numeros => numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(sumarNumeros(numeros)); 
