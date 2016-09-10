var Player = function() {
	var w = 40

	this.name = null
	this.image = null
	
	var movements = {
		up: function(){
			var border = maze.maze[maze.startCell.y - 1]
			if (border) {
				maze.startCell.y -= 1
			}
		},
		right: function(){
			var x = maze.startCell.x
			if (x < (maze.getBounds())) {
				maze.startCell.x += 1
			}
		},
		down: function(){
			var y = maze.startCell.y
			if (y < maze.getBounds()){
				maze.startCell.y += 1
			}
		}, 
		left: function(){
			var border = maze.maze[maze.startCell.x - 1]
			if (border) {
				maze.startCell.x -= 1	
			}
		}
	}


	this.show = function(cell) {
		var x = cell.x*w
		var y = cell.y*w

		noStroke()
		fill(255, 204, 0);
		rect(x,y,w,w)
	}

	this.move = function(dir) {
		movements[dir]()
	}
}