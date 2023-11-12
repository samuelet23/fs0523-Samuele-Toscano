//variabili generali
let urlApi = new URLSearchParams(location.search);
let id = urlApi.get("id");
const url = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGI0MTMyNWM5NzAwMTg3ZjlmODQiLCJpYXQiOjE2OTk2MTM1MDUsImV4cCI6MTcwMDgyMzEwNX0.EleY-akp27wd1gI_iPcvaBIkdNA-eUjGENd5ShkRgj4";

//variabili formPage
let title = document.querySelector('.title-page-product')
title.innerHTML='CREATE NEW PRODUCT';
let nameProduct = document.querySelector("#name");
let description = document.querySelector("#description");
let brand = document.querySelector("#brand");
let imageUrl = document.querySelector("#imageUrl");
let price = document.querySelector("#price");
let color = document.querySelector("#color");
// bottoni
let elimina = document.querySelector(".elimina");
elimina.style.display= 'none';
let reset = document.querySelector(".reset");
let create = document.querySelector(".create");
create.innerHTML = "Create Product";
const urlRegex = /^(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;

// elimina un prodotto tramite bottone
elimina.addEventListener("click", (e) => {
  e.preventDefault();
  let product = {
    name: nameProduct.value,
    description: description.value,
    brand: brand.value,
    imageUrl: imageUrl.value,
    price: price.value,
  };

  if (
    !(
      nameProduct.value &&
      description.value &&
      brand.value &&
      imageUrl.value &&
      price.value
    )
  ) {
    return Swal.fire("Compila tutti i campi  per eliminare un prodotto!");
  }
  console.log(product);
  Swal.fire({
    title: "Sei sicuro/a di voler eliminare questo prodotto?",
    showDenyButton: true,
    showCancelButton: true,
    denyButtonText: `Non eliminare`,
    confirmButtonText: "ELimina",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteProduct(url, id, product);
      Swal.fire("Prodotto eliminato correttamente");
      location.href = "index.html";
    } else if (result.isDenied) {
      Swal.fire("Non hai eliminato questo prodotto");
      svuotaFormn();
    }
  });
});

//crea un prodotto tramite il form
create.addEventListener("click", (e) => {
  e.preventDefault();

  let product = {
    name: nameProduct.value,
    description: description.value,
    brand: brand.value,
    imageUrl: imageUrl.value,
    price: price.value,
    color: color.value,
  };

  if (!(nameProduct.value && description.value && brand.value && price.value)) {
    return Swal.fire("Compila tutti i campi per creare un prodotto!");
  }

  if (!urlRegex.test(imageUrl.value)) {
    return Swal.fire("Inserisci un URL valido per l'immagine!");
  }

  Swal.fire({
    title: "Sei sicuro/a di voler creare questo prodotto?",
    showDenyButton: true,
    showCancelButton: true,
    denyButtonText: `No, No, torna indietro`,
    confirmButtonText: "Crea",
  }).then((result) => {
    if (result.isConfirmed) {
      createProduct(url, product);
      Swal.fire("Prodotto creato correttamente");
      location.href = "index.html";
    } else if (result.isDenied) {
      Swal.fire("Non hai creato questo prodotto");
      svuotaFormn();
    }
  });
});

async function formGenerated(productId) {
  await getProducts(url + productId)
    .then((res) => res.json())
    .then((product) => {
      // scrive i campi del form in base al prodotto selezionato
      nameProduct.value = product.name;
      description.value = product.description;
      brand.value = product.brand;
      imageUrl.value = product.imageUrl;
      price.value = product.price;
      title.innerHTML = 'EDIT YOUR PRODUCT'
      elimina.style.display = 'block';

      // controlla se questo parametro facoltativo esiste o meno
      if (product.color === undefined) {
        product.color = "";
      }
      color.value = product.color;

      // cambio il nome al pulsante
      create.innerHTML = "Edit Product";

      create.addEventListener("click", () => {
        let productUpdate = {
          name: nameProduct.value,
          description: description.value,
          brand: brand.value,
          imageUrl: imageUrl.value,
          price: price.value,
          color: color.value,
          
        };

        if (
          !(
            nameProduct.value &&
            description.value &&
            brand.value &&
            price.value
          )
        ) {
          return Swal.fire("Compila tutti i campi per creare un prodotto!");
        }
        if (!urlRegex.test(imageUrl.value)) {
          return Swal.fire(
            `Inserisci un URL valido per l'immagine! I formati accettati sono "JPG" "GIF" e "PNG"`
          );
        }
        console.log(productUpdate);
        Swal.fire({
          title: "Sei sicuro/a di voler modificare questo prodotto?",
          showDenyButton: true,
          showCancelButton: true,
          denyButtonText: `No, torna indietro`,
          confirmButtonText: "Modifica",
        }).then((result) => {
          if (result.isConfirmed) {
            // Aggiorno il prodotto solo se l'utente conferma
            updateProduct(url, id, productUpdate)
              .then(() => {
                Swal.fire("Prodotto modificato correttamente").then(() => {
                  location.href = "index.html";
                });
              })
              .catch((error) => {
                console.error(
                  "Errore durante l'aggiornamento del prodotto:",
                  error
                );
                Swal.fire(
                  "Si è verificato un errore durante l'aggiornamento del prodotto"
                );
              });
          } else if (result.isDenied) {
            Swal.fire("Non hai modificato questo prodotto");
            svuotaFormn();
          }
        });
      });
    })
}

// Aggiornare oggetto (PUT)
async function updateProduct(url, id, oggetto) {
  await fetch(url + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify(oggetto),
  });
}
formGenerated(id)

//crea un prodotto tramite il form (POST)
async function createProduct(url, oggetto) {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify(oggetto),
  });
}

//prende tutti i prodotti (GET)
async function getProducts(url) {
  let products = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
  });
  return products;
}
getProducts(url);


//elimina un prodotto (DELETE)
async function deleteProduct(url, id, oggetto) {
  await fetch(url + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify(oggetto),
  });
}

//funzione per svuotare i campi
function svuotaFormn() {
  nameProduct.value = "";
  description.value = "";
  brand.value = "";
  imageUrl.value = "";
  price.value = "";
}
//resetta tutti i campi
reset.addEventListener("click", () => {
  svuotaFormn();
});
//ritarda la visione del footer
setTimeout(() => {
  function showFooter() {
    let ritardoFooter = document.querySelector('#footer');
    ritardoFooter.classList.remove('hidden');
  }
  
  showFooter()
},3000)
