//sellecionemos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//funcion para ajustar el tamaño del canvas a la ventana
function resizeCanvas(){
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;
}

//llamamos a la funcion al cargar la pagina
resizeCanvas();

//ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

//creamos un objeto
const game = new Game(canvas.width, canvas.height, "start");

//creamos un tanque de jugador y un tanque de enemigo
const playerTank = new Tank(100, 100, 'up', 3);
const enemyTank = new EnemyTank(500, 100, 'down', 3);

//dibujamos los elementos en el canvas
function drawTank(Tank) {
    ctx.fillRect = 'green';
    //representacion el tanque como un cuadrado
    ctx.fillStyle(Tank.posX, Tank.posY, 50, 50);
}

function drawEnemyTank(Tank){
    ctx.fillRect = 'red';
    //representamos el tanque enemigo como un cuadrado
    ctx.fillStyle(Tank.posX, Tank.posY, 50, 50);
}

//logica del juego (actualizacion de la pantalla)
function updateGame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawTank(playerTank);
    drawEnemyTank(enemyTank);
    
    requestAnimationFrame(updateGame);
}

updateGame();