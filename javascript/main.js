var game = {
    number: new OmegaNum(1),
    increase: new OmegaNum(2),
}

function increaseNumber() {
    game.number = game.number.mul(game.increase.pow(0.05))
}

function updateText() {
    document.getElementById("current_number").innerHTML = game.number
}

function formatNumber(input) {
    let formatResult = input.toPrecision(2);
    return formatResult
}

window.setInterval(function() {
    increaseNumber();
    updateText();
    formatNumber();
}, 20)
