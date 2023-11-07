let input = document.querySelector('.input')
let salva = document.getElementById('salva')
let rimuovi = document.getElementById('rimuovi')


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
        cont = 0 
    } else {
      contatoreValue = parseInt(contatoreValue);
    }

    contatoreValue++;
    sessionStorage.setItem('counter', contatoreValue)
    cont.innerText = contatoreValue
}
setInterval(contatore, 1000);