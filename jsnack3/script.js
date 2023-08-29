/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

const numArray = [];

const stringArray = [];

let sum = 0;

const resulEl = document.querySelector("h1");

const numList = document.querySelector("h2");

const stringList = document.querySelector("h3");

for (let i = 0; i < 10; i++) {

    const userValue = prompt("inserisci un numero", `${i + 1}`);

    if (isNaN(userValue)) {

        //Se uno dei valori non è un numero viene inserito in un altro array
        stringArray.push(userValue)


    }

    else {

        numArray.push(userValue);

    }

}

for (let i = 0; i < numArray.length; i++) {

    sum += Number(numArray[i]);

}

console.log(numArray);

console.log(sum);

console.log(stringArray);

resulEl.innerHTML = `La somma dei valori inseriti è ${sum}.`;

numList.innerHTML = `Ecco l'elenco dei valori validi inseriti: ${numArray.join(", ")}.`;

if (stringArray.length > 0) {
    stringList.innerHTML = `Alcuni valori inseriti non erano numeri e non sono stati sommati: ${stringArray.join(", ")}.`;
}