function mostrar()
{
//tomo la edad  
var month;
month = document.getElementById('mes').value;

switch (month)
{ 
    case ("Enero"):
    case ("Febrero"):
    case ("Marzo") :
    case ("Abril") :
    case ("Mayo") :
    case ("Junio") :
        alert ("Falta para el invierno")
        break;

    case ("Julio") :
    case ("Agosto") :
        alert ("Abrigate que hace frio !")
        break;

    case ("Septiembre") :
    case ("Octubre") :
    case ("Noviembre") :
    case ("Diciembre") :
        alert ("Ya pasamos el frio ahora calor !")
        break;
        

 

}

alert (mesDelAño);




}//FIN DE LA FUNCIÓN