// *Snack3*
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari
    
let numeri = [1,2,3,4,5,6,7,8,9,10];

let totale = 0;

for (let i = 0 ; i < numeri.length ; i++){
    if (i % 2 !=0){
        totale = totale + numeri[i];  
    }    
}
 
console.log(totale);
    
