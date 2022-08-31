let preguntas = {
    nro1: "Cuánto te gustan los animales?",
    nro2: "Cuánto te gusta el helado?",
    nro3: "Cuánto te gusta mirar series en Netflix?",
    nro4: "Cuánto te gusta estar al aire libre?",
    nro5: "Cuánto te gusta leer Harry Potter?"
}

function empezarEncuesta(nombre){
    alert(`Hola ${nombre}! Empecemos con las preguntas...`);

    let total = 0;

    for (let i = 1; i <= 5; i++) {
        let pregunta = preguntas[`nro${i}`];
        let respuesta = hacerPregunta(pregunta, i);
        total = total + respuesta;
    }

    return total;
}

function obtenerDiferencia(resultadoA, resultadoB){
    if(resultadoA > resultadoB){
        return resultadoA - resultadoB;
    }

    return resultadoB - resultadoA; 
}

function hacerPregunta(text, i){
    return parseInt(prompt(`Pregunta #${i}: Del 1 al 10... ${text}`));
}

function calcularCompatibilidad(diferencia){
    if(diferencia <= 15){
        return "Super amigos (✿◠‿◠)";
    }
    else if(diferencia <= 30){
        return "Amigos (/◕ヮ◕)/";
    }

    return "Enemigos (ಥ﹏ಥ)";
}

window.onload = () => {
    let nombreA = prompt("Hola! Cómo te llamás?");
    let resultadoA = empezarEncuesta(nombreA);
    alert(`Sumaste ${resultadoA} puntos! Ahora es el turno de tu amigue!`);

    let nombreB = prompt(`Hola amigue de ${nombreA}! Cómo te llamás??`);
    let resultadoB = empezarEncuesta(nombreB);
    alert(`Sumaste ${resultadoB} puntos! Ahora calcularemos el indice de amigabilidad comparando sus puntajes...`);

    let diferencia = obtenerDiferencia(resultadoA, resultadoB);

    let compatibilidad = calcularCompatibilidad(diferencia);

    alert(`${nombreA} y ${nombreB} son... ${compatibilidad}!!!`);
}