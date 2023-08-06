var game = {
    number: new OmegaNum(1),
    increase: new OmegaNum(2),
    mainUpg1: new OmegaNum(0),
    mainUpg1Cost: new OmegaNum(1e10),

    prestigePoints: new OmegaNum(0),
    prestigePointsEffect: new OmegaNum(1),
}

function increaseNumber() {
    let translatedMult = game.increase
    if (game.mainUpg1 >= OmegaNum(1)) translatedMult.add(game.mainUpg1)
    game.number = game.number.mul(translatedMult.root(20))
}

function updateText() {
    document.getElementById("current_number").innerHTML = formatNumber(game.number)
    document.getElementById("current_mult").innerHTML = formatNumber(game.increase)
    document.getElementById("mult_upg_1").innerHTML = formatNumber(game.mainUpg1Cost)
}

function formatNumber(input) {
    if (input <= 0) return input
    // let formatResult = input.toPrecision(2)
    let power = new OmegaNum.floor(OmegaNum.log10(input))
    let mantissa = new OmegaNum.divide(input, OmegaNum.pow(10, power))
    if (power < 3) return input
    return mantissa.toPrecision(2) + "e" + power
}

window.setInterval(function() {
    increaseNumber();
    updateText();
}, 20)
