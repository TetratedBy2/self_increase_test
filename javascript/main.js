import Decimal from "decimal.js"

var game = {
    number: new Decimal(1),
    increase: new Decimal(2),
}

function increaseNumber() {
    game.number = game.number.mul(game.increase.pow(1 / 20))
}

function updateText() {
    document.getElementById("current_number").innerHTML = game.number
}

window.setInterval(function() {
    increaseNumber();
    updateText();
}, 20)
