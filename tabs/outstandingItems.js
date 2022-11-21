var outstandingItems = [
  {
    to: "Ethan",
    items: [
      {
        name: "Lamp",
        price: 56.66,
        created: new Date(),
        due: null,
        desc: "lamp bought",
      },
    ],
  },
  {
    to: "Justin",
    items: [
      {
        name: "Paper Towel",
        price: 12.0,
        created: new Date(),
        due: new Date(2022, 11, 30),
        desc: "",
      },
      {
        name: "Broom",
        price: 10.0,
        created: new Date(-50000),
        due: new Date(2023, 1, 1),
        desc: "",
      },
    ],
  },
];

localStorage.setItem("outstandingItems", JSON.stringify(outstandingItems));
