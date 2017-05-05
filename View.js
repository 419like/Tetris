let View = function(model) {

    let container = document.getElementById('container');
    let contentStr = '';
    let _this = this;
    
    _this.initStage = function() {
		_this.render(model.holeArray);
    }
    _this.addBlock = function(block) {
        for(var i=0 ;i<block.form.length;i++){
            let item = block.form[i]
            let position = {
                x:block.position.x+item.x,
                y:block.position.y+item.y,
            }
            model.holeArray[position.x][position.y] = 1;
        }   
        _this.render(model.holeArray);
    }
    _this.render = function(arr) {
        containerStr = '';
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                var type = arr[i][j] ? 'red' : 'gray';
                if(arr[i][j]==1){
                    type = 'green'
                }
                if(arr[i][j]==2){
                    type = 'red'
                }
                if(arr[i][j]==0){
                    type = 'gray'
                }

                containerStr += `<div class="` + type + `" style="left:` + 10 * i + `px;top:` + 10 * j + `px;"></div>`
            }
        }
        container.innerHTML = containerStr;
    }
}
