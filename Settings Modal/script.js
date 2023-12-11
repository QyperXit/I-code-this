// Add JavaScript code here
document.querySelectorAll('.move').forEach((onOff) => {
    onOff.addEventListener('click', () => {
        let switchOn = onOff.querySelector('.fa-circle');
        let computedStyles = window.getComputedStyle(switchOn);

        if (computedStyles.getPropertyValue('padding-left') === "32px" || computedStyles.getPropertyValue('padding-left') === "2rem") {
            switchOn.style.paddingLeft = "0px";
            switchOn.style.paddingRight = "2rem";
            switchOn.style.color = "grey"
        } else {
            switchOn.style.paddingLeft = "2rem";
            switchOn.style.paddingRight = "0px";
            switchOn.style.color = "#874989"
        }
    });
});




