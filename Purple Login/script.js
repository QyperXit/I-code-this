let tick = document.querySelector('.tick');
let select = document.querySelector('.select')

select.addEventListener('click', () => {
    // Toggle visibility
    tick.style.visibility = (tick.style.visibility === 'visible') ? 'hidden' : 'visible';
});

