// This line adds an event listener that listens for the "DOMContentLoaded" event,
// which occurs when the initial HTML document has been completely loaded and parsed.
document.addEventListener('DOMContentLoaded', () => {
    // Select the element with the class 'progress-done' and store it in the 'progress' variable.
    let progress = document.querySelector('.progress-done');

    // Select the 'button' element and store it in the 'continueButton' variable.
    let continueButton = document.querySelector('button');

    // Define a constant 'initialProgress' and set it to 79, representing the starting progress.
    const initialProgress = 79;

    // Define a constant 'maxProgress' and set it to 100, representing the maximum progress.
    const maxProgress = 100;

    // This function changes the width and text of the progress bar.
    // It takes 'finalValue' as a parameter and updates the progress accordingly.
    function changeWidth(finalValue) {
        progress.style.width = `${finalValue}%`; // Set the width of the progress bar.
        progress.innerText = `${Math.ceil(finalValue)}%`; // Set the text to show the progress percentage.
    }

    // Set the initial progress to 79% using the 'changeWidth' function.
    changeWidth(initialProgress);

    // This part listens for a click on the "Continue" button and updates the progress to 100%.
    continueButton.addEventListener('click', () => {
        // When "Continue" is clicked, set progress to 100% using the 'changeWidth' function.
        changeWidth(maxProgress);
    });
});

