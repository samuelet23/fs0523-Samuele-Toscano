
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
    constructor(id) {
      this.form = document.getElementById(id);
      this.petNameInput = this.createInput("Insert Pet Name");
      this.ownerNameInput = this.createInput("Insert Owner Name");
      this.speciesInput = this.createInput("Insert the Species");
      this.breedInput = this.createInput("Insert the Breed");
      this.button = this.createButton("Crea Animale");
      this.appendInputButton(this.form);
    
      this.button.addEventListener("click", () => {
        this.createAnimalList();
      });
    }
    
    ownerCompare(animal) {
      return this.ownerName === animal.ownerName;
    }

    createInput(placeholderText) {
      const input = document.createElement("input");
      input.placeholder = placeholderText;
      input.classList.add('input')
      return input;
    }
    appendInputButton(){
        
        this.form.append(this.petNameInput);
        this.form.append(this.ownerNameInput);
        this.form.append(this.speciesInput);
        this.form.append(this.breedInput);
        this.form.append(this.button);
    
    }
    createButton(buttonText) {
      const button = document.createElement("button");
      button.textContent = buttonText;
      button.classList.add('button')
      return button;
    }
  
    createAnimalList() {
      const list = document.createElement("ul");
      const listItem = document.createElement("li");
      listItem.classList.add("list-item");
  
      if (
        this.petNameInput.value &&
        this.ownerNameInput.value &&
        this.speciesInput.value &&
        this.breedInput.value
      ) {
        listItem.innerText = `L'animale si chiama ${this.petNameInput.value}, Il Padrone si chiama ${this.ownerNameInput.value},
            la specie dell'animale è ${this.speciesInput.value}, la breed dell'animale è ${this.breedInput.value}`;
        list.appendChild(listItem);
        this.form.appendChild(list);
        this.clearInputFields();
      } else {
        alert("Compila il form per creare un animale");
      }
    }
  
    clearInputFields() {
      this.petNameInput.value = "";
      this.ownerNameInput.value = "";
      this.speciesInput.value = "";
      this.breedInput.value = "";
    }
  
  }
  
 
let animal = new Pet ('pet')

let animale = new Pet("animale", "Rossi", "dog", "labrador");
let animale2 = new Pet("animale2", "Francesco", "dog", "labrador");

if (animale.ownerCompare(animale2)) {
    console.log(' sono la stessa persona');
}