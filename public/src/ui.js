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
		var s = obj.gs
		var w = obj.cs
		var gs = s/w
		p5.windowResized(s)
		game.maze.setW(w)
		game.maze.reset(gs)
	}

	this.runSetup = function() {
		p5 = new p5(gameInit)
	}
}



