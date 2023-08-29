/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const numArray = [];

const numList = document.querySelector("h1");

for (let i = 0; i < 6; i++) {
    const userValue = prompt("inserisci un numero", `${i +  1}`);

    if (isNaN(userValue)) {

        numList.innerHTML = "Uno dei valori inseriti non è un numero";

    } else if (userValue % 2 !== 0) {

    numArray.push(userValue);

    }

}

console.log(numArray);

numList.innerHTML = `Ecco l'elenco dei valori dispari inseriti: ${numArray.join(", ")}.`;