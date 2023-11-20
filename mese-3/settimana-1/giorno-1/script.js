"use strict";
//costanti
const form = document.querySelector("#form");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");
const btn1 = document.getElementById("btnPlayer1");
const btn2 = document.getElementById("btnPlayer2");
const btnRandom = document.getElementById("btnRandom");
const btnCheck = document.getElementById("btnCheck");
const resultDiv = document.getElementById("result");
//variabili da riutilizzare
let input1 = (document.getElementById("input1"));
let input2 = (document.getElementById("input2"));
let number1;
let number2;
let random;
//inizializzazione bottoni 
btn1 === null || btn1 === void 0 ? void 0 : btn1.addEventListener("click", (e) => {
    e.preventDefault();
    number1 = parseFloat((input1 === null || input1 === void 0 ? void 0 : input1.value) || "0");
    let p1 = document.createElement("p");
    p1.innerText = `Number 1: ${number1}`;
    form === null || form === void 0 ? void 0 : form.appendChild(p1);
});
btn2 === null || btn2 === void 0 ? void 0 : btn2.addEventListener("click", (e) => {
    e.preventDefault();
    number2 = parseFloat((input2 === null || input2 === void 0 ? void 0 : input2.value) || "0");
    let p2 = document.createElement("p");
    p2.innerText = `Number 2: ${number2}`;
    form2 === null || form2 === void 0 ? void 0 : form2.appendChild(p2);
});
btnRandom === null || btnRandom === void 0 ? void 0 : btnRandom.addEventListener("click", (e) => {
    e.preventDefault();
    random = Math.floor(Math.random() * (100 - 1) + 1);
    let pRandom = document.createElement("p");
    pRandom.textContent = `Random Number: ${random}`;
    form3 === null || form3 === void 0 ? void 0 : form3.appendChild(pRandom);
});
if (btnCheck != null) {
    btnCheck.addEventListener("click", () => {
        const result = checkNumber();
        resultDiv == null
            ? null
            : (resultDiv.innerText = result !== null && result !== void 0 ? result : "Uno o più valore sono undefined");
    });
}
// controllo chi dei due giocatori ci è andato più vixino oppure ha indovinato il numero
function checkNumber() {
    if (number1 == undefined || number2 == undefined || random == undefined) {
        return undefined;
    }
    if (number1 === random) {
        return ` Il giocatore 1 ha azzeccato il numero`;
    }
    else if (number2 === random) {
        return ` Il giocatore 2 ha azzeccato il numero`;
    }
    else if (number1 === random && number2 === random) {
        return `entrambi i giocatori hanno indovinato il numero `;
    }
    return Math.abs(number1 - random) < Math.abs(number2 - random)
        ? ` Il giocatore 1 ci è andato più vicino`
        : ` Il giocatore 2 ci è andato più vicino`;
}
