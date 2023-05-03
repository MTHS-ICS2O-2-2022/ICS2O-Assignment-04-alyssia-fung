"use strict"

/**
 * This function uses a selection component from https://github.com/CreativeIT/getmdl-select
 */

function calculateThePriceOfTheDrink() {
  // We need to declare variables to store the price, size and tax of the selected drink
  let price
  let size = document.getElementById("select-size").value
  let drink = document.getElementById("select-drink").value
  const TAX = 0.13

  // Calculate the price of the selected drink based on size and tax
  switch (drink) {
    case "Strawberries & Creme Frappuccino Grande":
      price = 4.45
      break
    case "Strawberries & Creme Frappuccino Venti":
      price = 4.95
      break
    case "Pumpkin Spice Latte Grand":
      price = 4.95
      break
    case "Caramel Macchiato Venti":
      price = 4.75
      break
    default:
      price = 0
      break
  }

  // Add the cost of the size to the drink and add the tax equal price
  switch (size) {
    case "Grande":
      price += 1
      break
    case "Venti":
      price += 1.5
      break
    default:
      break
  }

  let subTotal = price + price
  const taxPaid = subTotal * TAX
  const total = subTotal + taxPaid
}

// output
document.getElementById("answer").innerHTML =
  "The subtotal is: $" +
  subTotal.toFixed(2) +
  "<br />The taxPaid is: $" +
  taxPaid.toFixed(2) +
  "<br />The total is: $" +
  total.toFixed(2)
