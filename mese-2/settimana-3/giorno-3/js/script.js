fetch(" https://striveschool-api.herokuapp.com/books")
  .then((res) => res.json())
  .then((res) => {
    res.forEach((libro) => {
      function showContent() {
        //select first template

        let temp = document.getElementById("template");
        let clon = temp.content.cloneNode(true);

        //creo le variabili del clone
        let imgCard = clon.querySelector("#card-img");
        let title = clon.querySelector("#title");
        let text = clon.querySelector("#text");

        //assegno i valori nei rispettivi campi
        imgCard.src = libro.img;
        title.innerText = libro.title;
        text.innerText = libro.price;

        //delete button
        let deleteButton = clon.getElementById("scarta");
        let card = clon.querySelector("#card");
        deleteButton.addEventListener("click", () => {
          card.remove();
        });

        //compra ora button
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let compraOra = clon.querySelectorAll("#compraOra");
        compraOra.forEach((button, index) => {
          button.addEventListener("click", () => {
            let bookTitle = `Stai acquistando ${libro.title} e costerà ${libro.price}€`;
            let carrello = document.getElementById("carrello");
            carrello.innerHTML = "";
            if (cart.length === 0) {
              carrello.innerText = "Il carrello è vuoto";
            }
            //crea ad ogni nuovo elemento aggiunto al carrello un li 
            cart.forEach((item) => {
              let li = document.createElement("li");
              li.textContent = item;
              carrello.appendChild(li);
    
              //   creo il bottone elimina del carrello 
              let deleteButtonCart= document.createElement("button");
              deleteButtonCart.textContent = "Elimina dal carrello"
              li.appendChild(deleteButtonCart);
              deleteButtonCart.addEventListener("click", () => {
                let index = cart.indexOf(item);
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
              });
            });
            cart.push(bookTitle);

            // Aggiorna il carrello nel localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

          });
        });
        let target = document.getElementById("target");
        target.appendChild(clon);
      }

      showContent();

      function ShowCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let carrello = document.getElementById("carrello");
        carrello.innerHTML = "";
        if (cart.length === 0) {
          carrello.innerText = "Il carrello è vuoto";
        }
        //crea ad ogni nuovo elemento aggiunto al carrello un li 
        cart.forEach((item) => {
          let li = document.createElement("li");
          li.textContent = item;
          carrello.appendChild(li);

          //   creo il bottone elimina del carrello 
          let deleteButtonCart= document.createElement("button");
          deleteButtonCart.textContent = "Elimina dal carrello"
          li.appendChild(deleteButtonCart);
          deleteButtonCart.addEventListener("click", () => {
            let index = cart.indexOf(item);
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
          });
        });
      }
      ShowCart()

    });
  });
