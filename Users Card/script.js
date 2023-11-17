// Add JavaScript code here

const first = document.getElementById('first');
let second = document.querySelector('btn-white-2')
let third = document.querySelector('.btn-1')

let big = document.querySelector('.big')
let middle = document.querySelector('.middle')


first.addEventListener('click', swap)


function swap() {
    console.log('hello')
    big.style.display = 'block';
    middle.style.display = 'block'
}
