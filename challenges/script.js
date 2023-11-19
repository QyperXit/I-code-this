// Add JavaScript code here

let now = document.querySelector('.nowV')
let login = document.querySelector('.container-1')
let mainpage = document.querySelector('.container')

now.addEventListener('click', showNextPage)

function showNextPage() {
    // Hide the login page
    login.style.display = 'none';
    login.style.transform = 'scale(0)';

    // Show the next page
    mainpage.style.display = 'flex';
    login.style.transform = 'scale(1)';
}



