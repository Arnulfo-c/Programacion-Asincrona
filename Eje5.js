let count = 0;

const task = setInterval(function() {
    console.log("Ejecutando tarea...");
    count++;
    if (count === 5) {
        clearInterval(task);
        console.log("Tarea finalizada despues de 5 ejercicios");
    }
}, 1000);
