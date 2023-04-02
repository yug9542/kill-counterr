let countEl = document.getElementById("count-el")
let killsCounterEl = document.getElementById("kills-counter")
let nextRoundEl = document.getElementById("next-round-btn")

let count = 0

function increase() {
    count += 1
    countEl.innerText = count
}

function nextRound() {
    killsCounterEl.textContent += count + " - "
    count = 0
    countEl.textContent = 0
}



