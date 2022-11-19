$(function () {
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

  let itemsContainer = document.getElementById("cost-items-container");

  // cost_tab_view = document.getElementById();
  // Need to add functionality for getting items for selected tab

  // creating the outer list for each person in list
  for (item of outstandingItems) {
    let divMainItemContainer = document.createElement("div");
    divMainItemContainer.classList.add(
      "container",
      // "border",
      // "border-dark",
      "text-center",
      // "rounded",
      "my-4"
    );
    itemsContainer.appendChild(divMainItemContainer);

    let divMainItemRow = document.createElement("div");
    divMainItemRow.classList.add("row", "border", "border-dark", "rounded");
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
    buttonColumnShowDetails.classList.add(
      "item-button",
      "main-item-show-details"
    );
    buttonColumnShowDetails.setAttribute(
      "id",
      `${outstandingItems.indexOf(item)}`
    );
    buttonColumnShowDetails.type = "button";
    buttonColumnShowDetails.textContent = "Show Details";
    divColumnShowDetails.appendChild(buttonColumnShowDetails);

    //------------------------------------------------------------------
    //Sub item grid----------------------
    //------------------------------------------------------------------
    for (subItem of item["items"]) {
      console.log(subItem);
      //grid for sub-items in the aggregate view
      let subItemContainer = document.createElement("div");
      subItemContainer.classList.add(
        "subItem-container",
        "row",
        "text-center",
        "border-bottom",
        "border-start",
        "border-end",
        "border-dark",
        "rounded",
        "px-2",
        "mx-1",
        "my-0",
        `subItem-${outstandingItems.indexOf(item)}`
      );
      console.log(subItemContainer);
      divMainItemContainer.appendChild(subItemContainer);

      let subItemName = document.createElement("div");
      subItemName.classList.add("col", "my-0", "py-3");
      subItemName.textContent = "Name: " + subItem["name"];
      subItemContainer.append(subItemName);

      // let subItemDue = document.createElement("div");
      // subItemDue.classList.add("col", "my-0", "py-3");
      // subItemDue.textContent = !subItem["due"]
      //   ? "Due: N/A"
      //   : "Due: " +
      //     subItem["due"].getFullYear() +
      //     "-" +
      //     (subItem["due"].getMonth() + 1) +
      //     "-" +
      //     subItem["due"].getDate();
      // subItemContainer.append(subItemDue);

      let subItemPrice = document.createElement("div");
      subItemPrice.classList.add("col", "my-0", "py-3");
      subItemPrice.textContent = "Price: $" + subItem["price"];
      subItemContainer.append(subItemPrice);

      // Pay button for subitems
      let divColumnPay = document.createElement("div");
      divColumnPay.classList.add("col", "my-0", "py-3");
      subItemContainer.appendChild(divColumnPay);

      let buttonColumnPay = document.createElement("button");
      buttonColumnPay.classList.add("item-button");
      buttonColumnPay.type = "button";
      buttonColumnPay.textContent = "Pay All";
      divColumnPay.appendChild(buttonColumnPay);

      // Show Item Button for subitem
      let subItemShowDetails = document.createElement("div");
      subItemShowDetails.classList.add("col", "my-0", "py-3");
      subItemContainer.appendChild(subItemShowDetails);

      let subItemButtonShowDetails = document.createElement("button");
      subItemButtonShowDetails.classList.add(
        "item-button",
        "sub-item-show-details"
      );
      subItemButtonShowDetails.setAttribute(
        "id",
        `${outstandingItems.indexOf(item)} + ${item["items"].indexOf(subItem)}`
      );
      subItemButtonShowDetails.type = "button";
      subItemButtonShowDetails.textContent = "Show Details";
      subItemShowDetails.appendChild(subItemButtonShowDetails);
    }

    $(".subItem-container").hide();
  }

  $(document).on("click", ".main-item-show-details", function (event) {
    // can change padding of the aggregate item depending on if the subitems are shown
    $(`.subItem-${event.target.id}`).toggle();
  });

  // ------------------------------------------------------------------------------------
  // Adding cost funcationality
  addCostButton = document.getElementById("add-cost");

  addCostButton.addEventListener("click", () => {
    //display modal to add something to the selected list
    addCostButton.style.backgroundColor = "blue";

    // adding event listener to show details button
  });
});
