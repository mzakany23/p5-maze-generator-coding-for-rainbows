var grid = []
var gridSize = 400
var cycle = false

// events
var button1 = document.getElementById('startId')
var backgroundColor = document.getElementById('backgroundColorId')

// colors
var bgc = "#4650AB"
var brc = "#E1F440"

function setup() {
	createCanvas(gridSize,gridSize).class('span-3')
	grid = new Grid(gridSize)
	
	button1.addEventListener('click',start)
	backgroundColor.addEventListener('change',changeBackgroundColor)
}

function draw() {
	background(bgc)
	if (cycle) {
		grid.draw(brc)
	} else {
		grid.pause()
	}
}

function toggle(state) {
	cycle = !state
	cycle ? button1.innerHTML = "Pause" : button1.innerHTML = "Start"
	return cycle
}

function start() {	
	toggle(cycle)
}

function changeBackgroundColor(e) {
	e.preventDefault()
	bgc = `#${backgroundColor.value}`
}



