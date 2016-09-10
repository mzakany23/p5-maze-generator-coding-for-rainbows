var mazeSize = 400
var cycle = false
var player1 = new Player()
var game = new Game()

// events
var button1 = document.getElementById('startId')
var backgroundColor = document.getElementById('backgroundColorId')
var borderColor = document.getElementById('borderColorId')

// colors
var bgc = "#4650AB"
var brc = "#E1F440"

function setup() {	
	createCanvas(mazeSize,mazeSize).class('span-3')
	
	maze = new Maze({
		size: mazeSize,
		backgroundColor: bgc
	})
	
	// events
	button1.addEventListener('click',start)
	backgroundColor.addEventListener('change',changeBackgroundColor)
	borderColor.addEventListener('change',changeBorderColor)

	// players
	player1.name = 'mike zakany'
	player1.image = loadImage("./assets/img/satalite.png")
	game.addPlayer(player1)
}

function draw() {
	background(bgc)

	if (maze.done) {
		game.start(maze)
	} else if (cycle) {
		maze.draw()
		if (maze.done) {
			button1.innerHTML = "Reset"
		}
	} else {
		maze.pause()
	}
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

var keyPressed = function() {
	if (keyCode === UP_ARROW) {
		player1.move('up')
	}

	if (keyCode === RIGHT_ARROW) {
		player1.move('right')
	}

	if (keyCode === DOWN_ARROW) {
		player1.move('down')
	}

	if (keyCode === LEFT_ARROW) {
		player1.move('left')
	}
}

