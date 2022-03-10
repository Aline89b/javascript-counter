
let count = 0
const incrementBtn = document.createElement("button");
incrementBtn.textContent = "Increase";
const decrementBtn = document.createElement("button");
decrementBtn.textContent = "Decrease";
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
const counter = document.querySelector(".counter");
counter.append(incrementBtn, decrementBtn, resetBtn);


resetBtn.setAttribute("class", "button");
decrementBtn.setAttribute("class", "button");
incrementBtn.setAttribute("class", "button");

let countEl = document.querySelector("#count-el")


incrementBtn.addEventListener('click', increment)

function increment() {
 if (count >=0 && count < 100) {

    countEl.innerHTML =  count += 1
  }
}

decrementBtn.addEventListener('click', decrement)

function decrement() {
 if (count > 0 && count <= 100) {
    countEl.innerHTML = count -= 1
  }
}


resetBtn.addEventListener("click", reset)

function reset() {
  countEl.innerHTML = 0
  count= 0
}
