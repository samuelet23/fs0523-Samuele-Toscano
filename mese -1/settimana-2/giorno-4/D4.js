/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  if (l1 <= 0 || l2 <= 0) {
    return "Errore";
  } else {
    return l1 * l2;
  }
}
console.log(area(20, -3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}
console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  function crazyDiff(n1) {
    if (n1 > 19) {
      return Math.abs(n1 - 19) * 3;
    } else {
      return Math.abs(n1 - 19);
    }
  }

  console.log(crazyDiff(20));
}
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  function boundary(n = Math.round (n)) {
   
  if ((n >= 20 && n <= 100) || n === 400) {
      return "true";
    }else {
        return 'il numero non è compreso tra 20 e 100 ed inoltre non è uguale a 400'
    }
}
    console.log(boundary(-2.3));
  

  }


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
function epify(stringa) {
    
       if(stringa.length >=6  === 'EPICODE'){
     return stringa   
    } else {
return 'EPICODE' + stringa
       }
    
   }  
    console.log( 'epicode');;
   
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7 (n) {
    if (n <=0 ){
       return  `${n} non è positivo`
    } else if (n % 7 === 0 || n % 3 === 0){
       return  `${n} è divisibile per 3 e per 7 `
 } else { 
    `${n} non è divisibile nè per 3, nè per 7`
 }
    }
    
console.log(check3and7(-11));


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString (stringa) {
    let splitString =  stringa.split ("")
   let reverseStringa= splitString.reverse ()
   let joinStringa = reverseStringa.join ("")
   return joinStringa;
   }
   
   console.log(reverseString('EPICODE'));




/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
function upperFirst( stringa ) {
let maiuscolo = stringa.charAt (0)
}

console.log(upperFirst ('ciao mondo, mi chiamo samuele'))
}
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
{
function cutString( stringa ) {
  return stringa.slice (1,-1)
}
console.log(cutString ( 'Epicode'))
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// {

let numeri = []
function giveMeRandom(n) {
    for (let i = 0; i <= 10; i++) {
      let  numero =Math.round( Math.random () *10);
      numeri.push (numero)
    }
 return numeri 
}

console.log (giveMeRandom ())
