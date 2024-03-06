// Add JavaScript code here

let input = document.getElementById('num');
let minus = document.querySelector('.fa-minus');
let plus = document.querySelector('.fa-plus');

let value = 3;

input.value = value;

// Add event listeners for plus and minus buttons
minus.addEventListener('click', function () {
    if (value > 0) {
        value--;
        input.value = value;
    }
});

plus.addEventListener('click', function () {
    value++;
    input.value = value;
});

