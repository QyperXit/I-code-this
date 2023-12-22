document.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.container');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('middle');
            
            // Select the button inside the hovered container
            let button = card.querySelector('button');

            // Add the 'active' class to the button
            button.classList.add('active');
        });

        card.addEventListener('mouseout', () => {
            card.classList.remove('middle');
            
            // Select the button inside the container
            let button = card.querySelector('button');

            // Remove the 'active' class from the button
            button.classList.remove('active');
        });
    });
});

