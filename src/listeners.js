var ActionListeners = function(grid) {
	this.cycle = false

	this.toggle = function(state) {
		this.cycle = !state
		return this.cycle
	}

	this.startListener = function(domId) {
		document.getElementById(domId).addEventListener('click',this.start)
	}

	this.start = function() {		
		this.toggle(this.cycle)
	}.bind(this)

	this.init = function() {
		this.startListener('startId')
	}
}