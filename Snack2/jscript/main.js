// Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.

let vuota = []
let nomi = ["Mario", "Chri", "Ale"];
let cognomi = ["Rossi", "Blue", "Verde"];

let random = Math.floor(Math.random()*nomi.length)
let random1 =  Math.floor(Math.random()*cognomi.length)
let rvalue1 = nomi[random];
let rvalue = cognomi[random1]
vuota.push(rvalue + " " + rvalue1)
console.log(vuota)


