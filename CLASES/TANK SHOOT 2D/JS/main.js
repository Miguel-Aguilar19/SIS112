//Selecionamos el vanvas y el contexto
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
var utils = new Utils();

//Funcion para ajustar el tamaño de canvas a la ventana
function resizeCanvas(){
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;
    
    canvas.width = Utils.RoundTablero(canvas.widt);
    canvas.height = Utils.RoundTablero(canvas.height);

}

//Llamamos a la funcion para cargar la pagina
resizeCanvas();

//Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

//Creamos un objeto de juego
const game = new Game(canvas.width, canvas.height, 'start');

//Creamos un tanque de jugador y un tanque enemigo
const playerTank = new Tank(600, 300, 'up', 3, game.ancho, game.alto);
const enemyTank1 = new EnemyTank(1000, 500, 'down', 3, game.ancho, game.alto);
const enemyTank2 = new EnemyTank(1000, 500, 'down', 3, game.ancho, game.alto);
const enemyTank3 = new EnemyTank(1000, 500, 'down', 3, game.ancho, game.alto);
const enemyTank4 = new EnemyTank(1000, 500, 'down', 3, game.ancho, game.alto);
const enemyTank5 = new EnemyTank(1000, 500, 'down', 3, game.ancho, game.alto);

//Dibujamos los elementos en el canvas 
function drawTank(tank) {
    ctx.fillStyle = 'green';
    //Representamos el tanque como un cuadro
    ctx.fillRect(tank.posX, tank.posY, 50, 50);
}

function drawEnemyTank(enemyTank) {
    ctx.fillStyle ='red';
    //Represetamos el tanque enemigo como un cuadrado
    ctx.fillRect(enemyTank.posX, enemyTank.posY, 50, 50);
}

//Controles basicos para mover el tanque del jugador
window.addEventListener('keydown', function (e){
    switch(e.key) {
        case 'ArrowLeft':
            playerTank.moveLeft();
            break;
        case 'ArrowRight':
            playerTank.moveRight();
            break;
        case 'ArrowUp':
            playerTank.moveUp();
            break;
        case 'ArrowDown':
            playerTank.moveDown();
            break;
        //Las teclas de las Letras del teclado
        case 'a':
            playerTank.moveLeft();
            break;
        case 'd':
            playerTank.moveRight();
            break;
        case 'w':
            playerTank.moveUp();
            break;
        case 's':
            playerTank.moveDown();
            break;

    }
});

//Hacer el tanque enemigo random
function moveEnemyTankRandomly(enemyTank) {
    const directions = [ 'left', 'right', 'up', 'down']; //Posibles direcciones
    const randomDirection = directions[Math.floor(Math.random() * directions.length)]; 

    //Movemos el tanque enemigo en la direccion elegida
    switch(randomDirection) {
        case 'left':
            enemyTank.moveLeft();
            break;
        case 'right':
            enemyTank.moveRight();
            break;
        case 'up':
            enemyTank.moveUp();
            break;
        case 'down':
            enemyTank.moveDown();
            break;
    }
}

//Hacemos q el tanque parezca tontito
setInterval(() => {
    moveEnemyTankRandomly(enemyTank1);
    moveEnemyTankRandomly(enemyTank2);
    
}, 150);
setInterval(() => {
    moveEnemyTankRandomly(enemyTank3);
    moveEnemyTankRandomly(enemyTank4);
    moveEnemyTankRandomly(enemyTank5);
}, 150);

//Logica del juego(actualizacion a la pantalla)
function updateGame(){
    //Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawTank(playerTank);
    drawEnemyTank(enemyTank1);
    drawEnemyTank(enemyTank2);
    drawEnemyTank(enemyTank3);
    drawEnemyTank(enemyTank4);
    drawEnemyTank(enemyTank5);
    //Refrescar los grafico
    requestAnimationFrame(updateGame);
}



//Inicar el juego
updateGame();