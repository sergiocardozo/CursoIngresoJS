function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var seguir;
    var temperpar = 0;
    var acumtemper = 0;
    var marcapesada;
    var tempercero = 0;
    var prompeso = 0;
    var maximo;
    var minimo;
    var acumulador = 0;
    var acumtotal= 0;
    var contador = 0;
    var flag = 0;

    do { 
        marca = prompt ("Ingrese una marca");

        peso = parseInt ( prompt ("Ingrese el peso: "));
        
        while ( peso <1 || peso >100 || isNaN (peso)){  // mientras el dato no sea valido (!( peso >= 1 && peso <= 100))
                                                        // mientras el dato sea valido ( peso <1 || peso >100 || isNaN (peso))
            peso = parseInt ( prompt ("Error. Ingrese el peso: "));

        }

        temperatura = parseInt ( prompt ("Ingrese una temperatura:"));
        
        while ( temperatura < -30 || temperatura >30 || isNaN (temperatura )){

            temperatura = parseInt ( prompt ("Ingrese una temperatura:"));
        }

        if (temperatura % 2 == 0) {

            temperpar++;
            
        }
        if (peso > maximo || flag == 0){

            maximo = peso;
            marcapesada = marca;
        }
        if ( peso < minimo || flag == 0) {

            minimo = peso;
            marcapesada = marca;
            flag = 1;

        }

        if (temperatura < 0) {

            tempercero++;

        }

        acumtotal = acumtotal + peso;
        contador++;
        

        seguir = prompt ("Desea continuar ? :");
    } 
    while (seguir == "s")

    if (prompeso == 0){

        prompeso = acumtotal / contador;

    }
    else { 
        prompeso = 0;
        }

document.write ("La cantidad de temperaturas pares." + temperpar + "<br>");
document.write ("La marca del producto más pesado" + marcapesada + "<br>");
document.write ("La cantidad de productos que se conservan a menos de 0 grados." + tempercero + "<br>");
document.write ("El promedio del peso de todos los productos." + prompeso + "<br>");
document.write ("El peso máximo " + maximo + "<br>" + "El peso minimo " + minimo);







}

/*Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e 
informar al terminar el ingreso por document.write:
a) 
b) 
c) 
d) 
f)  y el mínimo. */