let Model = function() {
    let _this = this;
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
                    value = 0;
                }

                tempArr.push(value);
            }
            holeArray.push(tempArr);
        }
        return holeArray;
    }
	_this.holeArray = _this.initHoleArr();    
};


