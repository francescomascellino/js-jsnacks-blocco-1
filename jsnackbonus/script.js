/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const numArray = [];

const stringArray = [];

const numList = document.querySelector("h1");

const stringList = document.querySelector("h2");

let index = 0

while (index < 6) {

    const userValue = prompt("Inserisci un numero", `${index + 1}`);

    if (isNaN(userValue)) {

        //Se uno dei valori non è un numero viene inserito in un altro array
        stringArray.push(userValue)

        alert(`Attenzione, il valore "${userValue}" non è un numero e non verrà inserito in lista!`);

    }

    else if (userValue % 2 !== 0) {

        numArray.push(userValue);

    }

    index++

}

/* 
for (let i = 0; i < 6; i++) {

    const userValue = prompt("Inserisci un numero", `${i + 1}`);

    if (isNaN(userValue)) {

        //Se uno dei valori non è un numero viene inserito in un altro array
        stringArray.push(userValue)
        alert(`Attenzione, il valore "${userValue}" non è un numero e non verrà inserito in lista!`)

    }

    else if (userValue % 2 !== 0) {

        numArray.push(userValue);

    }

}
 */

console.log(numArray);

console.log(stringArray);

numList.innerHTML = `Ecco l'elenco dei valori dispari inseriti: ${numArray.join(", ")}.`;

if (stringArray.length > 0) {
    stringList.innerHTML = `Alcuni valori inseriti non erano numeri e non sono stati inseriti nella lista: ${stringArray.join(", ")}.`;
}