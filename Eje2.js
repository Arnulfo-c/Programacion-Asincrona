let countdown = 5;
const timer = setInterval(function(){
    console.log(countdown);
    countdown--;
    if (countdown < 0) {
        console.log("¡Tiempo terminado!");
        clearInterval(timer);
    }
}, 1000);
