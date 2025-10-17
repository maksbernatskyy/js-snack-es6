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
function getRandomNumber(min, max) {
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

// =======================================================================
// =======================================================================

/* Creazione array con dentro solo nomi e falli subiti delle squadre */

const teamsAndFalls = []
console.log(teamsAndFalls)

// =======================================================================
// =======================================================================

/* Generazione di numeri random per i falli subiti ed i punti fatti */

for (let i = 0; i < teams.length; i++) {
    const thisTeam = teams[i]

    // Assegno valore ai punti fatti
    thisTeam['punti fatti'] = getRandomNumber(30, 85)

    // Assegno i falli subiti
    thisTeam['falli subiti'] = getRandomNumber(100, 1000)

}

// =======================================================================
// =======================================================================

/* Inserimento elementi nell'array dei nomi e falli subiti delle squadre */

// Seleziono ogni oggetto dell'array
for (let i = 0; i < teams.length; i++) {
    const thisTeam = teams[i]

    // Seleziono ogni proprietà del singolo oggetto dell'array
    for (let key in teams[i]) {
        const thisElement = teams[i][key]

        // Se la proprietà concide con una delle due richieste viene pushata nell'array vuoto
        if (thisElement === thisTeam['nome'] || thisElement === thisTeam['falli subiti']) {
            teamsAndFalls.push(thisElement)
        }
    }
}
