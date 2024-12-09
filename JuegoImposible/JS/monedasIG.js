class Moneda {
    constructor(_posX, _posY, _ancho, _alto) {
        this.posX = _posX;
        this.posY = _posY;
        this.ancho = _ancho; // Ancho de la moneda
        this.alto = _alto; // Alto de la moneda
        this.color = 'yellow'; // Color de la moneda
        this.bordeColor = 'black'; // Color del borde
        this.bordeAncho = 2; // Ancho del borde
        this.collected = false; // Estado de la moneda
    }

    draw(ctx) {
        if (!this.collected) {
            // Dibujar el relleno de la moneda
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.posX, this.posY, this.ancho / 2, 0, Math.PI * 2);
            ctx.fill();

            // Dibujar el borde de la moneda
            ctx.lineWidth = this.bordeAncho;
            ctx.strokeStyle = this.bordeColor;
            ctx.beginPath();
            ctx.arc(this.posX, this.posY, this.ancho / 2, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
}