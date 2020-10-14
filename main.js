/*
    - Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
    - Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
    - Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.
*/

// genero un numero casuale da 1 a 6 per simulare il lancio del primo giocatore
var rollDice1 = Math.floor(Math.random() * 6) + 1;

// genero un numero casuale da 1 a 6 per simulare il lancio del secondo giocatore
var rollDice2 = Math.floor(Math.random() * 6) + 1;

// comunico gli esiti dei lanci
document.getElementById('roll-dice-1').innerHTML = rollDice1;
document.getElementById('roll-dice-2').innerHTML = rollDice2;

// controllo chi ha vinto: vince chi ottiene dal lancio un numero maggiore
if (rollDice1 > rollDice2) {
    document.getElementById('winner').innerHTML = 'Ha vinto il giocatore1 !!!';
} else if (rollDice2 > rollDice1) {
    document.getElementById('winner').innerHTML = 'Ha vinto il giocatore2 !!!';
} else {
    document.getElementById('winner').innerHTML = 'Patta !!!';
}
