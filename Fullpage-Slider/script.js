let slides = document.querySelectorAll(".slide");
let btns = document.querySelectorAll(".btn");
let prevBtn = document.querySelector(".prev-btn"); // Add a class to your left chevron button
let nextBtn = document.querySelector(".next-btn"); // Add a class to your right chevron button
let currentSlide = 0; // Initialize with 0 as the first slide

// Initialize the first slide and button as active
slides[currentSlide].classList.add("active");
btns[currentSlide].classList.add("active");

let manualNav = function (manual) {
	slides[currentSlide].classList.remove("active"); // Remove active class from the current slide
	btns[currentSlide].classList.remove("active"); // Remove active class from the current button
	currentSlide = manual; // Update the current slide index
	slides[currentSlide].classList.add("active"); // Add active class to the new current slide
	btns[currentSlide].classList.add("active"); // Add active class to the new current button
};

// Event listener for the previous slide button (left chevron)
prevBtn.addEventListener("click", () => {
	let newIndex = currentSlide - 1;
	if (newIndex < 0) {
		newIndex = slides.length - 1; // Wrap around to the last slide
	}
	manualNav(newIndex);
});

// Event listener for the next slide button (right chevron)
nextBtn.addEventListener("click", () => {
	let newIndex = currentSlide + 1;
	if (newIndex >= slides.length) {
		newIndex = 0; // Wrap around to the first slide
	}
	manualNav(newIndex);
});

// // Add JavaScript code here
// let slides = document.querySelectorAll('.slide');
// let btns = document.querySelectorAll('.btn');
// let currentSlide = 0; // Initialize with 0 as the first slide

// // Initialize the first slide and button as active
// slides[currentSlide].classList.add('active');
// btns[currentSlide].classList.add('active');

// let manualNav = function (manual) {
//     slides[currentSlide].classList.remove('active'); // Remove active class from the current slide
//     btns[currentSlide].classList.remove('active');   // Remove active class from the current button
//     currentSlide = manual; // Update the current slide index
//     slides[currentSlide].classList.add('active');    // Add active class to the new current slide
//     btns[currentSlide].classList.add('active');      // Add active class to the new current button
// }

// btns.forEach((btn, i) => {
//     btn.addEventListener('click', () => {
//         manualNav(i);
//     });
// });
