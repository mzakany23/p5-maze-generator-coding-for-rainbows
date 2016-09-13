// globals
var p5
var mazeSize = 400
var w = 80
var cycle = false
var bgc = "#4650AB"
var brc = "#E1F440"
var ui 

var players = [
	new Player({name: 'Tom Selleck',image: "./assets/img/sel.png"}),
	new Player({name: 'John-Claude Van Damme',image: "./assets/img/jcvd.png"}),
	new Player({name: 'Ralph Macchio',image: "./assets/img/rm.png"}),
	new Player({name: 'Michael C.',image: "./assets/img/mcz.png"})
]

var playerCount = 0
var game 
var currentPlayer 
var gridSize 
var img 
var sandwichImg 

// events
var startBtn = document.getElementById('startId')
var backgroundColor = document.getElementById('backgroundColorId')
var borderColor = document.getElementById('borderColorId')

// game init
createGame(w,mazeSize,bgc,players)
startListeners()


