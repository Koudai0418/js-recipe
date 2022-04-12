const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 1

plusButton.onclick = function () {
  count *= 2

  display.textContent = count
}
