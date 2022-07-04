var miRuleta = new Winwheel({
    numSegments: 10,
    outerRadius: 170,
    segments: [
        { fillStyle: "black", text: "Negro" },
        { fillStyle: "white", text: "Blanco" },
        { fillStyle: "#3F2212", text: "Café" },
        { fillStyle: "red", text: "Rojo" },
        { fillStyle: "blue", text: "Azul" },
        { fillStyle: "pink", text: "Rosa" },
        { fillStyle: "yellow", text: "Amarillo" },
        { fillStyle: "green", text: "Verde" },
        { fillStyle: "purple", text: "Morado" },
        { fillStyle: "orange", text: "Naranja" },
    ],
    animation: {
        type: "spinToStop",
        duration: 5,
        callbackFinished: "mensaje()",
        callbackAfter: "dibujarIndicador()"
    }
});

dibujarIndicador();

function mensaje() {
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    var nombre = document.getElementById("nombre").value;
    var color = SegmentoSeleccionado.text;



    postData('https://ejercicio-api-eduardorico.herokuapp.com/colores', { nombre, color })
        .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
        });

    alert(`${nombre} te ha tocado el color ${color}`);

    //miRuleta.stopAnimation(false);
    //miRuleta.rotationAngle = 0;
    //miRuleta.draw();
    //dibujarIndicador();
}

function dibujarIndicador() {
    var ctx = miRuleta.ctx;
    ctx.strokeStyle = "navy";
    ctx.fillStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(170, 10);
    ctx.lineTo(230, 10);
    ctx.lineTo(200, 70);
    ctx.lineTo(170, 10);
    ctx.stroke();
    ctx.fill();
}

function validarNombre() {
    if (document.getElementById("nombre").value != '') {
        dibujarIndicador();
        miRuleta.startAnimation();
    } else {
        alert('Favor de introducir su nombre')
    }
}


// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}