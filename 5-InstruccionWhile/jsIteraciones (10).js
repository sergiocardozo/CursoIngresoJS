function mostrar()
{

	var contador=0;
	var numero;
	var sumNeg = 0;
	var sumPos = 0;
	var cantPos = 0;
	var cantNeg = 0;
	var cantCeros = 0;
	var cantPares = 0;
	var promPos = 0;
	var promNeg = 0;
	var diferencia;
	var respuesta;

	do {

		numero = parseInt ( prompt (" Ingrese un numero : "));
		
		// ----------------------------SIGNOS --------------------------------------------------- 
		if ( numero > 0 ){

			sumPos = sumPos + numero;

			cantPos++;

		}
		else if ( numero < 0 ) {

			sumNeg = sumNeg + numero;

			cantNeg++;

		}
		else { 

			cantCeros++;

		}

		//----------------------------------- NUMEROS PARES -------------------------------------------------

		if (numero % 2 == 0 ) {

			cantPares++;

		}

		respuesta = prompt (" Desea continuar ? : ");
		
	}



	while(respuesta == "s");

	if ( sumPos != 0 ){

		promPos = sumPos / cantPos ;

	}
	
	if ( sumNeg != 0 ){

		promNeg = sumNeg / cantNeg; 
	}

	diferencia = sumPos - sumNeg;
	


	document.write ( "1-Suma de los negativos. " + sumNeg + "<br>");
	document.write ( "2-Suma de los positivos. " + sumPos + "<br>");
	document.write ( "3-Cantidad de positivos.  " + cantPos + "<br>");
	document.write ( "4-Cantidad de negativos.  " + cantNeg + "<br>");
	document.write ( "5-Cantidad de ceros.  " + cantCeros + "<br>");
	document.write ( "6-Cantidad de números pares. " + cantPares + "<br>");
	document.write ( "7-Promedio de positivos. " + promPos + "<br>");
	document.write ( "8-Promedios de negativos. " + promNeg + "<br>");
	document.write ( "9-Diferencia entre positivos y negativos. " + diferencia + "<br>");


 }
//FIN DE LA FUNCIÓN
