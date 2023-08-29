/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

//.split(" ") separa la stringa in un array ogni volta che viene incontrato uno spazio. la variabile diventa quindi momentaneamente un array.
//.join("") unisce un array in una stringa, usando come "separatore" "", ovvero nessuno spazio, quindi effettivamente riunendo le possibili parole multiple digitate dall'utemte una singola parola.
const firstword = prompt("Inserisci del testo (gli spazi verranno eliminati)", "Cane").split(" ").join("");

const secondword = prompt("Inserisci altro testo (gli spazi verranno eliminati)", "Gatto").split(" ").join("");

const resulEl = document.querySelector("h1");

if (firstword.length > secondword.length) {

    resulEl.innerHTML = `${firstword} è la parola più lunga, ${secondword} la più corta`;

} else if (secondword.length > firstword.length) {

    resulEl.innerHTML = `${secondword} è la parola più lunga, ${firstword} la più corta`;

} else {

    resulEl.innerHTML = `${firstword} e ${secondword} hanno la stessa lunghezza`;

}
