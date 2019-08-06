function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var temperaturapar = 0;
    var acumtemp = 0;
    var marcapeso;
    var promediocero;
    var prompeso = 0;
    var maximo;
    var minimo;
    var seguir;
    var flag = 0;
    var contador = 0;
    var acumutotal = 0;

   do {
       
        marca = prompt ("Ingrese una marca ");
        peso = parseInt (prompt ("Ingrese el peso del producto : "));
        while ( peso <1 || peso > 100 || isNaN (peso)){
        
            peso = parseInt (prompt ("Error. Reingrese el peso del producto : "));
        }
        
            temperatura = parseInt ( prompt ("Ingrese la temperatura del producto: "));
            while ( temperatura < -30 || temperatura >30 || isNaN (temperatura)){
        
             temperatura = parseInt ( prompt ("Error. Reingrese la temperatura del producto: "));
             }
             
             // ----------------------- TEMPERATURAS PARES ---------------------------------------------//
        if ( temperatura % 2 == 0 ){
            
            temperaturapar++;

        }
            // ------------------------- producto pesado -----------------------------------//

        if ( peso > maximo || flag == 0){
            maximo = peso;
            marcapeso = marca;
            
        }
        if ( peso < minimo || flag == 0){
            minimo = peso;
            flag = 1;

        }
                // ------------------------- temperatura menor a 0 grados ----------------------------//
        if ( temperatura < 0 ) {
            temperatura--;

        }

        acumutotal =acumutotal + peso;
        contador++;
        
        seguir = prompt ( "Desea seguir ingresando productos? s o n :");
    }
    while (seguir == "s" )  

    if (prompeso == 0){

        prompeso = acumutotal / contador;

    }
    else { 
        promediopeso = 0;

    }

    document.write ( "La cantidad de temperaturas pares. " + temperaturapar + " <br>");
    document.write ( "La marca del producto más pesado " + marcapeso + "<br>");
    document.write ( "La cantidad de productos que se conservan a menos de 0 grados.  " + temperatura + "<br>");
    document.write ( "El promedio del peso de todos los productos. " +  prompeso + "<br>");
    document.write ( "El peso máximo" + maximo + " y el mínimo. " + minimo + "<br>");
}

