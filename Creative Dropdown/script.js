// Add JavaScript code here

let select = document.querySelector(".mySelect");
let pageOne = document.querySelector(".pageIntro");
let pageTwo = document.querySelector(".pageDown");
let arrow = document.querySelector(".fa-chevron-down");

let create = document.querySelector(".create");

select.addEventListener("click", (e) => {
	if (arrow.classList.contains("fa-chevron-down")) {
		arrow.classList.remove("fa-chevron-down");
		arrow.classList.add("fa-chevron-up");
		pageOne.classList.remove("hide");
	} else {
		arrow.classList.remove("fa-chevron-up");
		arrow.classList.add("fa-chevron-down");
		pageOne.classList.add("hide");
		pageTwo.classList.add("hide");
	}
});

create.addEventListener("click", (e) => {
	pageOne.classList.add("hide");
	pageTwo.classList.remove("hide");
});
