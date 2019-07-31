function mostrar()
{

	var contador=0;
	var acumulador=0;
	var seguir = "s" ;
	var numero;

	do {
		numero = parseInt (prompt (" Ingrese un numero : "));
		
		while (isNaN (numero)) {
			contador = parseInt ( prompt ( " Vuelva a ingresar un numero : "))
		}

		seguir = prompt ("Quiere seguir ingresando ?")

		contador = contador +1 ;

		acumulador = acumulador + numero ;

	} 

	while ( seguir == "s");

document.getElementById('suma').value= acumulador ;
document.getElementById('promedio').value=acumulador/contador ;

}//FIN DE LA FUNCIÓN