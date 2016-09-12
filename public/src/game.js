var currentPlayer 

var Game = function(obj) {
	this.players = obj.players ? obj.players : []

	this.maze = new Maze({
		w: obj.w,
		size: obj.size,
		backgroundColor: obj.bgc
	})
	
	this.addPlayer = function(player) {
		this.players.push(player)
	}

	this.start = function() {
		this.maze.draw()
		currentPlayer = this.players[0]
		currentPlayer.show(this.maze.startCell)
	}

	this.finished = function() {
		
	}

	this.run = function() {
		if (game.maze.done) {
			game.start(this.maze)
		} else if (cycle) {
			game.maze.draw()
			if (game.maze.done) {
				button1.innerHTML = "Reset"
			}
		} else {
			game.maze.pause()
		}
	}
}

var keyPressed = function() {
	if (keyCode === UP_ARROW) {
		currentPlayer.move('up')
	}

	if (keyCode === RIGHT_ARROW) {
		currentPlayer.move('right')
	}

	if (keyCode === DOWN_ARROW) {
		currentPlayer.move('down')
	}

	if (keyCode === LEFT_ARROW) {
		currentPlayer.move('left')
	}
}