function Cell(x,y,w){
	this.gridSize = 0
	this.x = x
	this.y = y
	this.visited = false
	this.finalCell = false
	
	this.cellBorder = {
		top: p5.line(x,y,x+w,y),
		right: p5.line(x+w,y,x+w,y+w),
		bottom: p5.line(x+w,y+w,x,y+w),
		left: p5.line(x,y+w,x,y) 
	}

	this.index = function(y,x) {
		if (x < 0 || y < 0 || x > this.gridSize-1 || y > this.gridSize-1) {
			return -1
		}
		return x+y * this.gridSize
	}

	this.getNeighbors = function(grid,gridSize) {
		this.gridSize = gridSize
		var neighbors = []
		var top = grid[this.index(x,y-1)]
		var right = grid[this.index(x+1,y)]
		var bottom = grid[this.index(x,y+1)]
		var left = grid[this.index(x-1,y)]

		if (top && !top.visited) {
			neighbors.push(top)
		}  

		if (right && !right.visited) {
			neighbors.push(right)
		}  

		if (bottom && !bottom.visited) {
			neighbors.push(bottom)
		}  

		if (left && !left.visited) {
			neighbors.push(left)
		}
		return neighbors
	}

	this.selRandNeighbor = function(nbrArr) {
		if (nbrArr.length > 0) {
			var r = p5.floor(p5.random(0, nbrArr.length))	
			return nbrArr[r]
		} 
		return undefined
	}

	this.glow = function(r,g,b,a) {
		var x = this.x *w
		var y = this.y *w
		p5.noStroke()
		p5.fill(r,g,b,a)
		p5.rect(x,y,w,w)
	}

	this.showSandwich = function() {
		var x = this.x *w
		var y = this.y *w
		p5.image(sandwichImg,x,y,w,w)
	}

	this.show = function() {
		// border lookup
		var border = this.cellBorder
		var x = this.x*w
		var y = this.y*w

		p5.stroke(brc)
		
		if (border.top){
			p5.line(x,y,x+w,y)	
		} 

		if (border.right) {
			p5.line(x+w,y,x+w,y+w)	
		} 

		if (border.bottom) {
			p5.line(x+w,y+w,x,y+w)	
		} 

		if (border.left) {
			p5.line(x,y+w,x,y) 
		}

		if (this.visited) {
			p5.noStroke()
			p5.fill(255,0,255,100)
			p5.rect(x,y,w,w)
		}
	}
}