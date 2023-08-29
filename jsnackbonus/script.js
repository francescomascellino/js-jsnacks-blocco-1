/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const numArray = [];

let NanCheck = false;

const numList = document.querySelector("h1");

for (let i = 0; i < 6; i++) {
    const userValue = Number(prompt("inserisci un numero", `${i +  1}`));

    if (isNaN(userValue)) {

        //Se uno dei valori non è un numero interrompe il codice
        NanCheck = true;

        break;

    }

    else if (userValue % 2 !== 0) {

        numArray.push(userValue);

    }

}

console.log(numArray);

if (NanCheck) {

    numList.innerHTML = "Uno dei valori inseriti non è un numero";

} else {

    numList.innerHTML = `Ecco l'elenco dei valori dispari inseriti: ${numArray.join(", ")}.`;

}