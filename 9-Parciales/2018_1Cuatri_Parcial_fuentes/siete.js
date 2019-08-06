function mostrar()
{
    i = 0;
    var nota;
    var sexo;
    var promedionotas;
    var notabaja;
    var sexobajo;
    var contadorvarones = 0;
    var acumuladornota = 0;
    var contador = 0;
    var flag = 0

    do { 

        nota = parseInt ( prompt ("Ingrese su nota entre 0 y 10: "));
        
        while ( nota < 0 || nota > 10 || isNaN (nota)){
            
            nota = parseInt ( prompt ("Error. Ingrese su nota entre 0 y 10: "));

        }

        sexo = prompt ("Ingrese el sexo : ");
        
        while ( sexo != "f" && sexo != "m"){
            
            sexo = prompt ("Error. Ingrese el sexo : ");

        }   

        
        if (nota<notabaja || flag == 0 ){

            notabaja = nota;
            sexobajo = sexo;

            flag =1;
        }

        if(nota >=6 && sexo == "m"){

            contadorvarones++;

        }

        contador++ ;

        acumuladornota = acumuladornota + nota;

     }
        while (contador <5);

        promedionotas = acumuladornota/5;

        document.write ( "El promedio de las notas es : " + promedionotas + "<br>");
        document.write ( "La nota mas baja es: " + notabaja + " El sexo de la nota baja es: " + sexobajo + "<br>" );
        document.write ( "La cantidad de varones aprobados : " + contadorvarones + "<br>");

    

            
}


