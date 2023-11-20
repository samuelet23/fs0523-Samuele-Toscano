//costanti
const form: HTMLFormElement | null = document.querySelector("#form");
const form2: HTMLFormElement | null = document.querySelector("#form2");
const form3: HTMLFormElement | null = document.querySelector("#form3");

const btn1: HTMLElement | null = document.getElementById("btnPlayer1");
const btn2: HTMLElement | null = document.getElementById("btnPlayer2");
const btnRandom: HTMLElement | null = document.getElementById("btnRandom");

const btnCheck: HTMLElement | null = document.getElementById("btnCheck");
const resultDiv: HTMLElement | null = document.getElementById("result");


//variabili da riutilizzare
let input1: HTMLInputElement | null = <HTMLInputElement>(
  document.getElementById("input1")
);
let input2: HTMLInputElement | null = <HTMLInputElement>(
  document.getElementById("input2")
);

let number1: number | undefined;
let number2: number | undefined;
let random: number | undefined;



//inizializzazione bottoni 
btn1?.addEventListener("click", (e) => {
  e.preventDefault();
  number1 = parseInt(input1?.value || "0");
  let p1 = document.createElement("p");
  p1.innerText = `Number 1: ${number1}`;
  form?.appendChild(p1);
});

btn2?.addEventListener("click", (e) => {
  e.preventDefault();
  number2 = parseInt(input2?.value || "0");
  let p2 = document.createElement("p");
  p2.innerText = `Number 2: ${number2}`;
  form2?.appendChild(p2);
});

btnRandom?.addEventListener("click", (e) => {
  e.preventDefault();
  random = Math.floor(Math.random() * (100 - 1) + 1);
  let pRandom = document.createElement("p");
  pRandom.textContent = `Random Number: ${random}`;
  form3?.appendChild(pRandom);
});

if (btnCheck != null) {
  btnCheck.addEventListener("click", () => {
    const result = checkNumber();
    resultDiv == null
      ? null
      : (resultDiv.innerText = result ?? "Uno o più valore sono undefined");
  });
}



// controllo chi dei due giocatori ci è andato più vixino oppure ha indovinato il numero
function checkNumber(): string | undefined {
  if (number1 == undefined || number2 == undefined || random == undefined) {
    return undefined;
  }

  if (number1 === random) {
    return ` Il giocatore 1 ha azzeccato il numero`;
  } else if (number2 === random) {
    return ` Il giocatore 2 ha azzeccato il numero`;
  } else if (number1 === random && number2 === random) {
    return `entrambi i giocatori hanno indovinato il numero `;
  } else if (number1 == number2 && number1 != random ){
    return ` I giocatori non hanno indovinato il numero ma ci sono andati vicini uguali `;

  }

  return Math.abs(number1 - random) < Math.abs(number2 - random)
    ? ` Il giocatore 1 ci è andato più vicino`
    : ` Il giocatore 2 ci è andato più vicino`
 }
