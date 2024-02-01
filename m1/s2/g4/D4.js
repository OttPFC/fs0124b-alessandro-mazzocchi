/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* function area(l1,l2){
    return l1 * l2;
}console.log(area(3,6)) */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* function crazySum (a,b){
if(a == b){
    return (a + b)*3;
}
    return a + b;
}console.log(crazySum(4,6)) */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* function crazyDiff(a){
    if(a > 19){
        let difAbs3 = Math.abs(a - 19)*3;
        return difAbs3;
    }
    let difAbs = Math.abs(a - 19);
    return difAbs
}console.log(crazyDiff(30)) */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* function boundary(n){
    if(n > 20 && n <= 100){
        return true;
    }else if(n == 400){
        return true;
    }else{
        console.log('Lo hai rotto e ora non ci gioco più!')
    } 
}console.log(boundary(409)); */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* function epify(parola){
if(parola.startsWith('EPICODE')){
    return parola;
}else{
    return "EEPICODE " + parola;
}
}console.log(epify('EPIC EDUCATION')) */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


/* function check3and7(n){
    if(n % 3 == 0 && n % 7 == 0){
        return 'E MULTIPLO DI 3 E 7';
    }else if(n % 3 == 0){
        return 'E MULTIPLO DI 3';
    }else if(n % 7 == 0){
        return 'E MULTIPLO DI 7'
    }else{
        console.log('LO HAI ROTTO E ORA NON CI GIOCO PIU!')
    }
}console.log(check3and7(21)) */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* function reverseString(word){
    
    let splitWord = word.split('');
    let revWord = splitWord.reverse();  
    let joinWord = revWord.join('');
    return joinWord;
}console.log(reverseString('lametta')); */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

    

/* function upperFirst(word) {
        
        let arrayWord = word.split(' ');        
        let arrayModifyWords = arrayWord.map(function(words) {
            return words.charAt(0).toUpperCase() + words.slice(1);
        });
        let newWords = arrayModifyWords.join(' ');
        return newWords;
    }console.log(upperFirst('sono sandra marchegiano e so contenta pe fa sta sfilata!'));
    */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/


/* function cutString(word){
        
        if(word.length >= 2){
            return word.slice(1, -1);
        }else{
            return '';
        }
}console.log(cutString('piero')) */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* function giveMeRandom(n){
    const array = [];
    for(let i = 0; i < n ; i++){
        let randomNumbers = Math.floor(Math.random() * 11);
        array.push(randomNumbers);
    }
    return array
}console.log(giveMeRandom(7)) */
