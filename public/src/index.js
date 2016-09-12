var mazeSize = 400
var w = 40

var bgc = "#4650AB"
var brc = "#E1F440"
var players = [new Player({name: 'mike'})]

// events
var startBtn = document.getElementById('startId')
var backgroundColor = document.getElementById('backgroundColorId')
var borderColor = document.getElementById('borderColorId')
var gridSize = document.getElementById('gridSize')
var cellSize = document.getElementById('cellSize')
var uiForm = document.getElementById('ui-init')

function createGame(w,size,bgc,players) {		
	startListeners()

	var ui = new UI({
		w: w,
		size: mazeSize,
		backgroundColor: bgc,
		players: players
	})
	ui.runSetup()
}

createGame(w,mazeSize,bgc,players)

function startListeners() {
	// events
	startBtn.addEventListener('click',start)
	backgroundColor.addEventListener('change',changeBackgroundColor)
	borderColor.addEventListener('change',changeBorderColor)
	gridSize.addEventListener('change',changeGridsize)
	cellSize.addEventListener('change',changeCellsize)
}

function uiSubmit(e) {
	e.preventDefault()
	mazeSize = parseInt(e.target.value)
}

function changeGridsize(e) {
	e.preventDefault()
	mazeSize = parseInt(e.target.value)
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