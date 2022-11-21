var owedItems = [
  {
    from: "Meghan",
    items: [
      {
        name: "Toilet Paper",
        price: 10.0,
        created: new Date(),
        due: null,
        desc: "paper towels",
      },
    ],
  },
  {
    from: "Janek",
    items: [
      {
        name: "Groceries",
        price: 12.0,
        created: new Date(),
        due: new Date(2022, 11, 30),
        desc: "",
      },
      {
        name: "Garbage Bags",
        price: 4.5,
        created: new Date(-50000),
        due: new Date(2023, 1, 1),
        desc: "",
      },
    ],
  },
];

localStorage.setItem("owedItems", JSON.stringify(owedItems));
