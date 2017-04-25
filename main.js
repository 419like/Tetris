
let model =new Model();

let view = new View(model);

let gameController = new Controller(model,view);

gameController.initStage();

function startGame() {
    gameController.start();
}


function downBlock(){
    gameController.down();
}
