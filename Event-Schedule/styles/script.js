let monthBooking = document.querySelectorAll(".months");
let container = document.querySelector(".section");

// Define both sets of available tickets
let availTickets = [
	{
		month: "NOV 26",
		mapL: "Seattle, WA, US",
		loc: "KeyArena",
		time: "19:30",
		ticketID: 3,
	},
	{
		month: "NOV 28",
		mapL: "San Francisco, CA, US",
		loc: "Chase Center",
		time: "21:00",
		ticketID: 4,
	},
	{
		month: "NOV 29",
		mapL: "Los Angeles, CA, US",
		loc: "Staples Center",
		time: "20:30",
		ticketID: 5,
	},
];

let availTickets2 = [
	{
		month: "DEC 20",
		mapL: "Dallas, TX, US",
		loc: "Airlines Center",
		time: "19:15",
		ticketID: 7,
	},
	{
		month: "DEC 25",
		mapL: "New York, NY, US",
		loc: "MS Garden",
		time: "22:00",
		ticketID: 8,
	},
	{
		month: "DEC 15",
		mapL: "Phoenix, AZ, US",
		loc: "Footprint Center",
		time: "18:45",
		ticketID: 6,
	},
];

// Initial load of tickets
poptickets(availTickets);

// Add event listeners to monthBooking items
monthBooking.forEach((item) => {
	item.addEventListener("click", (e) => {
		// Remove the 'selected' class from all other items
		monthBooking.forEach((otherItem) => {
			if (otherItem !== item) {
				otherItem.classList.remove("selected");
				item.style.fontWeight = "--font-weight-3";
			}
		});

		if (!item.classList.contains("selected")) {
			item.classList.add("selected");
			item.style.fontWeight = "--font-weight-6";
		} else {
			item.classList.remove("selected");
			item.style.fontWeight = "";
		}

		// Load the appropriate set of tickets based on the clicked tab
		if (item.textContent.includes("December")) {
			poptickets(availTickets2);
		} else {
			poptickets(availTickets);
		}
	});
});

function poptickets(tickets) {
	container.innerHTML = ""; // Clear previous content
	tickets.forEach((ticket) => {
		container.innerHTML += `
            <div class="tick">
                <div class="left">
                    <h3>${ticket.month}</h3>
                    <span>${ticket.mapL}</span>
                    <div class="location">
                        <div class="map">
                            <p>
                                <i class="fa-solid fa-location-dot"></i>${ticket.loc}
                            </p>
                        </div>
                        <div class="time">
                            <i class="fa-solid fa-clock"></i>${ticket.time}
                        </div>
                    </div>
                </div>
                <button class="tickets">
                    <i class="fa-solid fa-ticket"></i>Buy Ticket
                </button>
            </div>`;
	});

	// Select .tickets elements after they are added to the DOM
	let ticket = document.querySelectorAll(".tickets");

	ticket.forEach((item) => {
		item.addEventListener("click", (e) => {
			if (!item.classList.contains("sold")) {
				item.classList.add("sold");
				item.innerHTML = "Sold Out";
			} else {
				item.classList.remove("sold");
				item.innerHTML = "Buy Ticket";
			}
		});
	});
}
