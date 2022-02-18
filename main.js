
let count = 0
let countEl = document.querySelector("#count-el")
let increaseEl = document.querySelector("#btn-increase")
let decreaseEl = document.querySelector("#btn-decrease")
let resetEl = document.querySelector("#btn-reset")

increaseEl.addEventListener('click', increment)

function increment() {
 if (count >=0 && count < 100) {

    countEl.innerHTML =  count += 1
  }
}

decreaseEl.addEventListener('click', decrement)

function decrement() {
 if (count > 0 && count <= 100) {
    countEl.innerHTML = count -= 1
  }
}


resetEl.addEventListener("click", reset)

function reset() {
  countEl.innerHTML = 0
  count= 0
}
