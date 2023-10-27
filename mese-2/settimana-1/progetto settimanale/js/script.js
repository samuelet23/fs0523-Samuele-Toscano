let navBar = document.getElementById('nav-bar');
let getStarted = document.getElementById('get-started');


// superati i 500px di scroll dall'inizio della pagina  cambia il background, 
// tornato ai500px ritorna come prima
window.addEventListener('scroll', () => {
    let top = window.scrollY;
    if (top > 500) {
        navBar.style.transition = 'background-color 1s ';
        getStarted.style.transition = 'background-color 1s ';
        navBar.style.backgroundColor = 'white';
        getStarted.style.backgroundColor = 'green';
    } else if (top < 550) {
        navBar.style.transition = 'background-color 1s ';
        getStarted.style.transition = 'background-color 1s ';
        navBar.style.backgroundColor = '';
        getStarted.style.backgroundColor = '';
    }
});


//  attiva il pulsante get strated 
getStarted.addEventListener('click',()=>{
    Swal.fire(
        'Avrei creato un pop-up personalizzato',
        'Ma non ho avuto il tempo',
        'Sarà per la prossima volta'
      )
})


// attiva il pulsante startreading
let startReading= document.querySelector('.button-left-hero')

startReading.addEventListener('click', ()=>{
Swal.fire(
  'Avrei creato un pop-up personalizzato',
  'Ma non ho avuto il tempo',
  'Sarà per la prossima volta'
)
})


let miniProfiloPersona = document.querySelector('.profilopersona')
let profiloPersona = document.querySelectorAll('.articoli')

// al passagio del mouse attiva un pop up del profilo dell persona
profiloPersona.forEach((elemento) => {
    let miniProfiloPersona = elemento.querySelector('.profilopersona');

    elemento.addEventListener('mouseover', () => {
        miniProfiloPersona.style.display = 'block';
    });

    elemento.addEventListener('mouseout', () => {
        miniProfiloPersona.style.display = 'none';
    });
});