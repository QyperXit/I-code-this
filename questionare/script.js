document.addEventListener("DOMContentLoaded", function () {
	let container = document.querySelector(".container");
	let qCounter = document.querySelector(".Qcount");
	let card = document.querySelector(".card");
	let selection = document.querySelectorAll(".selection");
	let wrongAnswer = document.querySelector(".wrong-answer");
	let rightAnswer = document.querySelector(".right-answer");

	let skip = document.querySelector(".skip");
	let submit = document.querySelector(".submit");

	let timer = document.querySelector(".counter");

	let answerA = document.querySelector(".aa");
	let answerB = document.querySelector(".bb");
	let answerC = document.querySelector(".cc");

	let remain = 23;
	let Q = 3;
	let rightA = 2;
	let wrongA = 1;

	selection.forEach((item) => {
		item.addEventListener("click", () => {
			// Toggle the class for the clicked item
			item.classList.toggle("active");

			// Untoggle the rest
			selection.forEach((otherItem) => {
				if (otherItem !== item) {
					otherItem.classList.remove("active");
				}
			});
		});
	});

	submit.addEventListener("click", () => {
		console.log("Submit button clicked");
		selection.forEach((item) => {
			if (
				item.classList.contains("active") &&
				item.classList.contains("bb")
			) {
				rightA++;
				load();
				update();
			} else if (
				item.classList.contains("active") &&
				(item.classList.contains("cc") || item.classList.contains("aa"))
			) {
				wrongA++;
				load();
			}
		});
	});

	function load() {
		wrongAnswer.innerHTML = `${wrongA}`;
		rightAnswer.innerHTML = `${rightA}`;
	}

	load();

	function update() {
		card.innerHTML = `	<div class="Qcount">
					<p>Question 4 <i>(22 remaining)</i></p>
				</div>
				<h2>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil architecto itaque qui nobis deserunt.
				</h2>
				<p class="options">Answer options</p>
				<div class="select">
					<div class="selection aa">
						<i class="fa-solid fa-a"></i>
						<p>
							Korem ipsum dolor sit amet consectetur adipisicing.
						</p>
					</div>
					<div class="selection bb">
						<i class="fa-solid fa-b"></i>
						<p>Lorem ipsum lolor sit kin net amet.</p>
					</div>
					<div class="selection cc">
						<i class="fa-solid fa-c"></i>
						<p>Torem ipsum dolor sit amet consectetur.</p>
					</div>
				</div>`;
	}

	skip.addEventListener("click", (e) => {
		update();
	});

	let countdownTime = 24 * 60 + 2;

	// Function to update the countdown timer
	function updateTimer() {
		const minutes = Math.floor(countdownTime / 60);
		const seconds = countdownTime % 60;

		// Create a Font Awesome icon element
		const iconElement = document.createElement("i");
		iconElement.className = "fa-solid fa-stopwatch"; // Replace 'fa-clock' with the desired Font Awesome class

		// Display the timer and icon in the "timer" div
		timer.innerHTML = "";
		timer.appendChild(iconElement);
		timer.innerHTML += `${String(minutes).padStart(2, "0")}:${String(
			seconds
		).padStart(2, "0")}`;

		// Decrement the countdown time
		countdownTime--;

		// Check if the countdown has reached 0
		if (countdownTime < 0) {
			clearInterval(timerInterval); // Stop the countdown when it reaches 0
			timer.innerHTML = "Countdown Finished!";
		}
	}

	// Call the updateTimer function every second
	const timerInterval = setInterval(updateTimer, 1000);
});
