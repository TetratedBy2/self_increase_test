function buyMainUpg1() {
    if (OmegaNum(game.number) >= OmegaNum(game.mainUpg1Cost)) {
        game.number = game.number.divide(game.mainUpg1Cost)
        game.mainUpg1Cost = game.mainUpg1Cost.pow(2)
        game.mainUpg1 = game.mainUpg1.add(1)
    }
}
