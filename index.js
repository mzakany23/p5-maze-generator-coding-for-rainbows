var grid = []
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
	createCanvas(gridSize,gridSize).class('span-3')
	grid = new Grid(gridSize)
	
	button1.addEventListener('click',start)
	backgroundColor.addEventListener('change',changeBackgroundColor)
	borderColor.addEventListener('change',changeBorderColor)
}

function draw(brc) {
	background(bgc)
	if (cycle) {
		grid.draw(brc)
	} else {
		grid.pause(brc)
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

function changeListener(id){

}

function changeBackgroundColor(e) {
	e.preventDefault()
	bgc = `#${backgroundColor.value}`
}

function changeBorderColor(e) {
	e.preventDefault()
	brc = `#${borderColorId.value}`
}



