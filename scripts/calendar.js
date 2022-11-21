const monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const eventsLocation = "../calendarEvents.json";
const tasksLocation = "../tasksEvents.json";

let currMonth = new Date().getMonth();
let currYear = new Date().getFullYear();
let workingMonth = currMonth;
let workingYear = currYear;
let selectedDate = {year:currYear, month:currMonth, day:new Date().getDate() }

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
				result += "<td><button type='button' class='btn btn-light' onClick='selectNewDay(" + "workingYear, workingMonth, " + dayNum + ")'>" + dayNum + "</button></td>";
			}
		}
		result += "</tr>";
	}
	result += "</tbody>";
	element.innerHTML = result;
}

function selectNewDay(year,month,day) {
  selectedDate.year = year;
  selectedDate.month = month;
  selectedDate.day = day;
  init();
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
  fetch(eventsLocation).then((response) => response.json()).then((data) => {
    let element = document.getElementById("dayBreakdownContent");
    let contents = "";
    console.log(data[0].times);
    for (let i = 0; i < 24; i++) {
      contents += "<tr>";
      let dispNum = (12+i)%12;
      dispNum = dispNum == 0 ? 12 : dispNum;
      let dispSuffix = (12/i) > 1 ? "AM" : "PM";
      contents += "<td>" + dispNum + ":00" + dispSuffix + "</td>"
      if (i < data.length) {
        let dateInfo = String(data[i].date).split("-");
        if (dateEqualsSelected(dateInfo) && data[i].times.includes(i)) {
          contents += "<td colspan='2'>" + data[i].name + "</td>"
        } else {
          contents += "<td colspan='2'></td>";
        }
      } else {
        contents += "<td colspan='2'></td>";
      }
      contents += "</tr>"
    }
    element.innerHTML = contents;
  });
}

function parseEvents(year, month) {
  
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
	init();
}

function returnHome() {
	workingMonth = currMonth;
	workingYear = currYear;
  
  selectedDate.year = currYear;
  selectedDate.month = currMonth;
  selectedDate.day = new Date().getDate();

	init();
}

function buildTasksHeader() {
  let element = document.getElementById("tasksHeaderDate");
  element.innerHTML = monthNames[selectedDate.month] + " " + selectedDate.day + ", " + selectedDate.year;
}

function buildTasksBody() {
  fetch(tasksLocation).then((response) => response.json()).then((data) => {
    let element = document.getElementById("tasksBody");
    let contents = "";
    for (let i = 0; i < data.length; i++) {
      let dateInfo = String(data[i].date).split("-");
      if (dateEqualsSelected(dateInfo)) {
        contents += "<tr>";
        contents += "<td>" + data[i]["chore-description"] + "</td>";
        contents += "<td>" + data[i].person + "</td>";
        contents += "</tr>";
      }
    }
    element.innerHTML = contents;
  });
}

function dateEqualsSelected(d) {
  return d[0] == selectedDate.year && d[1] == selectedDate.month+1 && d[2] == selectedDate.day;
}

function init() {
  buildDateDisp();
  buildCalendar();
  buildBreakdownHeader();
  buildBreakdownContent();
  buildTasksHeader();
  buildTasksBody();
}