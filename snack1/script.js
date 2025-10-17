/*
Tools:

- const / let
- array
- objects
- for
- if / else
*/

// ==========================================================
// ==========================================================

/* Creazione array con oggetti al suo interno */

// Creo l'array
const bikes = [
    {
        nome: 'Trek Marlin',
        peso: 10
    },
    {
        nome: 'Atala Clever',
        peso: 12
    },
    {
        nome: 'Trek Allant+',
        peso: 30
    },
    {
        nome: 'Bianchi Lupo',
        peso: 8
    },
    {
        nome: 'Scott Addict',
        peso: 20
    },
]

// Inizializzo la bici più leggera
let bikeLite = bikes[0]

// =============================================================
// =============================================================

/* Confrontare il peso delle bici per trovare la meno pesante */

// Creazione ciclo per il confronto
for (let i = 0; i < bikes.length; i++) {
    const thisBike = bikes[i]
    const thisWeight = bikes[i].peso
    console.log(thisWeight)

    if (thisWeight < bikeLite.peso) {
        bikeLite = thisBike
    }
} 

// ===============================================================
// ===============================================================


/* Mostrare a schermo la bici meno pesante */

const nameBikeLite = bikeLite.nome
const weightBikeLite = bikeLite.peso

console.log(`La bici più leggera è la ${nameBikeLite} con un peso di ${weightBikeLite}kg`)