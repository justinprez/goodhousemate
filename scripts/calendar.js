const monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
	let numRows = startDay + numDays > 35 ? 6 : 5;
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