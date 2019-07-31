function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;

	do { 

		numero = parseInt ( prompt ("Ingrese un numero "));

		while ( isNaN (numero )) {

			numero = prompt ( "Error. Ingrese un nuevo numero : ");

		}

		if (numero >= 0 ) {

			positivo = positivo + numero ;

		}

		else  {

			negativo = negativo * numero ;

		}

		respuesta = prompt ( "Desea continuar ingresando numeros ? : ");


	}

	while ( respuesta == "s")

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN