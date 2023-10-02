/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*
/* SCRIVI QUI LA TUA RISPOSTA */

/* Esistono tre tipi di DataType:

1. Stringhe = ovvero i testi, e vengono racchiusi in delle stringhe come '' oppure ""

2.Numerici= Indica qualsiasi numero,o cose simili, per i decimali si usa il "." , in caso di date tipo "23-11-2000" bisogna usare una stringa

3.Booleani=  "Vero" e "Falso" sono gli unici due valori booleani, vengono usati prevalentemente con "if" "else" "elseif" 
e tutte quelle domande che hanno bisogno di una risposta come "Vero" o "Falso" (true, false)




/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name = 'Samuele';
console.log(name);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero1= 12
let numero2= 20
console.log (numero1 + numero2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
name = 'Toscano'; "Identifier 'name' has already been declared (at D1.js:44:7)"



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4-x);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john';
let name2 = 'John';

console.log (name1 != name2);
console.log (name1.toLowerCase() != name2.toLowerCase());

// EXTRA
name1 = name1.toLowerCase()
name2 =name2.toLowerCase();
console.log (name1 == name2);

