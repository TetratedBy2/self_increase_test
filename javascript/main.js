var game = {
    number: new Decimal(1),
    increase: new Decimal(2),
}

function increaseNumber() {
    game.number = game.number.mul(game.increase.pow(0.05))
}

function updateText() {
    document.getElementById("current_number").innerHTML = game.number
}

function formatNumber(input) {
    let power = Decimal.floor(Decimal.log(input))
    let mantissa = input / Decimal.pow(10, power)
    if (power < 3) return input
    return mantissa + "e" + power
}

window.setInterval(function() {
    increaseNumber();
    updateText();
    formatNumber();
}, 20)
