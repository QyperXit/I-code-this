let card = document.querySelector('.card')
let cardTwo = document.querySelector('.card_2')

let shop = document.querySelector('.fa-arrow-down')
let getGift = document.querySelector('.fa-arrow-right')

shop.addEventListener('click', e => {
    card.style.visibility = 'hidden';
    cardTwo.style.visibility = 'visible'
});
