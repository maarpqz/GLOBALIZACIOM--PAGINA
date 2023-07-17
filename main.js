// calc metros de plástico
function calcularMetrosPlastico(codigoProducto, cantidadProducto) {
    let metrosPlastico = 0;
  
    if ([807, 943, 944, 945].includes(codigoProducto)) {
      metrosPlastico = (cantidadProducto * 0.29 / 1).toFixed(2);
    } else if ([765, 776, 800, 806].includes(codigoProducto)) {
      metrosPlastico = (cantidadProducto * 0.29 / 2).toFixed(2);
    } else if ([801, 818, 819, 908].includes(codigoProducto)) {
      metrosPlastico = (cantidadProducto * 0.29 / 4).toFixed(2);
    } else if ([909, 910, 911].includes(codigoProducto)) {
      metrosPlastico = (cantidadProducto * 0.29 / 6).toFixed(2);
    } else {
      return "Código inválido";
    }
  
    return metrosPlastico;
  }

//calculo de precio
  function calcularPrecio(metrosPlastico, codigoProducto) {
    let precio = 0;
  
    if ([807, 943, 944, 945, 800, 819].includes(codigoProducto)) {
      precio = (metrosPlastico * (0.40 + 0.22)).toFixed(2);
    } else if (codigoProducto === 908) {
      precio = (metrosPlastico * (0.32 + 0.21)).toFixed(2);
    } else if ([765, 776, 806, 801, 818, 909, 910, 911].includes(codigoProducto)) {
      precio = (metrosPlastico * (0.32 + 0.22)).toFixed(2);
    }
  
    return precio;
  }
  
  const selectCodigo = document.getElementById("inputGroupSelect01");
  const inputCantidad = document.getElementById("inputCantidad");
  const btnCalcular = document.getElementById("btnCalcular");
  const btnBorrar = document.getElementById("btnBorrar");
  const resultado = document.getElementById("resultado");
  


  
  // botoncito de calcular
  btnCalcular.addEventListener("click", function() {
    const codigoProducto = parseInt(selectCodigo.value);
    const cantidadProducto = parseInt(inputCantidad.value);
  
    const metrosPlastico = calcularMetrosPlastico(codigoProducto, cantidadProducto);
    if (metrosPlastico === "Código inválido") {
      resultado.textContent = "Código inválido";
    } else {
      const precio = calcularPrecio(metrosPlastico, codigoProducto);
      resultado.textContent = "Metros de plástico utilizados: " + metrosPlastico + " metros";
      resultado.innerHTML += "<br>Costo de material: $" + precio;
    }
  });
  
  // botoncito para borrar
  btnBorrar.addEventListener("click", function() {
    selectCodigo.selectedIndex = 0;
    inputCantidad.value = "";
    resultado.textContent = "";
  });

  // boton para ir al video

  function irAPaginaVideo() {
    window.location.href = "video.html"; 
  }

  function scrollToDiv() {
    const div = document.getElementById("calculadora");
    div.scrollIntoView({ behavior: "smooth" });
  }