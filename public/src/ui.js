var p5
var cycle = false
var game 

var UI = function(obj) {
	var gameInit = function(p) {
		p.setup = function() {	
			var cvs = p5.createCanvas(mazeSize,mazeSize).class('span-3')
			cvs.parent("maze")
			game = new Game(obj)
		}

		p.draw = function() {
			p5.background(bgc)	
			game.run()
		}
	}

	this.runSetup = function() {
		p5 = new p5(gameInit)
	}
}

function toggle(state) {
	if (startBtn.innerHTML === "Reset") {
		game.maze.reset()
	}

	cycle = !state
	cycle ? startBtn.innerHTML = "Pause" : startBtn.innerHTML = "Start"
	return cycle
}

function start(e) {	
	e.preventDefault()
	toggle(cycle)
}

