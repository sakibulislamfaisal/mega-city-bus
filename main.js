//function execute between first and economy class seat
function handleChangeProduct(product, increaseCount) {
  const inputCount = document.getElementById(product + "-count");
  const inputValue = parseInt(inputCount.value);
  let newCount = inputValue;
  if (increaseCount === true) {
    newCount = inputValue + 1;
  }
  if (increaseCount === false && newCount > 0) {
    newCount = inputValue - 1;
  }
  inputCount.value = newCount;
  let totalAmount = 0;
  if (product == "first") {
    totalAmount = newCount * 150;
  }
  if (product == "economy") {
    totalAmount = newCount * 100;
  }
  document.getElementById(product + "-total").innerText = totalAmount;
  calculateTotal();
}

//calculateTotal price

function calculateTotal() {
  const firstInput = document.getElementById("first-count");
  const firstCount = parseInt(firstInput.value);
  const economyInput = document.getElementById("economy-count");
  const economyCount = parseInt(economyInput.value);

  const subTotalAmount = firstCount * 150 + economyCount * 100;
  document.getElementById("sub-total").innerText = subTotalAmount;

  const taxAmount = Math.round(subTotalAmount / 10);
  document.getElementById("tax-amount").innerText = taxAmount;
  const grandTotalAmount = Math.round(subTotalAmount + taxAmount);
  document.getElementById("total").innerText = grandTotalAmount;
}

//purchase area
const purchase = document.getElementById("purchase");
purchase.style.display = "none";
const checkOut = document.getElementById("book-btn");
checkOut.addEventListener("click", function () {
  purchase.style.display = "block";
  purchase.style.textAlign = "center";
  purchase.style.backgroundColor = "#444";
  purchase.style.color = "#fff";
});
