function mostrar()
{
	var i = 1;	
	var contador=0;
	var suma = 0;
	var acumulador=0;
	
	while ( i <= 5 )
	{
		i ++; 
		contador = parseInt(prompt ( " Ingrese numero ")); 
		
		suma = suma + contador;


		
	}



parseInt(document.getElementById('suma').value= suma );
parseInt(document.getElementById("promedio").value = suma / 5);
}//FIN DE LA FUNCIÓN