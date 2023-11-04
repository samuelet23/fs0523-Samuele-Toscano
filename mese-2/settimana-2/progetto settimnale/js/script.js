let quadrati = document.querySelectorAll('.quadrato');
let check = document.querySelectorAll('.check');
const homePage= document.getElementById('page-1');
const editPage= document.getElementById ('page-2');
const profile = document.getElementById('profile');



profile.addEventListener('click', () => {
    homePage.style.visibility = 'none'
    editPage.style.visibility = 'block'
})











// funzione al click check the checkbox
quadrati.forEach(quadrato => {
    quadrato.addEventListener('click', () => {
        let oneCheck = quadrato.nextElementSibling;
        oneCheck.classList.remove('invisible');
        
    });
});


