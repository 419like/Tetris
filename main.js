
let model = new Model();

let view = new View(model);

let gameController = new Controller(model,view);

gameController.initStage();
model.setController(gameController);

function startGame() {
    gameController.start();
}
function downBlock(){
    gameController.down();
}
function leftBlock(){
	gameController.left();
}
function rightBlock(){
	gameController.right();
}
function transformBlock(){
	gameController.transform();
}

