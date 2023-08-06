function buyMainUpg1() {
    if (game.number >= game.mainUpg1Cost) {
        game.number = game.number.divide(game.mainUpg1Cost)
        game.mainUpg1Cost = game.mainUpg1Cost.pow(2)
        game.mainUpg1 = game.mainUpg1.add(1)
    }
}
