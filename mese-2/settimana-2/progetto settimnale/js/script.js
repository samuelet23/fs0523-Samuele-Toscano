let quadrati = document.querySelectorAll('.quadrato');
let check = document.querySelectorAll('.check');
const homePage= document.getElementById('page-1');
const editPage= document.getElementById ('page-2');
const profile = document.getElementById('profile');
const logoNetflix= document.querySelectorAll('#logo')
const save= document.querySelector('.save');
const cancel= document.querySelector('.cancel');
const deleteProfile= document.querySelector('.delete-profile');






profile.addEventListener('click', () => {
    homePage.style.display = 'none'
    editPage.style.display = 'block'
})

logoNetflix.forEach(logo =>{
    logo.addEventListener('click', () => {
        editPage.style.display='none'
        homePage.style.display='block'
    })

})








// funzione al click check the checkbox
quadrati.forEach(quadrato => {
    quadrato.addEventListener('click', () => {
        let oneCheck = quadrato.nextElementSibling;
        oneCheck.classList.toggle('hidden');
        
    });
});


