class User {
  constructor(fn, ln, a, l) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;
    this.location = l;
  }

  ageConfront(p) {
    if (this.age > p.age) {
      return `${this.firstName} è più vecchio di ${p.firstName}`;
    } else if (p.age > this.age) {
      return `${p.firstName} è più vecchio di ${this.firstName}`;
    } else {
      return `${p.firstName} e ${this.firstName} hanno la stessa età`;
    }
  }
}

persona1 = new User("Mario", "Rossi", 45, "Roma");
persona2 = new User("ALberto", "Rossi", 40, "Roma");
let confronto = persona1.ageConfront(persona2);
console.log(confronto);






//secondo esercizio 
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  formCreation(id) {
    this.form = document.getElementById(id);
  }
  inputCreation() {
    this.petNameInput = document.createElement("input");
    this.petNameInput.placeholder = "Insert Pet Name";

    this.ownerNameInput = document.createElement("input");
    this.ownerNameInput.placeholder = "Insert Owner Name";

    this.speciesInput = document.createElement("input");
    this.speciesInput.placeholder = "Insert the Species";

    this.breedInput = document.createElement("input");
    this.breedInput.placeholder = "Insert the Breed";
  }
  appendInput(id) {
    this.formCreation(id);
    this.inputCreation();

    this.form.appendChild(this.petNameInput);
    this.form.appendChild(this.ownerNameInput);
    this.form.appendChild(this.speciesInput);
    this.form.appendChild(this.breedInput);
  }
  buttonCreation(id) {
    this.formCreation(id);
    this.button = document.createElement("button");
    this.button.textContent = "Crea Animale";
    this.form.appendChild(this.button);
  }
  clickButtonAndCreateList(id) {
    this.buttonCreation("pet");
    this.button.addEventListener("click", () => {
      let list = document.createElement("ul");
      let listItem = document.createElement("li");
      listItem.classList.add("list-item");
      if (
        !(
          this.petNameInput.value == "" &&
          this.ownerNameInput.value == "" &&
          this.speciesInput.value == "" &&
          this.breedInput.value == ""
        )
      ) {
        listItem.innerText = `L'animale si chiama ${this.petNameInput.value}, Il Padrone si chiama ${this.ownerNameInput.value},
                la specie dell'animale è ${this.speciesInput.value}, la breed dell'animale è${this.breedInput.value}`;
      } else {
        alert("compila il form per creare un animale");
      }
      list.appendChild(listItem);
      this.formCreation(id);
      this.form.appendChild(list);
      this.petNameInput.value = "";
      this.ownerNameInput.value = "";
      this.speciesInput.value = "";
      this.breedInput.value = "";
    });
  }

  ownerCompare(animal) {
    this.ownerName == animal.ownerName;
  }
}
let animale = new Pet("animale", "Rossi", "dog", "labrador");
let animale2 = new Pet("animale2", "Francesco", "dog", "labrador");
animale.appendInput("pet");
animale.clickButtonAndCreateList("pet");

animale.ownerCompare(animale2);
