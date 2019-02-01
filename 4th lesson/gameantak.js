<html>
<head>
    <title>Snake</title>
</head>
<body>
<canvas height="500" width="500" style="border:2px solid #43c1bf" id="ctx"/>
<script>
    //Canvas settings
    var ctx = document.getElementById('ctx').getContext('2d');
    var WIDTH = 500;
    var HEIGHT = 500;
    //snake body
    var snakeList, foodList, /* new var:*/direction;
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

    //add new event
    document.onkeydown = function(event) {
        //0 - Left
        //1 - Up
        //2 - Right
        //3 - Down
        if (event.keyCode == 37) {
            direction = 0;
            console.log("0");
        }
        else if (event.keyCode == 38) {
            direction = 1;
            console.log("1");
        }
        else if (event.keyCode == 39) {
            direction = 2;
            console.log("2");
        }
        else if (event.keyCode == 40) {
            direction = 3;
            console.log("3");
        }
    }



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
        //new var
        direction= 99;
        snakeList.forEach(drawSnake);
    }
    startGame();

    //


    startGame();

</script>
</body>
</html>