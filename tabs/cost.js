$(function () {
  outstandingItems = JSON.parse(localStorage.getItem("outstandingItems"));

  owedItems = JSON.parse(localStorage.getItem("owedItems"));

  $(".add-expense-screen").hide();

  let mainItemsContainer = document.getElementById("cost-items-container");
  let itemsContainer = document.createElement("div");
  itemsContainer.classList.add("outstanding-container");
  mainItemsContainer.appendChild(itemsContainer);

  // creating the outer list for each person in list
  $("#outstanding-tab").click(() => {
    $(".owed-container").hide();
    $(".outstanding-container").show();
  });

  for (item of outstandingItems) {
    let divMainItemContainer = document.createElement("div");
    divMainItemContainer.classList.add("container", "text-center", "my-4");
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
      "main-item-show-details-outstanding"
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
        `subItemOutstanding-${outstandingItems.indexOf(item)}`
      );
      divMainItemContainer.appendChild(subItemContainer);

      let subItemName = document.createElement("div");
      subItemName.classList.add("col", "my-0", "py-3");
      subItemName.textContent = "Name: " + subItem["name"];
      subItemContainer.append(subItemName);

      let subItemPrice = document.createElement("div");
      subItemPrice.classList.add("col", "my-0", "py-3");
      subItemPrice.textContent = "Price: $" + subItem["price"].toFixed(2);
      subItemContainer.append(subItemPrice);

      // Pay button for subitems
      let divColumnPay = document.createElement("div");
      divColumnPay.classList.add("col", "my-0", "py-3");
      subItemContainer.appendChild(divColumnPay);

      let buttonColumnPay = document.createElement("button");
      buttonColumnPay.classList.add("item-button");
      buttonColumnPay.type = "button";
      buttonColumnPay.textContent = "Pay";
      divColumnPay.appendChild(buttonColumnPay);

      // Show Item Button for subitem
      let subItemShowDetails = document.createElement("div");
      subItemShowDetails.classList.add("col", "my-0", "py-3");
      subItemContainer.appendChild(subItemShowDetails);

      let subItemButtonShowDetails = document.createElement("button");
      subItemButtonShowDetails.classList.add(
        "item-button",
        "sub-item-show-details-outstanding"
      );
      subItemButtonShowDetails.setAttribute(
        "id",
        `${outstandingItems.indexOf(item)}-${item["items"].indexOf(subItem)}`
      );
      subItemButtonShowDetails.type = "button";
      subItemButtonShowDetails.textContent = "Show Details";
      subItemShowDetails.appendChild(subItemButtonShowDetails);

      //details for subitems
      let subItemDetailsContainer = document.createElement("div");
      subItemDetailsContainer.classList.add(
        "subItemDetailsOutstanding-container",
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
        `subItemDetailsOutstanding-` +
          `${outstandingItems.indexOf(item)}-${item["items"].indexOf(subItem)}`
      );
      divMainItemContainer.appendChild(subItemDetailsContainer);

      let subItemDetails_1_Container = document.createElement("div");
      subItemDetails_1_Container.classList.add(
        "row",
        "px-2",
        "mx-1",
        "my-0",
        "py-0",
        "border-bottom"
      );
      subItemDetailsContainer.appendChild(subItemDetails_1_Container);

      // created date column
      let createdDate = new Date(subItem["created"]);
      let subItemCreated = document.createElement("div");
      subItemCreated.classList.add("col", "my-0", "py-3");
      subItemCreated.textContent = !createdDate
        ? "Created: N/A"
        : "Created: " +
          createdDate.getFullYear() +
          "-" +
          (createdDate.getMonth() + 1) +
          "-" +
          createdDate.getDate();
      subItemDetails_1_Container.append(subItemCreated);

      // due date column
      let dueDate = subItem["due"] ? new Date(subItem["due"]) : null;
      let subItemDue = document.createElement("div");
      subItemDue.classList.add("col", "my-0", "py-3");
      subItemDue.textContent = !dueDate
        ? "Due: N/A"
        : "Due: " +
          dueDate.getFullYear() +
          "-" +
          (dueDate.getMonth() + 1) +
          "-" +
          dueDate.getDate();
      subItemDetails_1_Container.append(subItemDue);

      // description column
      let subItemDetails_2_Container = document.createElement("div");
      subItemDetails_2_Container.classList.add(
        "row",
        "px-2",
        "mx-1",
        "my-0",
        "py-0"
      );
      subItemDetailsContainer.appendChild(subItemDetails_2_Container);

      let description = subItem["desc"];
      let subItemDesc = document.createElement("div");
      subItemDesc.classList.add("col", "my-0", "py-3");
      subItemDesc.textContent = !description
        ? "Description: N/A"
        : "Description: " + description;
      subItemDetails_2_Container.append(subItemDesc);
    }

    $(".subItem-container").hide();
    $(".subItemDetailsOutstanding-container").hide();
  }

  //subitems once show details on aggregate item is clicked
  $(document).on(
    "click",
    ".main-item-show-details-outstanding",
    function (event) {
      $(`.subItemOutstanding-${event.target.id}`).toggle();
      $(".subItemDetailsOutstanding-container").hide();
    }
  );

  // details of subitems
  $(document).on(
    "click",
    ".sub-item-show-details-outstanding",
    function (event) {
      $(`.subItemDetailsOutstanding-${event.target.id}`).toggle();
    }
  );

  let itemsContainerOwed = document.createElement("div");
  itemsContainerOwed.classList.add("owed-container");
  mainItemsContainer.appendChild(itemsContainerOwed);

  // ------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------
  // Creating a list for the owed tab
  // ------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------
  $("#owed-tab").click(() => {
    $(".owed-container").show();
    $(".outstanding-container").hide();
  });

  for (item of owedItems) {
    let divMainItemContainer = document.createElement("div");
    divMainItemContainer.classList.add("container", "text-center", "my-4");
    itemsContainerOwed.appendChild(divMainItemContainer);

    let divMainItemRow = document.createElement("div");
    divMainItemRow.classList.add("row", "border", "border-dark", "rounded");
    divMainItemContainer.appendChild(divMainItemRow);

    let divColumnName = document.createElement("div");
    divColumnName.classList.add("col");
    divColumnName.textContent = "From: " + item["from"];
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
    buttonColumnPayAll.textContent = "Remind All";
    divColumnPayAll.appendChild(buttonColumnPayAll);

    //   buttons
    let divColumnShowDetails = document.createElement("div");
    divColumnShowDetails.classList.add("col");
    divMainItemRow.appendChild(divColumnShowDetails);

    let buttonColumnShowDetails = document.createElement("button");
    buttonColumnShowDetails.classList.add(
      "item-button",
      "main-item-show-details-owed"
    );
    buttonColumnShowDetails.setAttribute("id", `${owedItems.indexOf(item)}`);
    buttonColumnShowDetails.type = "button";
    buttonColumnShowDetails.textContent = "Show Details";
    divColumnShowDetails.appendChild(buttonColumnShowDetails);

    //------------------------------------------------------------------
    //Sub item grid----------------------
    //------------------------------------------------------------------
    for (subItem of item["items"]) {
      //grid for sub-items in the aggregate view
      let subItemContainer = document.createElement("div");
      subItemContainer.classList.add(
        "subItemOwed-container",
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
        `subItemOwed-${owedItems.indexOf(item)}`
      );
      divMainItemContainer.appendChild(subItemContainer);

      let subItemName = document.createElement("div");
      subItemName.classList.add("col", "my-0", "py-3");
      subItemName.textContent = "Name: " + subItem["name"];
      subItemContainer.append(subItemName);

      let subItemPrice = document.createElement("div");
      subItemPrice.classList.add("col", "my-0", "py-3");
      subItemPrice.textContent = "Price: $" + subItem["price"].toFixed(2);
      subItemContainer.append(subItemPrice);

      // Pay button for subitems
      let divColumnPay = document.createElement("div");
      divColumnPay.classList.add("col", "my-0", "py-3");
      subItemContainer.appendChild(divColumnPay);

      let buttonColumnPay = document.createElement("button");
      buttonColumnPay.classList.add("item-button");
      buttonColumnPay.type = "button";
      buttonColumnPay.textContent = "Remind";
      divColumnPay.appendChild(buttonColumnPay);

      // Show Item Button for subitem
      let subItemShowDetails = document.createElement("div");
      subItemShowDetails.classList.add("col", "my-0", "py-3");
      subItemContainer.appendChild(subItemShowDetails);

      let subItemButtonShowDetails = document.createElement("button");
      subItemButtonShowDetails.classList.add(
        "item-button",
        "sub-item-show-details-owed"
      );
      subItemButtonShowDetails.setAttribute(
        "id",
        `${owedItems.indexOf(item)}-${item["items"].indexOf(subItem)}`
      );
      subItemButtonShowDetails.type = "button";
      subItemButtonShowDetails.textContent = "Show Details";
      subItemShowDetails.appendChild(subItemButtonShowDetails);

      //details for subitems
      let subItemDetailsContainer = document.createElement("div");
      subItemDetailsContainer.classList.add(
        "subItemDetailsOwed-container",
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
        `subItemDetailsOwed-` +
          `${owedItems.indexOf(item)}-${item["items"].indexOf(subItem)}`
      );
      divMainItemContainer.appendChild(subItemDetailsContainer);

      let subItemDetails_1_Container = document.createElement("div");
      subItemDetails_1_Container.classList.add(
        "row",
        "px-2",
        "mx-1",
        "my-0",
        "py-0",
        "border-bottom"
      );
      subItemDetailsContainer.appendChild(subItemDetails_1_Container);

      // created date column
      let createdDate = new Date(subItem["created"]);
      let subItemCreated = document.createElement("div");
      subItemCreated.classList.add("col", "my-0", "py-3");
      subItemCreated.textContent = !createdDate
        ? "Created: N/A"
        : "Created: " +
          createdDate.getFullYear() +
          "-" +
          (createdDate.getMonth() + 1) +
          "-" +
          createdDate.getDate();
      subItemDetails_1_Container.append(subItemCreated);

      // due date column
      let dueDate = subItem["due"] ? new Date(subItem["due"]) : null;
      let subItemDue = document.createElement("div");
      subItemDue.classList.add("col", "my-0", "py-3");
      subItemDue.textContent = !dueDate
        ? "Due: N/A"
        : "Due: " +
          dueDate.getFullYear() +
          "-" +
          (dueDate.getMonth() + 1) +
          "-" +
          dueDate.getDate();
      subItemDetails_1_Container.append(subItemDue);

      // description column
      let subItemDetails_2_Container = document.createElement("div");
      subItemDetails_2_Container.classList.add(
        "row",
        "px-2",
        "mx-1",
        "my-0",
        "py-0"
      );
      subItemDetailsContainer.appendChild(subItemDetails_2_Container);

      let description = subItem["desc"];
      let subItemDesc = document.createElement("div");
      subItemDesc.classList.add("col", "my-0", "py-3");
      subItemDesc.textContent = !description
        ? "Description: N/A"
        : "Description: " + description;
      subItemDetails_2_Container.append(subItemDesc);
    }

    $(".subItemOwed-container").hide();
    $(".subItemDetailsOwed-container").hide();
  }

  //subitems once show details on aggregate item is clicked
  $(document).on("click", ".main-item-show-details-owed", function (event) {
    $(`.subItemOwed-${event.target.id}`).toggle();
    $(".subItemDetailsOwed-container").hide();
  });

  // details of subitems
  $(document).on("click", ".sub-item-show-details-owed", function (event) {
    $(`.subItemDetailsOwed-${event.target.id}`).toggle();
  });

  $(".owed-container").hide();
  $(".outstanding-container").show();

  // ------------------------------------------------------------------------------------
  // Adding cost funcationality
  addCostButton = document.getElementById("add-cost");

  addCostButton.addEventListener("click", () => {
    //display modal to add something to the selected list
    if (addCostButton.textContent === "+") {
      addCostButton.textContent = "X";
    } else {
      addCostButton.textContent = "+";
    }
    $(".add-expense-screen").toggle();
    $("#theform").trigger("reset");
  });

  document.getElementById("theform").onsubmit = function () {
    owedItems = JSON.parse(localStorage.getItem("owedItems"));
    title = $("#title").val();
    amount = $("#amount").val();
    split_with = $("#split-with option:selected").text();
    split_with = split_with.split(/(?=[A-Z])/);
    // need to get a list of names with ppl
    split_type = $("input[name=split_type]:checked", "#theform").val();
    // need to split the cost for the ppl selected

    if (split_type === "evenly") {
      amount = amount / split_with.length;
    }

    description = $("#description").val() ? $("#description").val() : null;
    due_date = $("#due-date").val();

    preferred_payment = $(
      "input[name=preferred-payment]:checked",
      "#theform"
    ).val();

    item_to_add = {
      name: title,
      price: amount,
      created: new Date(),
      due: due_date,
      desc: description,
    };

    for (person of split_with) {
      let person_added = false;
      for (owedPerson of owedItems) {
        if (person === owedPerson["from"]) {
          owedPerson["items"] = owedPerson["items"].concat(item_to_add);
          person_added = true;
        }
      }
      if (!person_added) {
        owedItems = owedItems.concat({ from: person, items: [item_to_add] });
      }
    }

    addCostButton.textContent = "+";
    $(".add-expense-screen").hide();

    localStorage.setItem("owedItems", JSON.stringify(owedItems));
    location.reload();
    return false;
  };

  let dateToday = new Date();
  let month = dateToday.getMonth() + 1;
  let day = dateToday.getDate();
  let year = dateToday.getFullYear();

  let minDate = year + "-" + month + "-" + day;

  $("#due-date").attr("min", minDate);
});
