class Utils{

    //ANTES
    //canvas.height = Math.round(canvas.height/50)*50;

    //AHORA
    //canvas.height = Utils.RoundTablero(canvas.height);

    //redondea el parametro otorgado a un valor multiplo de 50
    RoundTablero(lado){
        return Math.round(lado/50)*50;
    }
}