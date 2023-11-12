const url = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGI0MTMyNWM5NzAwMTg3ZjlmODQiLCJpYXQiOjE2OTk2MTM1MDUsImV4cCI6MTcwMDgyMzEwNX0.EleY-akp27wd1gI_iPcvaBIkdNA-eUjGENd5ShkRgj4";
const urlApi = new URLSearchParams(location.search);
const id = urlApi.get("id");


setTimeout(() => {
  async function selectProduct() {
    let homePage = document.querySelector("#homePageProdotti");
    let btnSearch = document.querySelector("#searchBar");
    let searchTerm = document.querySelector("#searchBarValue");
    let title = document.querySelector(".title-page");
    title.innerText = "PRODOTTI DISPONIBILI";

    await getProducts(url)
      .then((res) => res.json())
      .then((products) => {
        products.forEach((prodotto) => {
          let temp = document.getElementsByTagName("template")[0];
          let clon = temp.content.cloneNode(true);

          let imgCard = clon.querySelector(".img-card");
          let nameCard = clon.querySelector(".name-product");
          let description = clon.querySelector(".description-product");
          let price = clon.querySelector(".price-product");
          let scopri = clon.querySelector(".scopri-product");
          let modifica = clon.querySelector(".modifica-product");
          imgCard.src = prodotto.imageUrl;
          nameCard.innerText = prodotto.name;
          description.innerText = prodotto.description;
          price.innerText = prodotto.price + "€";
          scopri.href = "product-page.html?id=" + prodotto._id;
          modifica.href = "newProduct.html?id=" + prodotto._id;
         
          
       
          homePage.appendChild(clon);

          localStorage.setItem("products", JSON.stringify(products));
        });
        //button Search Bar
        btnSearch.addEventListener("click", () => {
          const searchTermValue = searchTerm.value.trim();  
          const foundProduct = products.find((prodotto) => prodotto.name.trim() === searchTermValue);
          if (foundProduct) {
            location.href = "product-page.html?id=" + foundProduct._id;
            searchTerm.value = "";
          } else {
            Swal.fire("Prodotto non trovato");
          }
      });
  })
}
  selectProduct();
}, 2000);

//prende tutti i prodotti
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

// funzione per far comparire la pagina dopo 2 secondi
function delayedLoading() {
  setTimeout(function () {
    document.querySelector(".text-center").remove();
  }, 2000);
}
delayedLoading();
//show footer
setTimeout(() => {
  function showFooter() {
    let ritardoFooter = document.querySelector('#footer');
    ritardoFooter.classList.remove('hidden');
  }
  
  showFooter()
},3000)


