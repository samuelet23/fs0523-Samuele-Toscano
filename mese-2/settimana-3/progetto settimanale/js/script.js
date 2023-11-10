
const url = 'https://striveschool-api.herokuapp.com/api/product/' 

const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGI0MTMyNWM5NzAwMTg3ZjlmODQiLCJpYXQiOjE2OTk2MTM1MDUsImV4cCI6MTcwMDgyMzEwNX0.EleY-akp27wd1gI_iPcvaBIkdNA-eUjGENd5ShkRgj4"

async function selectProduct() {
     
    let homePage = document.querySelector('#homePageProdotti');
    let title = document.querySelector('.title-page');
    title.innerText= 'PRODOTTI DISPONIBILI'
     await getProducts(url)
    .then(res => res.json())
    .then(products => {
        products.forEach(prodotto => {
                let temp = document.getElementsByTagName("template")[0];
                let clon = temp.content.cloneNode(true);
                
                let imgCard = clon.querySelector('.img-card');
                let nameCard= clon.querySelector('.name-product');
                let description = clon.querySelector('.description-product');
                let price = clon.querySelector('.price-product');
                let scopri = clon.querySelector('.scopri-product');
                let modifica = clon.querySelector('.modifica-product');

                modifica.href = 'newProduct.html?id=' +  prodotto._id   
                imgCard.src = prodotto.imageUrl;
                nameCard.innerText = prodotto.name;
                description.innerText = prodotto.description;
                price.innerText = prodotto.price + '€'; 
                scopri.href = 'product-page.html?id=' +  prodotto._id   
                modifica.href = 'product-page.html?id=' +  prodotto._id           
                homePage.appendChild(clon);
            
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

