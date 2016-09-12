var p5
var cycle = false



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
	if (button1.innerHTML === "Reset") {
		game.maze.reset()
	}

	cycle = !state
	cycle ? button1.innerHTML = "Pause" : button1.innerHTML = "Start"
	return cycle
}

function start() {	
	toggle(cycle)
}

