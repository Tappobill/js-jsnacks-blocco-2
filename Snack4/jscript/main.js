// *Snack4 (Bonus)*
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

let array1 = [2, 5, 7];
let array2 = [10];

let arrayMaggiore;
let arrayMinore;

if (array1.length > array2.length) {
    arrayMaggiore = array1;
    arrayMinore = array2;
    console.log(arrayMaggiore);
} else if (array1.length == array2.length) {
    console.log("Gli array hanno lo stesso numero di dati");
} else {
    arrayMaggiore = array2;
    arrayMinore = array1;
}

let differenzaLunghezzaArray = arrayMaggiore.length - arrayMinore.length;

for (let i = 0; i < differenzaLunghezzaArray; i++) {
    let numeroRandom = Math.floor(Math.random() * 100);
    console.log(`numero ciclo: ${i} e il numero random è: ${numeroRandom}`);
    arrayMinore.push(numeroRandom);
}

console.log(arrayMinore);