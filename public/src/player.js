var Player = function() {
	var w = 40

	this.name = null
	this.image = null
	
	var movements = {
		up: function(){
			var border1 = grid.grid[grid.startCell.y - 1]
			if (border1) {
				grid.startCell.y -= 1
			}
		},
		right: function(){
			var x = grid.startCell.x
			if (x < (grid.getBounds())) {
				grid.startCell.x += 1
			}
		},
		down: function(){
			var y = grid.startCell.y
			if (y < grid.getBounds()){
				grid.startCell.y += 1
			}
		}, 
		left: function(){
			var border1 = grid.grid[grid.startCell.x - 1]
			if (border1) {
				grid.startCell.x -= 1	
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