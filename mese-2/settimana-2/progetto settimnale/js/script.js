let quadrati = document.querySelectorAll('.quadrato');
let check = document.querySelectorAll('.check');
const homePage= document.getElementById('page-1');
const editPage= document.getElementById ('page-2');
const profile = document.getElementById('profile');
const logoNetflix= document.querySelectorAll('#logo')
const save= document.querySelector('.save');
const cancel= document.querySelector('.cancel');
const deleteProfile= document.querySelector('.delete-profile');
const popUpAvatar = document.querySelector('.pop-up')
const avatar = document.getElementById ('avatar');
const buttonPopUp= document.querySelector('.button-popUp')
const nav = document.getElementById('nav-avatar')
popUpAvatar.style.display='none';

profile.addEventListener('click', () => {
    homePage.style.display = 'none'
    editPage.style.display = 'block'
})




// funzione per avviare un pop, solo a scopo didattico per far vedere dove trovare la Edit Page
function avatarInteracctive() {
    avatar.addEventListener('click', () => {
        if (popUpAvatar.style.display === 'block') {
            popUpAvatar.style.display = 'none';
        } else {
            popUpAvatar.style.display = 'block';
        }
        
        buttonPopUp.addEventListener('click', () => {
            homePage.style.display = 'none';
            editPage.style.display = 'block';
        });
    }); 
}
avatarInteracctive();

function openPopupAfterDelay() {
    setTimeout(function() {
      let popup = document.createElement('div');
      popup.textContent = "clicca l'avatar per passare alla Edit Page";
     popup.classList.add('pop-up-delay')
      document.body.appendChild(popup);
  
      // per chiudere il popup 
      setTimeout(function() {
        document.body.removeChild(popup);
      }, 3000);
    }, 6000); 
  }
  openPopupAfterDelay();
  





// funzione per ritornare all'home page al click sul logo
function logoHomePage() {
    logoNetflix.forEach(logo =>{
        logo.addEventListener('click', () => {
            editPage.style.display='none'
            homePage.style.display='block'
        })
    
    })
    
}
logoHomePage()

// funzione al click check the checkbox
function checkbox() {
    quadrati.forEach(quadrato => {
        quadrato.addEventListener('click', () => {
            let oneCheck = quadrato.nextElementSibling;
            oneCheck.classList.toggle('hidden');
            
        });
    });
    
}
checkbox()

