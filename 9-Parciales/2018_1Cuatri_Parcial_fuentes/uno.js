
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;
 
    ancho = prompt("Ancho del triangulo");

    largo = prompt("Largo del rectangulo");

    perimetro = Math.hypot(ancho , largo ) ;

    alert("El perimetro es: " + perimetro) ;

}
