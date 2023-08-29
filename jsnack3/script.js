/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

const numArray = [];

let sum = 0;

const resulEl = document.querySelector("h1");

for (let i = 0; i < 10; i++) {
    const userValue = Number(prompt("inserisci un numeri", `${i +  1}`));

    numArray.push(userValue);

    sum += Number(numArray[i]);

}

console.log(numArray);

console.log(sum);

resulEl.innerHTML = `La somma dei valori inseriti è ${sum}`;
