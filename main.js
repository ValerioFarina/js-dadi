/*
    - Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
    - Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
    - Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.
*/

// genero un numero casuale da 1 a 6 per simulare il lancio del primo giocatore
var rollDice1 = Math.floor(Math.random() * 6) + 1;

console.log('Esito lancio giocatore1: ' + rollDice1);

// genero un numero casuale da 1 a 6 per simulare il lancio del secondo giocatore
var rollDice2 = Math.floor(Math.random() * 6) + 1;

console.log('Esito lancio giocatore2: ' + rollDice2);
