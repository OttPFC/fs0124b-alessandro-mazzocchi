/* ESERCIZIO 1
Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let x = 10;
let y = 8;
if(x > y){console.log(x + " è più grande di " + y); 
} else if(x < y){
console.log(y + " è più grande di " + x )
}else{
  console.log('I numeri sono uguali')
}




*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* let x = 7
if(x != 5){
  console.log('not equal')
}  */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* let c = 15;
if(c % 5 == 0){
  console.log('divisibile per 5');
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let a = 5 ;
let b = 3 ;

if(a === 8 || b ===8 || (a + b) === 8 || (a-b) === 8 || (b-a) === 8){
  console.log('Verficato')
}

/* let a = 5 ;
let b = 3 ;
if(a == 8){
  console.log('Uguale a 8')
}else if(a + b == 8){
  console.log('La somma di ' + a + ' e ' + b +' è 8.' )
}else{
  console.log('Non entrah!')
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart = 40
let costoSpedizione = 10
let check = totalShoppingCart + costoSpedizione
if (totalShoppingCart > 50){
  console.log('Hai diritto alla spedizone gratuita! Checkout : ' + totalShoppingCart )
}else{
  console.log('Checkout : ' + check )
} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* let totalShoppingCart = 60
let costoSpedizione = 10
let sconto = totalShoppingCart * 0.80;
let check = totalShoppingCart + costoSpedizione
if (totalShoppingCart * 0.80 > 50){
  console.log('Hai diritto alla spedizone gratuita! Checkout : ' + sconto )
}else{
  console.log('Checkout : ' + sconto )
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const array = [5,89,54,2,90,7,23,67];

for( let i = 0; i < array.length -1; i++){
  for(  let j = 0 ; j < array -1; j++){
    if(array[j] > array[j +1]){
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}
console.log(array)

/* const array = [9,5,7]
array.sort()
console.log(array) */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* let valore = 'Ciao';
if( typeof valore === 'number' && !isNaN(valore)) {
  console.log('è un numero')
}else{
  console.log('Il typeof non è di tipo numerico')
} */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* let numero = 8;

if (numero % 2 == 0){
  console.log('Il numero ' + numero + ' è pari')
}else{
  console.log('Il numero' + numero + 'è dispari')
} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10 ) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* let val = 11
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    } */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}


/* me.city = 'Toronto';
console.log(me) */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* delete me.lastName; */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/


/* me.skills.pop();
console.log(me); */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* let array = [];
    array.push(1,2,3,4,4,5,6,7,8,9,10);


for (let i = 1 ; i <= 10; i++){
  array.push(i);
}
console.log(array); */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* array.splice(9,1,100)
console.log(array) */
