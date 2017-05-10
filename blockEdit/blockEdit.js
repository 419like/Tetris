console.log('blockEdit')

let container = $('#container')
let blockList;
let holeArray = initHoleArr();

    $.ajax({
        url: "/blockList",
        success: function(result) {
            blockList = JSON.parse(result)
            console.log(blockList)
            render();
        }
    });

function render() {
    let htmlStr = '';
    for (var i = 0; i < blockList.length; i++) {
        htmlStr += `<div>
            <h2>种类：` + (i + 1) + `</h2>`
        for (var j = 0; j < blockList[i].length; j++) {
            htmlStr += `<div class="boxOut">
                <h3>形态：` + (j + 1) + `</h3>
                <div class="transBox">`
            tempArray = setBlockDataIn(holeArray,blockList[i][j]);
            for (var x = 0; x < tempArray.length; x++) {
                for (var y = 0; y < tempArray[x].length; y++) {
                    let colorStr;
                    if(tempArray[x][y]==1){
                        colorStr = 'red'
                    }else{
                        colorStr = ''
                    }
                    htmlStr += `<div class="transItem `+colorStr+`" style="top:` + 25 * y + `px;left:` + 25 * x + `px;">`+x+`,`+y+`</div>`
                }
                
            }
            htmlStr += `</div>
            </div>`
        }
        htmlStr += `</div>`
    }
    container.html(htmlStr);
}

function setBlockDataIn(holeArray,item){
    let tempArray = JSON.parse(JSON.stringify(holeArray));
    for (var i = 0; i < item.length; i++) {
        
        tempArray[item[i].x][item[i].y] = 1;
    }
    
    return tempArray;
}


function initHoleArr() {
    let holeArray = [];
    for (var i = 0; i < 4; i++) {
        var tempArr = []

        for (var j = 0; j < 4; j++) {

                var value = 0;

            tempArr.push(value);
        }
        holeArray.push(tempArr);
    }
    return holeArray;
}
