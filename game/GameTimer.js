let GameTimer = function(){
	let _this = this;
	_this.timeState = 'stop'
	_this.start = function(action){
		_this.timeState = 'playing';
		_this.loop(action);
	}
	_this.loop = function(action){
		setTimeout(function() {
			if(_this.timeState=='playing'){
				action();
				_this.loop(action);
				// console.log('playing');
			}
		}, 1000);
	}
}