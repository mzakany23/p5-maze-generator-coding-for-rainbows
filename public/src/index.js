var mazeSize = 400
var cycle = false
var w = 40

// color
var bgc = "#4650AB"
var brc = "#E1F440"

// events
var button1 = document.getElementById('startId')
var backgroundColor = document.getElementById('backgroundColorId')
var borderColor = document.getElementById('borderColorId')

var init = {
	w: w,
	size: mazeSize,
	backgroundColor: bgc,
	players: [new Player({name: 'mike'})]
}

function setup() {	
	createCanvas(mazeSize,mazeSize).class('span-3')
	game = new Game(init)

	// events
	button1.addEventListener('click',start)
	backgroundColor.addEventListener('change',changeBackgroundColor)
	borderColor.addEventListener('change',changeBorderColor)

}

function draw() {
	background(bgc)	
	game.run()
}

function toggle(state) {
	if (button1.innerHTML === "Reset") {
		maze.reset()
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

