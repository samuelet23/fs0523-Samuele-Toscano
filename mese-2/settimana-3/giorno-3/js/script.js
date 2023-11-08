
fetch(' https://striveschool-api.herokuapp.com/books')
.then(res => res.json())
.then(res => { console.log(res);
res.forEach(libro => {
  
    function showContent() { //select first template
        //creo il clone del template
        let temp = document.getElementsByTagName("template")[0];
        let clon = temp.content.cloneNode(true);

        //creo le variabili del clone
        let imgCard = clon.querySelector('#card-img')
        let title = clon.querySelector('#title')
        let text  = clon.querySelector('#text')

        //assegno i valori nei rispettivi campi
        imgCard.src = libro.img;
        title.innerText = libro.title;
        text.innerText = libro.price;

        //delete button
        let deleteButton = clon.getElementById('scarta')
        let card = clon.querySelector('#card')
        deleteButton.addEventListener('click', () => {
            card.remove()
        });

        document.body.appendChild(clon);
       

      }
     showContent();
});
});

