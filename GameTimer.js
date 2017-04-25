let GameTimer = function(){
	let _this = this;
	let timeState = 'stop'
	_this.start = function(action){
		timeState = 'playing';
		_this.loop(action);
	}
	_this.loop = function(){
		setTimeout(function() {
			if(timeState=='playing'){
				_this.loop(action);
				console.log('playing');
			}
		}, 1000);
	}
}