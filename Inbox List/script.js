// Add JavaScript code here

let notification = document.querySelector('.notify')
let container = document.querySelector('.container')
let minimize = document.querySelector('.fa-angle-down')
let wrapper = document.querySelectorAll('.wrapper')


notification.addEventListener('click', reveal)

function reveal() {
    container.classList.remove('hide')
    notification.classList.add('hide')
    notification.style.display = 'none'
}

minimize.addEventListener('click', (e) => {
    wrapper.forEach(items => {
        items.classList.toggle('zip');
    })
});

const input = document.getElementById('search');
const h1Elements = document.querySelectorAll('.name h1');
const cardElements = document.querySelectorAll('.wrapper');

input.addEventListener('input', () => {
    const searchTerm = input.value.toLowerCase();

    cardElements.forEach((card, index) => {
        const name = h1Elements[index].innerText.toLowerCase();
        if (name.includes(searchTerm)) {
            card.classList.remove('zip');
        } else {
            card.classList.add('zip');
        }
    });
});


