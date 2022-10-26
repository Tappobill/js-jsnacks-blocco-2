// Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.

let vuota = [];
let nomi = ["Mario", "Chri", "Ale"];
let cognomi = ["Rossi", "Blue", "Verde"];

for (let i = 0; i < nomi.length; i++) {
    let random = Math.floor(Math.random() * nomi.length);
    let random1 = Math.floor(Math.random() * cognomi.length);
    console.log(`il dato composto è: ${nomi[random]} ${cognomi[random1]}`)
    vuota.push(`${nomi[random]} ${cognomi[random1]}`)
}


