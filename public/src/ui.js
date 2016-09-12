var p5
var game 

var UI = function(obj) {
	var gameInit = function(p) {

		p.setup = function() {	
			var cvs = p.createCanvas(obj.size,obj.size).class('span-3')
			cvs.parent("maze")
			game = new Game(obj)
		}

		p.draw = function() {
			p.background(bgc)	
			game.run()
		}

		p.windowResized = function(size) {
		  p.resizeCanvas(size, size);
		}
	}

	this.update = function(obj) {
		var s = obj.mazeSize
		var w = obj.cellSize
		var gs = s/w
		p5.windowResized(obj.mazeSize)
		game.maze.reset(gs)
	}

	this.runSetup = function() {
		p5 = new p5(gameInit)
	}
}



