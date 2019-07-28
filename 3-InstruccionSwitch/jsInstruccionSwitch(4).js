function mostrar()
{
//tomo la edad  
var month = document.getElementById('mes').value;

switch (month)
{
    case ("Febrero") : 
        alert("Tiene 28 dias")
        break;

    case ("Marzo") : 
    case ("Abril") : 
    case ("Junio") : 
    case ("Agosto") : 
    case ("Septiembre") :
    case ("Noviembre") : 
        alert("Tiene 30 dias")
        break;

    case ("Enero") : 
    case ("Mayo") : 
    case ("Julio") : 
    case ("Octubre") :
    case ("Diciembre") : 
        alert("Tiene 31 dias")
        break;
}

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN