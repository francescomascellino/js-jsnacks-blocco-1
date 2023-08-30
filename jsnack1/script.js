/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const resulEl = document.querySelector("h1");

let isNaNcheck = false;

const firstNum = Number(prompt("Inserisci un numero", "1"));

let secondNum;

if (isNaN(firstNum)) {
    alert("Il valore inserito non è un numero")
    resulEl.innerHTML = "Non è stato inserito un valore valido";
    isNaNcheck = true;
}

if (isNaNcheck === false) {
    secondNum = Number(prompt("Inserisci un numero", "2"));
}

if (isNaN(secondNum)) {
    alert("Il valore inserito non è un numero")
    resulEl.innerHTML = "Non è stato inserito un valore valido";
    isNaNcheck = true;
}

console.log(isNaNcheck);


/* if (isNaNcheck === false && firstNum > secondNum) {

    resulEl.innerHTML = `${firstNum} è il numero maggiore`

} else if (isNaNcheck === false && secondNum > firstNum) {

    resulEl.innerHTML = `${secondNum} è il numero maggiore`

} else if (isNaNcheck === false) {

    resulEl.innerHTML = `${firstNum} e ${secondNum} sono uguali`

} */



while (isNaNcheck === false) {

    if (firstNum > secondNum) {

        resulEl.innerHTML = `${firstNum} è il numero maggiore`

    } else if (secondNum > firstNum) {

        resulEl.innerHTML = `${secondNum} è il numero maggiore`

    } else {

        resulEl.innerHTML = `${firstNum} e ${secondNum} sono uguali`

    }

    isNaNcheck = true

}