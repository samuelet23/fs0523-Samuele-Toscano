// funzione che fa al click fa scomparire la sezione
function collapseSection() {
  let cancellaSezione = document.querySelectorAll(".Cancella");
  let daCancellare = document.querySelectorAll(".daCancellare");
  cancellaSezione.forEach((elemento, index) => {
    elemento.addEventListener("click", () => {
      if (daCancellare[index].style.display === "none") {
        daCancellare[index].style.display = "flex";
      } else {
        daCancellare[index].style.display = "none";
      }
    });
  });
}
collapseSection();

// funziona che conta quanti viaggi sono presenti nella pagina
function countCard() {
  let cards = document.querySelectorAll(".card");
  let buttonCount = document.getElementById("count");

  buttonCount.addEventListener("click", () => {
    alert(`in questa pagina al momento sono presente ${cards.length} viaggi`);
  });
}
countCard();

// funzione che controlla l'email ed il form
function validateEmail() {
  let sendForm = document.getElementById("send");
  let email = document.getElementById("recipient-name");

  sendForm.addEventListener("click", () => {
    if (email.input == /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) {
      alert("form inviato");
    } else if (!(email.input == /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      alert(`Inserisci un'email esistente`);
    }
  });
}
validateEmail();

// funzione che attiva il bottone per rimuovere tutte le card
function clickGoUP() {
  let rimuovi = document.getElementById("rimuovi");
  rimuovi.addEventListener("click", () => {
    Swal.fire({
      title: "Sei sicuro di voler eliminare tutte le card?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Non eliminare",
      denyButtonText: `Elimina`,
    }).then((result) => {
      if (result.isDenied) {
        Swal.fire("Card eliminate!", "", "success");
        cards.forEach((card) => {
          card.remove();
          rimuovi.remove();
          window.scrollTo(0, 0);
        });
      } else if (result.isConfirmed) {
        Swal.fire("Buona navigazione!");
      }
    });
  });
}
clickGoUP();

// funzione che aggiunge i badge 'Hot'
function addBadge() {
  let cardWelcome = document.querySelectorAll("#badge .col");
  cardWelcome.forEach((card) => {
    card.style.position = "relative";
    let badge = document.createElement("p");
    badge.innerText = "HOT";
    badge.classList.add("badge");
    card.append(badge);
  });
}
addBadge();
