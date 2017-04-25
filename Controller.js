let Controller = function(model,view) {
	let _this = this;
	let gameTime = new GameTimer();
	_this.initStage = function(){
		view.initStage();
	}
    _this.addBlock = function(block) {
        model.currentBlock = block;
        view.addBlock(model.currentBlock);
    }
    _this.down = function(){
        
        model.test();
    }
    _this.fall = function(){
    	console.log('falling');
    }
    _this.start = function(){
        let block = new Block();
        _this.addBlock(block);
    	// gameTime.start(_this.fall);
    }
}
