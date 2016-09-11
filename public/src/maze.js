var Maze = function(obj) {
	var size = obj.size 
	this.maze = []
	this.endCell = null
	this.startCell = null
	this.done = false
	
	var w = 40
	var current
	var stack = []
	var gridSize = null

	var make2D = function() {
		var grid = []
		gridSize = size/w
		for (var x=0; x<gridSize;x++){
			for (var y=0; y<gridSize;y++){
				grid.push(new Cell(x,y,w))
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


	this.drawRandomEndCell = function(length) {
		return Math.floor((Math.random() * length) + 1); 
	}

	this.reset = function() {
		this.done = false
		this.maze = []
		this.init()
	}

	this.init = function() {
		this.maze = (make2D(size))
		current = this.maze[0]
		this.startCell = Object.assign({},current)
		var len = this.drawRandomEndCell(this.maze.length)
		this.endCell = this.maze[len]
	}

	this.getBounds = function() {
		return gridSize - 1
	}

	this.drawRules = function() {
		// draw logic
		// step 1 pick random neighbor
		var nbrArr = current.getNeighbors(this.maze,gridSize) // return grid
		var next = current.selRandNeighbor(nbrArr) // pick random cell

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
		} else {
			this.done = true
		}
	}

	this.draw = function() {
		for (var i=0; i<this.maze.length;i++) {
			var cell = this.maze[i]

			if (cell === this.endCell) {
				cell.glow(0,0,0)
			} else {
				cell.show()
			}			
		}

		// set the state of the cell
		current.visited = true

		if (!this.done) {
			current.glow(0,0,255,100)	
		}
		
		this.drawRules()
	}

	this.pause = function() {
		for (var i=0; i<this.maze.length;i++) {
			this.count += 
			this.maze[i].show()
		}

		if (!this.done) {
			current.glow(0,0,255,100)	
		}
	}

	this.init()
}