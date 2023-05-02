"use strict"

/**
 * This function uses a selection component from https://github.com/CreativeIT/getmdl-select
 */

function priceOfStarbucksDrink() {
  // We need to declare variables to store the price, size and tax of the selected drink
  let price = 0
  let size = document.getElementById("size-select").value
  let drink = document.getElementById("drink-select").value
  let tax = 0.13 // assuming a tax rate of 13%

  // Calculate the price of the selected drink based on size and type
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
  }

  // Add the cost of the size to the drink price
  switch (size) {
    case "Tall":
      price += 0.5
      break
    case "Grande":
      price += 1
      break
    case "Venti":
      price += 1.5
      break
    default:
      break
  }

  // Add tax to the price
  price = tax + subtotal

  // Output the price of the selected drink
  document.getElementById("answer").innerHTML =
    "The price of " + size + "tax" + drink + " is $" + price.toFixed(2)
}

function myButtonClicked() {
  // Call the function to calculate and output the price of the selected drink
  priceOfStarbucksDrink()
}
