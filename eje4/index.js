const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const esPrimo = numero => {
  if (numero <= 1) return false;
  
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  
  return true;
};
const primos = numeros.filter(esPrimo);
console.log(primos);
