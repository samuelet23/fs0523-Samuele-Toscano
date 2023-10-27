let navBar = document.getElementById('nav-bar');
let getStarted = document.getElementById('get-started');

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
