var miRuleta = new Winwheel({
    numSegments: 10,
    outerRadius: 170,
    segments: [
      { fillStyle: "black", text: "Negro" },
      { fillStyle: "white", text: "Blanco" },
      { fillStyle: "#3F2212", text: "Cafe" },
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
    alert("Elemento seleccionado: " + SegmentoSeleccionado.text);
  
    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;
    miRuleta.draw();
    dibujarIndicador();
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
  