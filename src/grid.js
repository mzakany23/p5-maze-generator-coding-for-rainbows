var Grid = function(size) {
	this.grid = []
	w = 40
	var current
	var gridSize = 0
	var stack = []

	var make2D = function() {
		var grid = []
		gridSize = size/w
		for (var x=0; x<gridSize;x++){
			for (var y=0; y<gridSize;y++){
				grid.push(new Cell(x,y))
			}
		}
		return grid
	}

	var removeWalls = function(cell1,cell2) {
		var x = cell1.x - cell2.x
		var y = cell1.y - cell2.y

		if (x === -1) {
			cell1.cellBorder.right = false
			cell2.cellBorder.left = false
		} else if (x === 1) {
			cell1.cellBorder.left = false
			cell2.cellBorder.right = false
		}

		if (y === -1) {
			cell1.cellBorder.bottom = false
			cell2.cellBorder.top = false
		} else if (y === 1) {
			cell1.cellBorder.top = false
			cell2.cellBorder.bottom = false
		}
	}

	this.init = function() {
		this.grid = (make2D(size))
		current = this.grid[0]
	}

	this.pause = function() {
		for (var i=0; i<this.grid.length;i++) {
			this.count += 1
			this.grid[i].show()
		}
	}

	this.draw = function() {
		for (var i=0; i<this.grid.length;i++) {
			this.grid[i].show()
		}

		// set the state of the cell
		current.visited = true
		current.glow(0,0,255,100)

		// step 1 pick random neighbor
		var nbrArr = current.getNeighbors(this.grid,gridSize)
		var next = current.selRandNeighbor(nbrArr)

		if (next) {
			next.visited = true

			// step 2
			stack.push(current)

			// step 3 remove walls
			removeWalls(current,next)

			// step 4
			current = next
			
		} else if(stack.length > 0) {
			current = stack.pop()
		}
	}

	this.init()
}