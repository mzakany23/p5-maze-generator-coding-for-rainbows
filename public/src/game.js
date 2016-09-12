var currentPlayer 
var colSize

var Game = function(obj) {
	this.players = obj.players ? obj.players : []
	colSize = obj.size/obj.w

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
				startBtn.innerHTML = "Reset"
			}
		} else {
			game.maze.pause()
		}
	}
}

var keyPressed = function() {
	if (p5.keyCode === p5.UP_ARROW) {
		currentPlayer.move('up')
	}

	if (p5.keyCode === p5.RIGHT_ARROW) {
		currentPlayer.move('right')
	}

	if (p5.keyCode === p5.DOWN_ARROW) {
		currentPlayer.move('down')
	}

	if (p5.keyCode === p5.LEFT_ARROW) {
		currentPlayer.move('left')
	}
}