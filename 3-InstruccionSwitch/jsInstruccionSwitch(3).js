function mostrar()
{
//tomo la edad  
var month;
month = document.getElementById('mes').value;

switch (month)
{
    case ("Febrero") :
        alert ("Este mes no tiene mas de 29 dias")
        break ;
    case ("Enero"):
    case ("Marzo") :
    case ("Abril") :
    case ("Mayo") :
    case ("Junio") :         
    case ("Julio") :
    case ("Agosto") :
    case ("Septiembre") :
    case ("Octubre") :
    case ("Noviembre") :
    case ("Diciembre") :
        alert ("Este mes tiene 30 o mas dias")
        break;
}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN