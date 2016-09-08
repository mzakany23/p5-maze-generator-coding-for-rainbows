var grid
var actionListeners = new ActionListeners()	

function setup() {
	createCanvas(400,400).class('span-3')
	grid = new Grid({
		size:400
	})
	actionListeners.init()
}

function draw() {
	background(51)

	if (actionListeners.cycle) {
		grid.draw()	
	} else {
		
	}
}



