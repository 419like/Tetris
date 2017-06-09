let Controller = function(model, view) {
    const DOWN = 40;
    const UP = 38;
    const LEFT = 37;
    const RIGHT = 39;
    const SPACE = 32;
    let _this = this;
    let gameTime = new GameTimer();
    let blockListData;
    _this.initStage = function() {
        $.ajax({
            url: "blockList.json",
            success: function(result) {
                // 兼容cordova
                if((typeof result)=='string'){
                    result = JSON.parse(result)
                }
                model.blockListData = result;
                view.initStage();
            }
        });
        $('html').keyup(function(e) {
            /* Act on the event */
            let key= e.keyCode;
            if (key==LEFT) {
                _this.left();
            }
            if (key==RIGHT) {
                _this.right();
            }
            if (key==DOWN) {
                _this.down();
            }
            if (key==UP) {
                _this.transform();
            }
            if (key==SPACE) {
                _this.fall();
            }

        });
    }
    _this.gameover = function(){
        gameTime.timeState = 'stop';
    }
    _this.addBlock = function() {
        let block = new Block();
        block.init(model);
        model.addBlock(block);
        // model.currentBlock = block;
        // view.addBlock(model.currentBlock);
    }
    _this.down = function() {
        model.down();
        _this.render();
    }
    _this.left = function() {
        model.left();
        _this.render();
    }

    _this.right = function() {
        model.right();
        _this.render();
    }
    _this.transform = function() {
        model.transform();
        _this.render();
    }
    _this.fall = function() {
        model.toEnd();
        _this.render();
        console.log('falling');
    }
    _this.start = function() {
        debugger
        _this.addBlock();
        _this.autoDown();
        // gameTime.start(_this.fall);
    }
    _this.autoDown = function() {
        gameTime.start(_this.down);
    }
    _this.render = function() {
        view.render(model.holeArray);
    }

}
