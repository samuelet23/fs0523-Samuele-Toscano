let input = document.querySelector('.input')
let salva = document.getElementById('salva')
let rimuovi = document.getElementById('rimuovi')
let nomeCreato = document.querySelector('.nome')

    setInterval(function() {
        if (localStorage.getItem('nome')) {
        nomeCreato.innerText = localStorage.getItem('nome')
        }
        
    
    }, 1000);

    salva.addEventListener('click', () => {
        localStorage.setItem('nome', input.value)
      
    })


    rimuovi.addEventListener('click', () => {
        localStorage.removeItem('nome')
    })








function contatore() {
    let cont= document.getElementById('contatore')
    let contatoreValue= sessionStorage.getItem('counter')
    if (contatoreValue == null) {
        cont = contatoreValue 
    } 
        else {
            contatoreValue = parseInt(contatoreValue);
        }
    

    contatoreValue++;
    sessionStorage.setItem('counter', contatoreValue)
    cont.innerText = contatoreValue
}
setInterval(contatore, 1000);
