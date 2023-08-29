/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const firstNum = Number(prompt("Inserisci un numero", "1"));

const secondNum = Number(prompt("Inserisci un numero", "2"));

const resulEl = document.querySelector("h1");

if (isNaN(firstNum) || isNaN(secondNum)) {

    resulEl.innerHTML = "Uno dei valori inseriti non è valido";

} else if (firstNum > secondNum) {

    resulEl.innerHTML = `${firstNum} è il numero maggiore`

} else if (secondNum > firstNum) {

    resulEl.innerHTML = `${secondNum} è il numero maggiore`

} else {

    resulEl.innerHTML = `${firstNum} e ${secondNum} sono uguali`

}