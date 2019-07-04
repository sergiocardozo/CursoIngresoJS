//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{ var importe;
  var descuento;
  var resultado;

  importe = parseInt(document.getElementById("importe").value);
 
  descuento = (importe * 25/100);

  resultado = importe - descuento;

  document.getElementById("resultado").value = resultado;

}

