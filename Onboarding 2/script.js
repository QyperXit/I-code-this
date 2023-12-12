// Add JavaScript code here
let pageOne = document.querySelector('.one')
let pageTwo = document.querySelector('.two')
let pageThree = document.querySelector('.three')

let next = document.querySelectorAll('button')

let skip = document.querySelectorAll('.skip')



next.forEach(button => {
    button.addEventListener('click', e => {
        if (window.getComputedStyle(pageOne).display === 'block') {
            pageOne.style.display = 'none';
            pageTwo.style.display = 'block';
        } else if (window.getComputedStyle(pageTwo).display === 'block') {
            pageTwo.style.display = 'none';
            pageThree.style.display = 'block';
        } else if (window.getComputedStyle(pageThree).display === 'block'){
            pageOne.style.display = 'block';
            pageTwo.style.display = 'none';
            pageThree.style.display = 'none';
        }
    });
});

skip.forEach(button => {
    button.addEventListener('click', e => {
        if (window.getComputedStyle(pageThree).display === 'none') {
            pageOne.style.display = 'none';
            pageTwo.style.display = 'none';
            pageThree.style.display = 'block';
        } 
    });
})

