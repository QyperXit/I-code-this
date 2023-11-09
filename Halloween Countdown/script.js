// Add JavaScript code here

const day = document.getElementById("day");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const takeBtn = document.getElementById("take");

function decrement() {
	setInterval(function () {
		if (Number(sec.innerHTML) > 0) {
			sec.innerHTML -= 1;
		} else {
			sec.innerHTML = "59";
			if (Number(min.innerHTML) > 0) {
				min.innerHTML -= 1;
			} else {
				min.innerHTML = "59";
				if (Number(hour.innerHTML) > 0) {
					hour.innerHTML -= 1;
				} else {
					hour.innerHTML = 23;
					if (Number(day.innerHTML) > 0) {
						day.innerHTML -= 1;
					} else {
						day.innerHTML = "0";
					}
				}
			}
		}
	}, 1000);
}

decrement();

takeBtn.addEventListener("click", function () {
	alert("You've been Placed in a Queue...");
});
