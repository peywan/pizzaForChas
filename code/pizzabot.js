const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

alert(
  "hey! we're happy to yserve your pizza! on our menu we have " +
    vegetarian +
    ", " +
    hawaiian +
    " and " +
    pepperoni
);

let userChoice = prompt("what pizza do you want to order ?");
let totalPizzas = prompt("how many pizzas do you want?");
let total = pizzaPrice * totalPizzas;

if (
  userChoice === hawaiian ||
  userChoice === vegetarian ||
  userChoice === pepperoni
) {
  console.log("userChoice");
}

console.log("okay you have chosen " + userChoice);
console.log(totalPizzas);
console.log(total);

console.log(
  "your order of " + userChoice + " is on its way. the total will be: " + total
);
