let list = document.querySelectorAll('.dots');
let grocery = document.querySelector('.grocery');

list.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            grocery.style.display = 'none';
        } else {
            list.forEach(item => {
                item.classList.remove('active');
            });
            e.target.classList.add('active');
            grocery.style.display = 'block';
        }
    });
});

