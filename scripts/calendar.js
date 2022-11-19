const monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayEvents = [
	"",
	"",
	"",
	"",
	"",
	"",
	"<p>Meghan - Practice</p>",
	"<p>Meghan - Practice</p>",
	"<p style=>Ethan - Class</p>",
	"<p>Ethan - Class</p><p>Justin - Class</p>",
	"<p>Ethan - Class</p>",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	""
];

let currMonth = new Date().getMonth();
let currYear = new Date().getFullYear();
let workingMonth = currMonth;
let workingYear = currYear;
let selectedDate = {year:currYear, month:currMonth, day:new Date().getDate() }
console.log(selectedDate);

function getDaysInMonth(year,month) {
	month += 1;
	if (month == 12) {
		month = 0;
		year += 1;
	} else if (month == -1) {
		month = 11;
		yearh -= 1;
}

return new Date(year,month,0).getDate();
}

function buildCalendar() {
	let element = document.getElementById("calendarContent");
	let startDay = new Date(workingYear,workingMonth, 1).getDay();
	let numDays = getDaysInMonth(workingYear, workingMonth);
	let result = "<tbody>";
	let numRows = (startDay + numDays)/7;
	for (let i = 0; i < numRows; i++) {
		result += "<tr>";
		for (let j = 1; j < 7+1; j++) {
			let dayNum = j+i*7 - startDay;
			if (dayNum <= 0 || dayNum > numDays) {
				result += '<td class="table-secondary"></td>';
			} else {
				result += "<td>" + dayNum + "</td>";
			}
		}
		result += "</tr>";
	}
	result += "</tbody>";
	element.innerHTML = result;
}

function buildDateDisp() {
	let element = document.getElementById("currDateDisp");
	element.innerHTML = "<h4>" + monthNames[workingMonth] + " " + workingYear + "</h4>";
}

function buildBreakdownHeader() {
	let element = document.getElementById("dayBreakdownHeader");
	element.innerHTML = monthNames[selectedDate.month] + " " + selectedDate.day + ", " + selectedDate.year;
}

function buildBreakdownContent() {
	let element = document.getElementById("dayBreakdownContent");
	let contents = "";
	for (let i = 0; i < 24; i++) {
		contents += "<tr>";
		let dispNum = (12+i)%12;
		dispNum = dispNum == 0 ? 12 : dispNum;
		let dispSuffix = (12/i) > 1 ? "AM" : "PM";
		contents += "<td>" + dispNum + ":00" + dispSuffix + "</td>"
		contents += "<td colspan='2'>" + dayEvents[i] + "</td>"
		contents += "</tr>"
	}
	element.innerHTML = contents;
}

function handleUpdate(val) {
	workingMonth += val;
	if (workingMonth < 0) {
		workingMonth = 11;
		workingYear -= 1;
	} else if (workingMonth > 11) {
		workingMonth = 0;
		workingYear += 1;
	}
	buildDateDisp();
	buildCalendar();
}

function returnHome() {
	workingMonth = currMonth;
	workingYear = currYear;

	buildDateDisp();
	buildCalendar();
}