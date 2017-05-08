// 方块
let Block = function() {
    let blockTypes = '';

    let _this = this;



    _this.init = function(model) {
        blockTypes = model.blockListData;
        _this.typeNum = parseInt(Math.random() * blockTypes.length);
        _this.forms = blockTypes[_this.typeNum];
        _this.formNum = parseInt(Math.random() * _this.forms.length);
        _this.form = _this.forms[_this.formNum];
    }
    _this.setNextForm = function() {
        if (_this.formNum + 1 == _this.forms.length) {
            _this.formNum = 0;
        } else {
            _this.formNum++;
        }
        _this.form = _this.forms[_this.formNum];
    }
    _this.getNextForm = function() {
        if (_this.formNum + 1 == _this.forms.length) {
            return _this.forms[0]
        } else {
            return _this.forms[_this.formNum + 1]
        }
    }

    _this.position = { x: 1, y: 0 };

};
