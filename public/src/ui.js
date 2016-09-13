var UI = function(obj) {
	var gameInit = function(p) {
		p.preload = function() {
			players.map((player) => {
				player.p5Image = p.loadImage(player.image);
			})
		  sandwichImg = p.loadImage("./assets/img/sandwich.png")
		}

		p.setup = function() {	
			var cvs = p.createCanvas(obj.size,obj.size).class('span-3')
			cvs.parent("maze")
			game = new Game(obj)
		}

		p.draw = function() {
			p.background(bgc)	
			game.run()
		}

		p.windowResized = function(size) {
		  p.resizeCanvas(size, size);
		}
	}

	this.update = function(obj) {
		var s = obj.gs
		var w = obj.cs
		var gs = s/w
		p5.windowResized(s)
		game.maze.setW(w)
		game.maze.reset(gs)
	}

	this.runSetup = function() {
		p5 = new p5(gameInit)
	}

	this.idText = function(id,text) {
		document.getElementById(id).innerHTML = text
	}

	this.idImage = function(id,src) {
		document.getElementById(id).src = src
	}
}

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
		var mazeDiv = document.getElementById('maze').classList
		if (mazeDiv.contains('hide')) {
			mazeDiv.toggle('hide')
			document.getElementById('winner').classList.toggle('hide')
		}
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

