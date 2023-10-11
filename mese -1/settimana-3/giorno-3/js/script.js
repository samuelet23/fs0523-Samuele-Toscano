let bottone = document.getElementById('button')
let input = document.getElementById ('input')
let lista = document.getElementById ('lista')



bottone.addEventListener ('click', () => {
   if(input.value == ''){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ti sei dimenticato di scrivere il Task',
       
      })
   }


    let li = document.createElement ('li');
    li.textContent = input.value;
    lista.prepend (li);
    li.classList.add ('li-decoration')
    li.addEventListener('click', () => {
    li.classList.add ('click-li');
    })

    let buttonLi = document.createElement ('button')
    buttonLi.innerHTML= 'Elimina Task'
    li.append (buttonLi)
    buttonLi.classList.add ('button-li')
    buttonLi.addEventListener ('click', () => {
        li.remove ();
    })

    input.value =''
})