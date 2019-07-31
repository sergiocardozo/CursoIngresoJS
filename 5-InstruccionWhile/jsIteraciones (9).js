function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var respuesta;
	var flag = 0;


	do	{ 
		numero = parseInt ( prompt ( "Ingrese un numero : "));

		if ( numero > maximo || flag == 0) {

			numero = maximo 
		}	

		if ( numero < minimo || flag == 1 ) {

			numero = minimo
		}
	
		respuesta = prompt (" Desea ingreser un nuevo numero : ")
	}

	while (respuesta = "s");

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN