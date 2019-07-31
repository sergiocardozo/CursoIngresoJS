function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo = 0;
	var minimo = 0;
	var respuesta;


	do {

		numero = parseInt ( prompt (" Ingrese un numero : "));

		if ( numero > maximo ) {

			numero = maximo;

			maximo++;

		}
		if (numero < minimo) {

			numero = minimo;

			minimo++;
		}

		respuesta = prompt ("Desea ingresar un nuevo numero :");


	}
	while(respuesta == "s");
	

		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN