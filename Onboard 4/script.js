// Add JavaScript code here
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');

let button = document.querySelectorAll('button');

button.forEach(item => {
    item.addEventListener('click', e => {
        if (three.classList.contains('hide') && two.classList.contains('hide')) {
            one.classList.add('hide');
            two.classList.remove('hide');
        } else if (one.classList.contains('hide') && three.classList.contains('hide')) {
            two.classList.add('hide');
            three.classList.remove('hide');
        } else {
            three.classList.add('hide');
            one.classList.remove('hide');
        }
    });
});

