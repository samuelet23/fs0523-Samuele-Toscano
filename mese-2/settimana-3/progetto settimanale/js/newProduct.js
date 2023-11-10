let nameProduct = document.querySelector('#name');
let description = document.querySelector('#description');
let brand = document.querySelector('#brand');
let imageUrl = document.querySelector('#imageUrl');
let price = document.querySelector('#price');

function validation () {
    if (!(nameProduct.value || description.value 
     || brand.value  || imageUrl.value 
     || price.value )) {
        nameProduct.classList.add('invalid-feedback');
        description.classList.add('invalid-feedback');
        brand.classList.add('invalid-feedback');
        imageUrl.classList.add('invalid-feedback');
        price.classList.add('invalid-feedback');
    }
}