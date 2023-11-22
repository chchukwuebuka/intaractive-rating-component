const navContainer = document.querySelector('.nav');
const thanksContainer = document.querySelector('.thanks');

const submitButton = document.getElementById('BTN-SUBMIT');
const rateButton = document.getElementById('rate-submit');
const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.inner-number');


submitButton.addEventListener('click', () => {
    thanksContainer.classList.remove('hidden')
    navContainer.style.display = 'none'
});

rateButton.addEventListener('click', () => {
    thanksContainer.classList.add('hidden')
    navContainer.style.display = 'block'
});

rates.forEach((rate) => {
   rate.addEventListener('click', () =>{
    rating.innerHTML = rate.innerHTML
   });
});
