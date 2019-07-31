function mostrar()
{

	var contador=0;
	var acumulador=0;
	var seguir;
	var numero;

	do {

		numero = parseInt ( prompt ( "Ingrese un numero : "));

		while (isNaN (numero)){

			contador = parseInt ( prompt (" Error. Vuelva a ingresar un numero :"));
		 }

		seguir = prompt ("Quiere ingresar un nuevo numero ? :");
		 
		contador = contador + numero ;
		 
		 
		acumulador = acumulador + 1 ; 
		 
		 
		 	}

	while  ( seguir == "s");

document.getElementById('suma').value=contador;
document.getElementById('promedio').value=contador/acumulador ;

}//FIN DE LA FUNCIÓN