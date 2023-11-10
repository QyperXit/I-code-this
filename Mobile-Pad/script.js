// Add JavaScript code here

const phoneNumberContainer = document.querySelector('.phone-number');
const phonePadElems = document.querySelectorAll('.pad-body-item:not(.svg-item)');
const backBtn = document.querySelector('.back-button');

backBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (phoneNumberContainer.innerText.length > 0) {
        const slicedPhoneNumber = phoneNumberContainer.innerText.slice(0, -1);
        phoneNumberContainer.innerText = slicedPhoneNumber;
    }
});

phonePadElems.forEach((phonePadElem) => {
    phonePadElem.addEventListener('click', (e) => {
        if (phoneNumberContainer.innerText.length < 11) {
            phoneNumberContainer.innerText += phonePadElem.dataset.id;
        }
    });
});

