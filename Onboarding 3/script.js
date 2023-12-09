// Add JavaScript code here


let skip = document.querySelectorAll('.skip');
let containOne = document.querySelector('.one');
let containTwo = document.querySelector('.two');
let containThree = document.querySelector('.three');
let back = document.querySelector('.get')

skip.forEach((element) => {
  element.addEventListener("click", () => {
      if (containTwo.classList.contains('hide') && containThree.classList.contains('hide')) {
        containOne.classList.add('hide')
        containTwo.classList.remove('hide');

      } else if (containOne.classList.contains('hide') && containThree.classList.contains('hide')) {
          containTwo.classList.add('hide')
          containThree.classList.remove('hide');
        
      } 
  });
});


