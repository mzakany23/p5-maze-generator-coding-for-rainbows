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

	this.hasPlayers = function() {
		return playerCount < players.length
	}

	this.start = function() {
		this.maze.draw()
		if (playerCount === players.length) {playerCount = 0}
		currentPlayer = this.players[playerCount]
		ui.idText('currentPlayer',currentPlayer.name)
		currentPlayer.show(this.maze.startCell)		
		
	}

	this.finished = function() {
		ui.idToggle('winner','hide')
		ui.idToggle('maze','hide')
		var text = `${currentPlayer.name} + Sandwich!`
		ui.idText('winner-message',text)
		ui.idImage('winner-image',currentPlayer.image)
		playerCount += 1
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