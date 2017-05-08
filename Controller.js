let Controller = function(model,view) {
	let _this = this;
	let gameTime = new GameTimer();
	_this.initStage = function(){
		view.initStage();
	}
    _this.addBlock = function() {
        let block = new Block();
        model.currentBlock = block;
        view.addBlock(model.currentBlock);
    }
    _this.down = function(){
        model.down();
        _this.render();
    }
    _this.left = function(){
        model.left();
        _this.render();
    }

    _this.right = function(){
        model.right();
        _this.render();
    }
    _this.transform = function(){
        model.transform();
        _this.render();
    }
    _this.fall = function(){
    	console.log('falling');
    }
    _this.start = function(){
        _this.addBlock();
        _this.autoDown();
    	// gameTime.start(_this.fall);
    }
    _this.autoDown = function(){
        gameTime.start(_this.down);
    }
    _this.render = function(){
        view.render(model.holeArray);
    }

}
