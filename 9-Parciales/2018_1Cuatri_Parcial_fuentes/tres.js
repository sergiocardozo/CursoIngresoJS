function mostrar()
{
    var precio;
    var porcentaje;
    var descuento;
    var precioFinal;

    precio = parseInt(prompt ("Ingrese precio"));
        ;
    porcentaje = parseInt(prompt ("Ingrese descuento"));
      
    descuento = precio * porcentaje / 100  ;

    precioFinal = precio - descuento ; 

    parseInt(document.getElementById("elPrecioFinal").value) = precioFinal;

}
