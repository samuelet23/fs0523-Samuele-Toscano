// elemento tombola e creati i contenitori per le celle
let tombola = document.getElementById("tombola");
let contenitoreCelle = document.createElement("div");
contenitoreCelle.classList.add("flex");
tombola.append(contenitoreCelle);

let buttonSection = document.querySelector(".button-section");
tombola.append(buttonSection);

let cella = document.createElement("div");
let numeroEstratto = document.createElement("li");

// creato il bottone per generare le celle
let button = document.createElement("button");
button.innerText = "ESTRAI";
button.classList.add("button-estrazione");
buttonSection.append(button);

//
let listaNumeriEstratti = document.createElement("ul");
listaNumeriEstratti.classList.add("listaNumeriEstratti");
buttonSection.appendChild(listaNumeriEstratti);

let numeriCelle = [];

function cellaGenerate() {
  for (let i = 0; i <= 76; i++) {
    let cella = document.createElement("div");
    cella.innerText = i;

    cella.classList.add("cella");
    contenitoreCelle.append(cella);
    cella.id = `cel${i}`;
    numeriCelle.push(i);
  }
}
cellaGenerate();

function cellaGenerateWithButton() {
  button.addEventListener("click", () => {
    let numeroEstratto = document.createElement("li");
    numeroEstratto.classList.add("evidenziata");
    let random = Math.floor(Math.random() * 76) + 1;

    listaNumeriEstratti.append(numeroEstratto);
    numeroEstratto.innerText = random;
    numeroEstratto.innerText


    listaNumeriEstratti.splice(random, 1)[0]
     let cella1 = document.querySelector("#cel" + random);
    if (cella1) {
      cella1.classList.add("evidenziata");
    }

  });
}
cellaGenerateWithButton();
