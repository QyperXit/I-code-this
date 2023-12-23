// Add JavaScript code here
  document.addEventListener('DOMContentLoaded', () => {
      let file = document.querySelector('.icon');
   

    // Corrected the syntax for querying the container
    let container = document.querySelector('.container');

    file.addEventListener('click', e => {
        file.classList.add('hide');
        container.classList.remove('hide')

    });
});
