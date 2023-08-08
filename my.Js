// Step 1: Declare and initialize variables
let adults = 42;
let children = 8;

// Step 2: Declare variable to hold total price
let price;

// Step 3: Calculate total price of all tickets
price = adults * 12 + children * 6;

// Step 4: Output price to console
console.log(price);

if (adults < 0) {
  adults = 0;
}

if (children < 0) {
  children = 0;
}

console.log(adults);    // output: 0
console.log(children);  // output: 0

for (let i = 1; i <= adults; i++) {
  console.log("Ticket #" + i);
}

function calc(adults, children) {
  const adultPrice = 10;
  const childPrice = 5;
  const total = adults * adultPrice + children * childPrice;
  return total;
}

window.onload = function() {
  let btn = document.getElementById("buyBtn");
  btn.addEventListener("click", function() {
    let adults = parseInt(document.getElementById("adults").value);
    let children = parseInt(document.getElementById("children").value);
    let price = calc(adults, children);
    alert("Total Price: $" + price);
  });
}
