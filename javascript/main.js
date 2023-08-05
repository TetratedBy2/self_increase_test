var game = {
    number: new OmegaNum(1),
    increase: new OmegaNum(2),
}

function increaseNumber() {
    let translatedMult = game.increase.pow(0.05)
    game.number = game.number.mul(translatedMult)
}

function updateText() {
    document.getElementById("current_number").innerHTML = formatNumber(game.number)
}

function formatNumber(input) {
    let formatResult = input.toPrecision(2);
    return formatResult
}

function multUpg(i) {
    for (i = 0; i < 2; i++) {
        if (i = 1) {
            game.increase.add(1)
        }
    }
}

window.setInterval(function() {
    increaseNumber();
    updateText();
}, 20)
