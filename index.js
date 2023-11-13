const getBtn = document.querySelector('input');
const getBody = document.querySelector('body');
let colorNow = document.querySelector('#colorNow');
let lastColor = document.querySelector('#lastColor');

getBody.style.fontFamily = "arial";
getBody.style.textShadow= "1px 1px 2px white";

getBtn.addEventListener('click', () => {

    let random = Math.floor(Math.random() * (255 - 155) + 155);

    getBody.style.backgroundColor = `#${random}`;

    colorNow.textContent = random;

    localStorage.setItem('getColor',random);

    lastColor.textContent = localStorage.getItem('getColor');

    console.log(random);
});
lastColor.textContent = localStorage.getItem('getColor');