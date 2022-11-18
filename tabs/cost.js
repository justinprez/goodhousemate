let outstandingItems = [
  {
    to: "Namit",
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
        due: new Date(100000),
        desc: "",
      },
      {
        name: "Broom",
        price: 10.0,
        created: new Date(-50000),
        due: new Date(1000000),
        desc: "",
      },
    ],
  },
];

let itemsContainer = document.getElementById("cost-items-container");

// cost_tab_view = document.getElementById();
// Need to add functionality for getting items for selected tab

// creating the outer list for each person in list
for (item of outstandingItems) {
  let divMainItemContainer = document.createElement("div");
  divMainItemContainer.classList.add(
    "container",
    "border",
    "border-black",
    "text-center",
    "rounded",
    "my-4"
  );
  itemsContainer.appendChild(divMainItemContainer);

  let divMainItemRow = document.createElement("div");
  divMainItemRow.classList.add("row");
  divMainItemContainer.appendChild(divMainItemRow);

  let divColumnName = document.createElement("div");
  divColumnName.classList.add("col");
  divColumnName.textContent = "To: " + item["to"];
  divMainItemRow.append(divColumnName);

  let divColumnNumItems = document.createElement("div");
  divColumnNumItems.classList.add("col");
  divColumnNumItems.textContent = "Items: " + item["items"].length;
  divMainItemRow.appendChild(divColumnNumItems);

  let divColumnPriceTotal = document.createElement("div");
  divColumnPriceTotal.classList.add("col");
  divColumnPriceTotal.textContent =
    "Total Price: $" +
    item["items"]
      .reduce((partialSum, a) => partialSum + a["price"], 0)
      .toFixed(2);
  divMainItemRow.appendChild(divColumnPriceTotal);

  //   buttons
  let divColumnPayAll = document.createElement("div");
  divColumnPayAll.classList.add("col");
  divMainItemRow.appendChild(divColumnPayAll);

  let buttonColumnPayAll = document.createElement("button");
  buttonColumnPayAll.classList.add("item-button");
  buttonColumnPayAll.type = "button";
  buttonColumnPayAll.textContent = "Pay All";
  divColumnPayAll.appendChild(buttonColumnPayAll);

  //   buttons
  let divColumnShowDetails = document.createElement("div");
  divColumnShowDetails.classList.add("col");
  divMainItemRow.appendChild(divColumnShowDetails);

  let buttonColumnShowDetails = document.createElement("button");
  buttonColumnShowDetails.classList.add("item-button");
  buttonColumnShowDetails.type = "button";
  buttonColumnShowDetails.textContent = "Show Details";
  divColumnShowDetails.appendChild(buttonColumnShowDetails);
}

// add cost
addCostButton = document.getElementById("add-cost");

addCostButton.addEventListener("click", () => {
  //display modal to add something to the selected list
  addCostButton.style.backgroundColor = "blue";
});
