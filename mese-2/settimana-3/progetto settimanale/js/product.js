
let urlApi = new URLSearchParams(location.search);
let id = urlApi.get('id');
const url = 'https://striveschool-api.herokuapp.com/api/product/' 
const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGI0MTMyNWM5NzAwMTg3ZjlmODQiLCJpYXQiOjE2OTk2MTM1MDUsImV4cCI6MTcwMDgyMzEwNX0.EleY-akp27wd1gI_iPcvaBIkdNA-eUjGENd5ShkRgj4"


async function productPageGenerate(productId) {
    let homePage = document.querySelector('#pageProdotto');
    let title = document.querySelector('.title-page-product');
    let titlePage = document.getElementsByTagName('title')
    
   
    await getProducts(url+ productId )
    .then(res => res.json())
    .then(product => {
        
        let temp = document.getElementsByTagName("template")[0];
                let clon = temp.content.cloneNode(true);
                let imgCard = clon.querySelector('.img-card');
                let nameCard= clon.querySelector('.name-product');
                let description = clon.querySelector('.description-product');
                let price = clon.querySelector('.price-product');
                
                let elimina = clon.querySelector('.elimina-product');
                let modifica = clon.querySelector('.modifica-product');

                modifica.href = 'newProduct.html?id=' +  product._id   
                titlePage[0].innerText = product.name;
                title.innerText= product.name;
                imgCard.src = product.imageUrl;
                nameCard.innerText = product.name;
                description.innerText = product.description;
                price.innerText = product.price + '€'; 

               elimina.addEventListener('click', () => {
                let conferma = Swal.fire({
                  title: "Sei sicuro/a di voler eliminare questo prodotto?",
                  showDenyButton: true,
                  showCancelButton: true,
                  denyButtonText: `ELimina`,
                  confirmButtonText: "Non eliminare"
                }).then((result) => {
                  if (result.isConfirmed) {
                    deleteProduct(url, id, product)
                    Swal.fire("Prodotto eliminato correttamente")
                    location.href = 'index.html';
                    
                  } else if (result.isDenied) {
                    Swal.fire("Non hai eliminato questo prodotto");
                  }
                });
                });

                homePage.appendChild(clon);
              })

            }
productPageGenerate(id)














//prende tutti i prodotti
async function getProducts(url) {
  let products = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
  });
return  products;
}
getProducts(url)

//Crea un prodotto





//elimina un prodotto
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


