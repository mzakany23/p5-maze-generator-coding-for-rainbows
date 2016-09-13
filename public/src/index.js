// globals
var mazeSize = 400
var w = 40
var cycle = false
var bgc = "#4650AB"
var brc = "#E1F440"
var players = [new Player({name: 'mike'})]
var p5
var game 
var currentPlayer 
var gridSize 

// events
var startBtn = document.getElementById('startId')
var backgroundColor = document.getElementById('backgroundColorId')
var borderColor = document.getElementById('borderColorId')
var gridSizeInput = document.getElementById('gridSize')
var cellSizeInput = document.getElementById('cellSize')

function createGame(w,size,bgc,players) {		
	ui = new UI({
		w: w,
		size: mazeSize,
		backgroundColor: bgc,
		players: players
	})
	ui.runSetup()
}

function startListeners() {
	// events
	startBtn.addEventListener('click',start)
	backgroundColor.addEventListener('change',changeBackgroundColor)
	borderColor.addEventListener('change',changeBorderColor)
	gridSizeInput.addEventListener('change',updateSize)
	cellSizeInput.addEventListener('change',updateSize)
}

function updateSize(e) {
	e.preventDefault()
	var pgs = parseInt(gridSizeInput.value)
	var cgs = parseInt(cellSizeInput.value)

	mazeSize = (pgs && pgs >= 400) ? pgs : 400
	cellSize = (cgs && cgs >= 40)  ? cgs : 40

	ui.update({gs:mazeSize,cs:cellSize})
}

function changeCellsize(e) {
	e.preventDefault()
}

function changeBackgroundColor(e) {
	e.preventDefault()
	bgc = `#${backgroundColor.value}`
}

function changeBorderColor(e) {
	e.preventDefault()
	brc = `#${borderColorId.value}`
}

function toggle(state) {
	if (startBtn.innerHTML === "Reset") {
		game.maze.reset(mazeSize/w)
	}

	cycle = !state
	cycle ? startBtn.innerHTML = "Pause" : startBtn.innerHTML = "Start"
	return cycle
}

function start(e) {	
	e.preventDefault()
	toggle(cycle)
}

createGame(w,mazeSize,bgc,players)
startListeners()


