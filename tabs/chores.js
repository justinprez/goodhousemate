console.log(localStorage.getItem('chores'))
chorelist = JSON.parse(localStorage.getItem('chores'))


const table = document.getElementById('chore-table');
for(const obj of chorelist){
  const row = document.createElement('tr');
  for(const val of Object.values(obj)){
    const col = document.createElement('td');
    col.textContent = val;
    if (typeof(val) == "boolean") {
        var chk = document.createElement('input');
        chk.setAttribute('type', 'checkbox');
        chk.checked = val;
        row.appendChild(chk);
    }
    else {
        row.appendChild(col);
    }
  }
  table.appendChild(row);
}



var btn = document.getElementById('btnsubmit');
btn.addEventListener('click', func);


function func() {
    chore = document.getElementById("chore-description");
    room = document.getElementById("select-room");
    person = document.getElementById("select-person")
    date = document.getElementById("select-date");
    
    if (chore.checkValidity() && room.checkValidity() && person.checkValidity() && date.checkValidity()) {
        new_chore = {
            "completed": false,
            "chore-description": document.getElementById("chore-description").value,
            "priority": document.querySelector('input[name="btnradio"]:checked').value,
            "room": document.getElementById("select-room").value,
            "person": document.getElementById("select-person").value,
            "date": document.getElementById("select-date").value,
        };

        chorelist.push(new_chore);

        // console.log(document.getElementById("chore-description").value);
        // console.log(document.querySelector('input[name="btnradio"]:checked').value);
        // console.log(document.getElementById("select-room").value);
        // console.log(document.getElementById("select-person").value);
        // console.log(document.getElementById("select-date").value);
        
        // console.log(chorelist)
        localStorage.setItem("chores",JSON.stringify(chorelist))
        console.log(localStorage.getItem('chores'))
    }

}

