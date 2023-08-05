var game = {
    number: new OmegaNum(1),
    increase: new OmegaNum(2),
    multUpgrades: [],
}

for (i = 0; i < 1; i++) {
    let multiplierUpgrades = {
        cost: new OmegaNum(1e10).pow(i.add(1)),
        bought: new OmegaNum(0),
        effect: new OmegaNum(1),
    }
    game.multUpgrades.push(multiplierUpgrades)
}

function increaseNumber() {
    let translatedMult = game.increase.root(20)
    game.number = game.number.mul(translatedMult)
}

function updateText() {
    document.getElementById("current_number").innerHTML = formatNumber(game.number)
    document.getElementById("current_mult").innerHTML = formatNumber(game.increase)
    document.getElementById("mult_upg_1").innerHTML = formatNumber(game.multUpgrades[0].cost)
}

function multUpg(i) {
    for (i = 0; i < 1; i++) {
        if (i = 0 && game.number >= game.multUpgrades[0].cost) {
            game.increase.add(game.multUpgrades[0].effect)
            game.multUpgrades[0].bought.add(1)
            game.multUpgrades[0].cost.pow(game.multUpgrades[0].bought.add(1))
        }
    }
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
