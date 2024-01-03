const decreaseButton10 = document.getElementById("decreaseButton10");
const decreaseButton = document.getElementById("decreaseButton");
const increaseButton10 = document.getElementById("increaseButton10");
const increaseButton = document.getElementById("increaseButton");
const resetButton = document.getElementById("resetButton");
const countLabel = document.getElementById("countLabel");

let count = 0;

decreaseButton10.onclick = function () {
  count -= 10;
  countLabel.textContent = count;
};
decreaseButton.onclick = function () {
  count -= 1;
  countLabel.textContent = count;
};

resetButton.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};

increaseButton10.onclick = function () {
  count += 10;
  countLabel.textContent = count;
};
increaseButton.onclick = function () {
  count += 1;
  countLabel.textContent = count;
};
