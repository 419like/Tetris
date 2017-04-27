// 方块
let Block = function() {
        let type1form1 = [{
            x: 0,
            y: 1
        }, {
            x: 1,
            y: 1
        }, {
            x: 2,
            y: 1
        }, {
            x: 3,
            y: 1
        }];

        let type1form2 = [{
            x: 0,
            y: 1
        }, {
            x: 1,
            y: 1
        }, {
            x: 2,
            y: 1
        }, {
            x: 3,
            y: 1
        }];

        let type1 = [type1form1, type1form2];

        let type2 = [type1form1, type1form2];
        let blockTypes = [type1, type2];
        
        let _this = this;
        let randomNum1 = parseInt(Math.random() * blockTypes.length);
        let types = blockTypes[randomNum1];
        let randomNum2 = parseInt(Math.random() * blockTypes.length);
        _this.form = types[randomNum2]; 
        _this.position = { x: 1, y: 0 };
        _this.down = function(){
            let tempP = JSON.stringify(_this.position)
            let prePosition = _this.position;
            let targetPosition = x:_this.position+1;  
            checkTarget();          
        }
};
