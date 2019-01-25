//Canvas settings
var ctx = document.getElementById('ctx').getContext('2d');
var WIDTH = 500;
var HEIGHT = 500;
//snake body
var snakeList, foodList
ctx.font = "20px Calibri";


//snake
var snakeBody = {
    width:20,
    height:20,
    color:'green'
};

//food
var food = {
    width:20,
    height:20,
    color:'orange'
};

drawSnake = function(sb,i) {
    //sb = snakeBody; i = index
    ctx.save();
    if (i === 0)
        ctx.fillStyle = 'black';
    else
        ctx.fillStyle = snakeBody.color;
    ctx.fillRect(sb.x, sb.y, snakeBody.width, snakeBody.height);
    ctx.restore();

}

drawFood = function (f,i) {
    //f = food; i = index
    ctx.save();
    ctx.fillStyle = food.color;
    ctx.fillRect=(f.x, f.y, food.width, food.height);
    ctx.restore();

}


startGame = function () {
    snakeList = [
        {x: 220, y: 200},
        {x: 210, y: 200},
        {x: 200, y: 200}
        ];

    foodList = [];
    snakeList.forEach(drawSnake);
}
startGame();

//
