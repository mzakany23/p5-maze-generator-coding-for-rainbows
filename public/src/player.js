var Player = function() {
	var w = 40

	this.name = null
	this.image = null
	
	var movements = {
		position: function(x,y) {
			return maze.maze[((x*10)+y)]
		},
		up: function(){
			var x = maze.startCell.x 
			var y = maze.startCell.y 

			var next = this.position(x,y-1)
			var noWall = next.cellBorder.bottom === false

			var border = maze.maze[maze.startCell.y - 1]

			if (border && noWall) {
				maze.startCell.y -= 1
			}
		},
		right: function(){
			var x = maze.startCell.x 
			var y = maze.startCell.y 
			
			var next = this.position(x+1,y)
			var noWall = next.cellBorder.left === false
	
			if (x <= (maze.getBounds()) && noWall) {
				maze.startCell.x += 1	
			}
		},
		down: function(){
			var x = maze.startCell.x
			var y = maze.startCell.y
			
			var next = this.position(x,y+1)
			var noWall = next.cellBorder.top === false

			if (y < maze.getBounds() && noWall){
				maze.startCell.y += 1
			}
		}, 
		left: function(){
			var x = maze.startCell.x 
			var y = maze.startCell.y 
			
			var next = this.position(x-1,y)
			var noWall = next.cellBorder.right === false

			var border = maze.maze[maze.startCell.x - 1]

			if (border && noWall) {
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