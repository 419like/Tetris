console.log('blockEdit')

let container = $('#container')
let blockList;
let holeArr = initHoleArr();

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
            for (var h = 0; h < blockList[i][j].length; h++) {
                htmlStr += `<div class="transItem" style="top:` + 25 * blockList[i][j][h].y + `px;left:` + 25 * blockList[i][j][h].x + `px;"></div>`
            }
            htmlStr += `</div>
            </div>`
        }
        htmlStr += `</div>`
    }
    container.html(htmlStr);
}


let initHoleArr = function() {
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
