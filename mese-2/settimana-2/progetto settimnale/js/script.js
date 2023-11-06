let quadrati = document.querySelectorAll(".quadrato"); // quadrato checkbox
let check = document.querySelectorAll(".check"); //checkbox verified
const homePage = document.getElementById("page-1"); //home page
const editPage = document.getElementById("page-2"); //edit page
const profile = document.getElementById("profile"); //immagine avatar
const logoNetflix = document.querySelectorAll("#logo"); //logo netflix
const save = document.querySelector(".save"); //button save
const cancel = document.querySelector(".cancel"); //button cancel
const deleteProfile = document.querySelector(".delete-profile"); //button delete profile
const popUpAvatar = document.querySelector(".pop-up"); //pop up al click sull frecccia in basso
const avatar = document.getElementById("avatar"); //freccia in giu accanto avatar
const buttonPopUp = document.querySelector(".button-popUp"); //bottone del pop up


// per passare dalla home page alla edit page
profile.addEventListener("click", () => {
  homePage.style.display = "none";
  editPage.style.display = "block";
});

// funzione per avviare un pop, solo a scopo didattico per far vedere dove trovare la Edit Page
function avatarInteracctive() {
  avatar.addEventListener("click", () => {
    if (popUpAvatar.style.display === "none") {
      popUpAvatar.style.display = "block";
    } else {
      popUpAvatar.style.display = "none";
    }

    buttonPopUp.addEventListener("click", () => {
      homePage.style.display = "none";
      editPage.style.display = "block";
    });
  });
}
avatarInteracctive();

// funzione per ritornare all'home page al click sul logo
function logoHomePage() {
  logoNetflix.forEach((logo) => {
    logo.addEventListener("click", () => {
      editPage.style.display = "none";
      homePage.style.display = "block";
    });
  });
}
logoHomePage();

// funzione al click check the checkbox
function checkbox() {
  quadrati.forEach((quadrato) => {
    quadrato.addEventListener("click", () => {
      let oneCheck = quadrato.nextElementSibling;
      oneCheck.classList.toggle("hidden");

    });
  });
}
checkbox();



function openPopupAfterDelay() {
  setTimeout(function () {
    let popup = document.createElement("div");
    popup.textContent = "clicca l'avatar per passare alla Edit Page";
    popup.classList.add("pop-up-delay");
    homePage.appendChild(popup);

    // per chiudere il popup
    setTimeout(function () {
      homePage.removeChild(popup);
    }, 3000);
  }, 6000);
}
openPopupAfterDelay();
