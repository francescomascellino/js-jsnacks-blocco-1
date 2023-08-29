/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

const numArray = [];

let sum = 0;

const resulEl = document.querySelector("h1");

const numList = document.querySelector("h2");

for (let i = 0; i < 10; i++) {
    const userValue = prompt("inserisci un numero", `${i +  1}`);

    if (isNaN(userValue)) {
        resulEl.innerHTML = "Uno dei valori inseriti non è un numero"
    } else {
    numArray.push(userValue);

    sum += Number(numArray[i]);        
    }

}

console.log(numArray);

console.log(sum);

resulEl.innerHTML = `La somma dei valori inseriti è ${sum}.`;

numList.innerHTML = `Ecco l'elenco dei valori inseriti: ${numArray.join(", ")}.`;