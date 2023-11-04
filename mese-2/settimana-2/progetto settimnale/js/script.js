let quadrati = document.querySelectorAll('.quadrato');
let check = document.querySelectorAll('.check');
const homePage= document.getElementById('page-1')
const editPage= document.getElementById ('page-2')
const profile = document.getElementById('profile')
const logo= document.querySelector('.img-container')
console.log(logo);



profile.addEventListener('click', () => {
    homePage.style.display = 'none'
    editPage.style.display = 'block'
})

logo.addEventListener('click', () =>{
editPage.style.display = 'none'
homePage.style.display = 'block'
})



// funzione al click check the checkbox
quadrati.forEach(quadrato => {
    quadrato.addEventListener('click', () => {
        let oneCheck = quadrato.nextElementSibling;
        oneCheck.classList.remove('invisible');
        
    });
});


