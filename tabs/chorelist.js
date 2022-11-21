var currDateString = new Date();
currDateString =
  currDateString.getFullYear() +
  "-" +
  (currDateString.getMonth() + 1) +
  "-" +
  currDateString.getDate();

var chorelist = [
  {
    completed: true,
    "chore-description": "Vacuum floors",
    priority: "High",
    room: "Kitchen",
    person: "Namit",
    next: "Janek",
    date: currDateString,
  },
  {
    completed: false,
    "chore-description": "Clean shower",
    priority: "Medium",
    room: "Washroom",
    person: "Justin",
    next: "N/A",
    date: currDateString,
  },
];

localStorage.setItem("chores", JSON.stringify(chorelist));
