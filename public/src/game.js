var Game = function(players) {
	this.players = [] 
	var current = null

	this.addPlayer = function(player) {
		this.players.push(player)
	}

	this.start = function(grid) {
		grid.draw()
		this.players[0].show(grid.startCell)
	}
}