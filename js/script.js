"use strict"

/**
 * This function uses a selection component from https://github.com/CreativeIT/getmdl-select
 */

function calculateThePriceOfTheDrink() {
  // We need to declare variables to store the price, size and tax of the selected drink
  let price
  let subtotal
  let tax
  let total
  let show
  let drink = document.getElementById("select-drink").value
  const TAXRATE = 0.13

  // Calculate the price of the selected drink based on size and tax

  // The use of Switch/case statement
  // https://www.w3schools.com/js/js_switch.asp#gsc.tab=0
  switch (drink) {
    case "Strawberries and Creme Frappuccino Grande":
      price = 4.45
      break
    case "Strawberries and Creme Frappuccino Venti":
      price = 4.95
      break
    case "Pumpkin Spice Latte Grande":
      price = 4.95
      break
    case "Caramel Macchiato Venti":
      price = 4.75
      break
    default:
      price = 0
      break
  }

  // prossces
  subtotal = price + price
  tax = subtotal * TAXRATE
  total = subtotal + tax

  // output
  if (total == 0) {
    show = "no drinks"
  } else {
    show = "$" + total.toFixed(2)
  }
  document.getElementById("answer").innerHTML = show
}
