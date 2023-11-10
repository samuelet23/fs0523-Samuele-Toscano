const url = 'https://striveschool-api.herokuapp.com/api/product/' 

const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGI0MTMyNWM5NzAwMTg3ZjlmODQiLCJpYXQiOjE2OTk2MTM1MDUsImV4cCI6MTcwMDgyMzEwNX0.EleY-akp27wd1gI_iPcvaBIkdNA-eUjGENd5ShkRgj4"


function selectTemplate() {
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true); 
    return clon;
}


function selectProduct() {
    let clon = selectTemplate()
    let allCard = clon.querySelectorAll('.card-entire');
    let imgCard = clon.querySelectorAll('.img-card');
    let nameCard= clon.querySelectorAll('.name-product');
    let description = clon.querySelectorAll('.description-product');
    let price = clon.querySelectorAll('.price-product');
    let modifica = clon.querySelectorAll('.modifica-product');
    let scopri = clon.querySelectorAll('.scopri-product');
    let homePage = document.querySelector('#homePageProdotti');
    //asign element
    getProducts(url)
    .then(res => res.json())
    .then(products => {
        products.forEach(prodotto => {
            let cardClone = clon.cloneNode(true);
            allCard.forEach((e, i) => {
                imgCard[i].src = prodotto.imageUrl;
                nameCard[i].innerText = prodotto.name;
                description[i].innerText = prodotto.description;
                price[i].innerText = prodotto.price; 

                homePage.appendChild(cardClone);
            })
        });
    })
    
}
selectProduct()







//prende tutti i prodotti
async function getProducts(url) {
    let products = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': apiKey,
        }
})
return products
}
getProducts(url)

//Crea un prodotto
async function createProduct (url) {
 
    await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': apiKey,
        },
        body: JSON.stringify(productModel)
    })
 
}
//aggiorna un prodotto
async function updateProduct (url) {
 
    await fetch(url, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            'Authorization': apiKey,
        },
        body: JSON.stringify(productModel)
    })

}


//elimina un prodotto
async function deleteProduct (url) {
 
    await fetch(url, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            'Authorization': apiKey,
        },
        body: JSON.stringify(productModel)
    })

}

