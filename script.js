var gameSnake;

window.addEventListener('keydown', this.controller, false);

function startGame(){
    gameArea.start();
    gameSnake = new snake(40,40,"blue",40,160);
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 640;
        this.canvas.height = 480;
        this.ctx = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 100);
    },
    drawGrid : function() {
        this.ctx.beginPath();
        for(var x = 0; x < this.canvas.width; x++){
            this.ctx.moveTo(0,40*x);
            this.ctx.lineTo(640,40*x);      
        }
        for(var y = 0; y < this.canvas.height; y++){
            this.ctx.moveTo(40*y,0);
            this.ctx.lineTo(40*y,480);      
        }
        this.ctx.stroke();  
    },
    clear : function() {
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    }
}

function snake(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = gameArea.ctx;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPosition = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    gameArea.clear();
    gameArea.drawGrid();
    gameSnake.newPosition();
    gameSnake.update();
}

var endofkey;


function controller(event) {   
    if(event.which == 38){ //up
        if(window.endofkey==40){
            event.which=40;
        }else{
            gameSnake.speedY = -40;
            gameSnake.speedX = 0;
        }
    }else if(event.which == 37){ //left
        if(window.endofkey==39){
            event.which=39;
        }else{
            gameSnake.speedX = -40;
            gameSnake.speedY = 0;         
        }
    }else if(event.which == 40){ //down
        if(window.endofkey==38){
            event.which=38;
        }else{
            gameSnake.speedY = 40;
            gameSnake.speedX = 0;        
        }    
    }else if(event.which == 39){ //right
        if(window.endofkey==37){
            event.which=37;
        }else{
            gameSnake.speedX = 40;
            gameSnake.speedY = 0;
        }
    }
    if(window.endofkey==37){
        if(event.which==39){
            window.endofkey = 37;
        }else{
            window.endofkey = event.which;
        }
    }
    if(window.endofkey==38){
        if(event.which==40){
            window.endofkey = 38;
        }else{
            window.endofkey = event.which;
        }
    }
    if(window.endofkey==39){
        if(event.which==37){
            window.endofkey = 39;
        }else{
            window.endofkey = event.which;
        }
    }
    if(window.endofkey==40){
        if(event.which==38){
            window.endofkey = 40;
        }else{
            window.endofkey = event.which;
        }
    }
    else{window.endofkey = event.which;}
}
