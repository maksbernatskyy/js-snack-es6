/*
Tools:

- const / let
- array
- objects
- for
- function random
*/

// ========================================================================
// ========================================================================

/* Inizializzazione funzioni */

// Funzione random
function getRandomNumberr(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// =========================================================================
// =========================================================================

/* Creazione array con dentro le squadre di calcio come oggetti */

const teams = [
    {
        nome: 'Milan',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'Dinamo Kiev',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'Real Madrid',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'Manchester City',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'Bayern Monaco',
        'punti fatti': 0,
        'falli subiti': 0
    },
]

console.log(teams)

/* Generazione di numeri random per i falli subiti ed i punti fatti */

/* Creazione array con dentro solo nomi e falli subiti delle squadre */