var Player = function(obj) {
	this.name = obj.name

	var movements = {
		position: function(x,y) {
			return game.maze.maze[((x*gridSize)+y)]
		},
		areEqual: function(c1,c2) {
			return c1.x === c2.x && c1.y === c2.y
		},
		checkEnd: function(cell) {
			if (this.areEqual(cell,game.maze.finalCell)) {
				game.finished()
			}
		},
		up: function(){
			var x = game.maze.startCell.x 
			var y = game.maze.startCell.y 

			var next = this.position(x,y-1)
			var noWall = next.cellBorder.bottom === false

			var border = game.maze.maze[game.maze.startCell.y - 1]

			if (border && noWall) {
				game.maze.startCell.y -= 1
				this.checkEnd(game.maze.startCell)
			}
		},
		right: function(){
			var x = game.maze.startCell.x 
			var y = game.maze.startCell.y 
			
			var next = this.position(x+1,y)
			var noWall = next.cellBorder.left === false
	
			if (x <= (game.maze.getBounds()) && noWall) {
				game.maze.startCell.x += 1	
				this.checkEnd(game.maze.startCell)
			}
		},
		down: function(){
			var x = game.maze.startCell.x
			var y = game.maze.startCell.y
			
			var next = this.position(x,y+1)
			var noWall = next.cellBorder.top === false

			if (y < game.maze.getBounds() && noWall){
				game.maze.startCell.y += 1
				this.checkEnd(game.maze.startCell)
			}
		}, 
		left: function(){
			var x = game.maze.startCell.x 
			var y = game.maze.startCell.y 
			
			var next = this.position(x-1,y)
			var noWall = next.cellBorder.right === false

			var border = game.maze.maze[game.maze.startCell.x - 1]

			if (border && noWall) {
				game.maze.startCell.x -= 1	
				this.checkEnd(game.maze.startCell)
			}
		}
	}

	this.show = function(cell) {
		var x = cell.x*w
		var y = cell.y*w
		// p5.noStroke()
		// p5.fill(255, 204, 0);
		// p5.rect(x,y,w,w)
		p5.image(img,x,y,w,w)
	}

	this.move = function(dir) {
		movements[dir]()
	}
}