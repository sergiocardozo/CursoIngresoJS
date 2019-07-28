function mostrar()
{
	var num;

	num = Math.floor(Math.random() * 10 + 1 );

	if ( num >= 9){
		alert ("Nota: " + num + " Excelente");
	}
	else if ( num >= 4) {
		alert ("Nota: " + num + " Aprobo");
	}
	else {
		alert ("Nota: " + num + " Vamos, la proxima se puede !");
	}
	

}//FIN DE LA FUNCIÓN