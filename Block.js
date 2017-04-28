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
            x: 1,
            y: 0
        }, {
            x: 1,
            y: 1
        }, {
            x: 1,
            y: 2
        }, {
            x: 1,
            y: 3
        }];

        let type1 = [type1form1, type1form2];

        let type2 = [type1form1, type1form2];
        let blockTypes = [type1, type2];
        
        let _this = this;
        _this.typeNum = parseInt(Math.random() * blockTypes.length);
        _this.forms = blockTypes[_this.typeNum];
        _this.formNum = parseInt(Math.random() * _this.forms.length);
        _this.form = _this.forms[_this.formNum];
        _this.setNextForm = function(){
            if(_this.formNum+1==_this.forms.length){
                _this.formNum = 0;
            }else{
                _this.formNum++;               
            }
            _this.form = _this.forms[_this.formNum];
        }
        _this.getNextForm = function(){
            if(_this.formNum+1==_this.forms.length){
                return _this.forms[0]
            }else{
                return _this.forms[_this.formNum+1]
            }
        }

        _this.position = { x: 1, y: 0 };
        
};
