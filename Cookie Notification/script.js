let closeBtns = document.querySelector('.close_2');
let closeBtn = document.querySelector('.close');
let btns = document.querySelectorAll('.x');
let headTop = document.querySelector('.top');
let container = document.querySelector('.container');

closeBtns.addEventListener('click', () => {
  console.log('close_2 clicked');
  headTop.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  console.log('close clicked');
  container.style.display = 'none';
});

btns.forEach(item => {
  item.addEventListener('click', () => {
    console.log('x clicked');
    container.style.display = 'none';
  });
});

