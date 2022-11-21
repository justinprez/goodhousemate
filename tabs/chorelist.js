var chorelist = [
    {
       "completed": true,
       "chore-description": "Vacuum floors",
       "priority": "High",
       "room": "Kitchen",
       "person": "Namit",
       "date": "2022-11-18",
    },
    {
        "completed": true,
        "chore-description": "Clean shower",
        "priority": "Medium",
        "room": "Washroom",
        "person": "Justin",
        "date": "2022-11-20",    
     },
];

localStorage.setItem("chores",JSON.stringify(chorelist))