var gridSize = 400
var cycle = false

// events
var button1 = document.getElementById('startId')
var backgroundColor = document.getElementById('backgroundColorId')
var borderColor = document.getElementById('borderColorId')

// colors
var bgc = "#4650AB"
var brc = "#E1F440"

function setup() {

	// grid
	createCanvas(gridSize,gridSize).class('span-3')
	
	grid = new Grid({
		size: gridSize,
		backgroundColor: bgc,
		borderColor: brc,
	})
	
	// events
	button1.addEventListener('click',start)
	backgroundColor.addEventListener('change',changeBackgroundColor)
	borderColor.addEventListener('change',changeBorderColor)

}

function draw() {
	background(bgc)
	if (cycle) {
		grid.draw()
		if (grid.done) {
			button1.innerHTML = "Reset"
		}
	} else {
		grid.pause()
	}
}

function toggle(state) {
	if (button1.innerHTML === "Reset") {
		grid.reset()
	}

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

function changeBorderColor(e) {
	e.preventDefault()
	brc = `#${borderColorId.value}`
}



