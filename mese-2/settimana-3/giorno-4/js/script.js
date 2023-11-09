const apiUrl = "https://api.pexels.com/v1/search?query=pizza";
const apiUrl2 = "https://api.pexels.com/v1/search?query=mountain";
const apiKey = "5UC0zEheujMa6fmvaYhJhdA8WnGkIzXq5WIkmfmWZAYsQLj49oLrYkH6";
let loadImg = document.querySelector("#loadImages");
let loadImgSecondary= document.querySelector("#loadImagesSecondary");
let allImgs= document.querySelectorAll('.img-card')
let text = document.querySelectorAll('.id-card');
console.log(text);

// pizza fetch
fetch(apiUrl, {
  headers: {
    "Content-Type": "application/json",
    'Authorization': apiKey,
  },
})
.then((response) => response.json())
.then((imgs) => {  
    console.log(imgs);
    loadImg.addEventListener('click', ()=> {

        allImgs.forEach((e, j) => {
            e.src = imgs.photos[j].src.original;
        });
    })

    text.forEach((e, i) => {
      e.innerText= imgs.photos[i].id;
    });
})

// mountain fetch
fetch(apiUrl2, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': apiKey,
    },
  })
  .then((response) => response.json())
  .then((imgs) => {  
     
      loadImgSecondary.addEventListener('click', ()=> {
        console.log(loadImgSecondary);
          allImgs.forEach((e, j) => {
              e.src = imgs.photos[j].src.original;
              console.log(e, imgs.photos);
          });
      })
  })


  //btn hide 
  function buttonHide() {
      let btnHide = document.querySelectorAll(".Hide");
      let cards = document.querySelectorAll(".card-hide");
      
      btnHide.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          if (index < cards.length) {
            cards[index].style.display = "none";
          }
        });
      });
  }
  buttonHide();

  //add id card
