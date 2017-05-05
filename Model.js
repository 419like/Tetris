let Model = function() {
    let _this = this;
    _this.setController = function(controller){
        _this.controller = controller;
    }
    _this.initHoleArr = function() {
        let holeArray = [];
        for (var i = 0; i < 12; i++) {
            var tempArr = []

            for (var j = 0; j < 21; j++) {
                if (j == 20) {
                    var value = 2;
                } else if (i == 0 || i == 11) {
                    var value = 2;
                } else {
                    var value = 0;
                }

                tempArr.push(value);
            }
            holeArray.push(tempArr);
        }
        return holeArray;
    }
    _this.holeArray = _this.initHoleArr();
    _this.down = function() {
        let prePosition = _this.currentBlock.position;
        let targetPosition = { x: _this.currentBlock.position.x, y: _this.currentBlock.position.y + 1 };
        let checkResult = _this.checkAction(prePosition, targetPosition);
        if (checkResult) {
            _this.currentBlock.position = targetPosition;
            _this.holeArray = checkResult;
        } else {
            console.log('end');
            _this.setCurrentBlockDown();
            _this.checkHoleArray();
            _this.controller.addBlock();
        }
    }
    _this.setCurrentBlockDown = function(){
        let ps = _this.currentBlock.position;
        let preForm = _this.currentBlock.form;
        for (var i = 0; i < preForm.length; i++) {
            let pre = preForm[i];
            _this.holeArray[ps.x+pre.x][ps.y+pre.y] = 2;
        }
    }
    _this.checkHoleArray = function(){
        for (var j = 0; j < _this.holeArray[0].length-1; j++) {
            let tempArr = [];
            for (var i = 1; i < _this.holeArray.length; i++) {
                if(_this.holeArray[i][j]==0){
                    console.log('第'+j+'行没有填满')
                    break;
                }else if(tempArr.length==_this.holeArray.length-2){
                    removeArrayLine(j);
                    console.log('下移第'+j+'行')
                }
                tempArr.push(_this.holeArray[i][j]);
            }
        }
    }
    let removeArrayLine = function(num){
        for (var i = 0; i < _this.holeArray.length; i++) {
            _this.holeArray[i].splice(num,1);
            _this.holeArray[i].splice(0,0,0);
        }
    }
    _this.right = function() {
        let prePosition = _this.currentBlock.position;
        let targetPosition = { x: _this.currentBlock.position.x+1, y: _this.currentBlock.position.y };
        let checkResult = _this.checkAction(prePosition, targetPosition);
        if (checkResult) {
            _this.currentBlock.position = targetPosition;
            _this.holeArray = checkResult;
        } else {
            console.log("can not");
        }
    }
    _this.left = function() {
        let prePosition = _this.currentBlock.position;
        let targetPosition = { x: _this.currentBlock.position.x-1, y: _this.currentBlock.position.y };
        let checkResult = _this.checkAction(prePosition, targetPosition);
        if (checkResult) {
            _this.currentBlock.position = targetPosition;
            _this.holeArray = checkResult;
        } else {
            console.log("can not");
        }
    }
    _this.transform = function() {
        let checkResult = _this.checkTransform();
        if (checkResult) {
            _this.currentBlock.setNextForm();
            _this.holeArray = checkResult;
        } else {
            console.log("can not");
        }
    }
    _this.checkTransform = function(){
        let tempHole = JSON.parse(JSON.stringify(_this.holeArray))
        let ps = _this.currentBlock.position;
        let preForm = _this.currentBlock.form;
        for (var i = 0; i < preForm.length; i++) {
            let pre = preForm[i];
            tempHole[ps.x+pre.x][ps.y+pre.y] = 0;
        }
        let tarForm = _this.currentBlock.getNextForm();
        for (var i = 0; i < preForm.length; i++) {
            let tar = tarForm[i];
            if(tempHole[ps.x+tar.x][ps.y+tar.y]>0){
                return false;
            }else{
                tempHole[ps.x+tar.x][ps.y+tar.y] = 1;
            }            
        }
        return tempHole;  
    }

    _this.checkAction = function(pre,target){
        let tempHole = JSON.parse(JSON.stringify(_this.holeArray))
        let form = _this.currentBlock.form
        for (var i =0 ;i<form.length; i++) {
            let pt = form[i];
            tempHole[pt.x+pre.x][pt.y+pre.y] = 0;
        }
        for (var i =0 ;i<form.length; i++) {
            let pt2 = form[i];
            if(tempHole[pt2.x+target.x][pt2.y+target.y]>0){
                return false;
            }else{
                tempHole[pt2.x+target.x][pt2.y+target.y] = 1;
            }
        }
        return tempHole;        
    }
};
