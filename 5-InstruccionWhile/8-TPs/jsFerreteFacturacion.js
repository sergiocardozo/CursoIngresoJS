/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
     var precio1;
     var precio2;
     var precio3;
     var suma;

     precio1 = parseInt(document.getElementById("PrecioUno").value);
     precio2 = parseInt(document.getElementById("PrecioDos").value);
     precio3 = parseInt(document.getElementById("PrecioTres").value);

     suma = precio1 + precio2 + precio3;

     alert ("La suma de los precios es: " + suma );
     
}
function Promedio () 
{
    var precio1;
     var precio2;
     var precio3;
     var promedio;

     precio1 = parseInt(document.getElementById("PrecioUno").value);
     precio2 = parseInt(document.getElementById("PrecioDos").value);
     precio3 = parseInt(document.getElementById("PrecioTres").value);
    
     promedio = (precio1 + precio2 + precio3 ) / 3;

     alert ("El promedio es : " + promedio );
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var iva;
    var precioFinal;

    precio1 = parseInt(document.getElementById("PrecioUno").value);
    precio2 = parseInt(document.getElementById("PrecioDos").value);
    precio3 = parseInt(document.getElementById("PrecioTres").value);

    suma = precio1 + precio2 + precio3 ;

    iva = suma * 21 /100;

    precioFinal = suma + iva;

    alert (" El precio final es :" + precioFinal); 


	
}