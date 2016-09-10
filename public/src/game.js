var Game = function(players) {
	this.players = [] 
	var end = null
	
	this.addPlayer = function(player) {
		this.players.push(player)
	}

	this.start = function(maze) {
		maze.draw()
		this.players[0].show(maze.startCell)
	}
}