let Controller = function(model, view) {
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
    }
    _this.addBlock = function() {
        let block = new Block();
        block.init(model);
        model.currentBlock = block;
        view.addBlock(model.currentBlock);
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
        console.log('falling');
    }
    _this.start = function() {
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
