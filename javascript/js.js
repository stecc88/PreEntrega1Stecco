let nombre = "";
let apellido = "";
let edad = "";

while (edad === "" || edad < 18) {
  nombre = prompt("Ingrese su nombre");
  apellido = prompt("Ingrese su apellido");
  edad = prompt("Ingrese su edad");

  if (edad < 18) {
    alert("Usted no puede ingresar. Es menor de edad");
  }
}

alert("Bienvenido/a " + nombre + " " + apellido); 


function ordenarProductos() {
  let costoTotal = 0;
  let productosOrdenados = "";
  let seguirOrdenando = true;

  while (seguirOrdenando) {
    let seleccion = prompt("Bienvenido a nuestro menú. ¿Qué desea comprar? \n 1. Rémera (Ars. 5000) \n 2. Pantalón (Ars. 8000) \n 3. Reloj (Ars. 10000)");

    if (seleccion === "1") {
      costoTotal += 5000;
      productosOrdenados += "Rémera, ";
    } else if (seleccion === "2") {
      costoTotal += 8000;
      productosOrdenados += "Pantalón, ";
    } else if (seleccion === "3") {
      costoTotal += 10000;
      productosOrdenados += "Reloj, ";
    } else {
      alert("Lo siento, opción no válida.");
    }

    let continuar = prompt("¿Desea ordenar algo más? (Si/No)");

    if (continuar === "no") {
      seguirOrdenando = false;
    } else if (continuar !== "si") {
      alert("Lo siento, respuesta no válida. Por favor, responda Si o No.");
    }
  }

  return { costoTotal, productosOrdenados };
}

let resultadoOrden = ordenarProductos();
alert("Usted ha ordenado: " + resultadoOrden.productosOrdenados + "por un total de Ars." + resultadoOrden.costoTotal);












