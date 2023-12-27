let submit = document.querySelector('.order');
let input = document.querySelector('input');

submit.addEventListener('click', e => {
    if (input.value !== "") {
        submit.style.background = "grey"
        submit.innerText = "Order Sent!"
        input.value = ""
    }
});

