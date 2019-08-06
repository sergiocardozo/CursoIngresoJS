function mostrar()
{
    var letra;
    var letranegativos;
    var letrapositivos;
    var numero;
    var seguir;
    var numerospares = 0;
    var numerosimpares = 0;
    var cantidadceros = 0;
    var contadorpositivos = 0;
    var promedionumerospositivos;
    var sumanegativos =0;
    var maximo;
    var minimo;
    var acumpositivos = 0;
    var flag = 0;

            do { 
                    letra = prompt ("Ingrese una letra : ");
                    
                    while ( ! (isNaN(letra) )) {
                        
                        letra = prompt ("Error. ingrese una letra correcta : ");
                }
                    numero = parseInt( prompt ("Ingrese un numero : "));
                    
                    while ( numero < -100 || numero > 100 || isNaN(numero)) {
                        
                        numero = parseInt( prompt ("Error. Reingrese un numero : "));

                    }

                if ( numero % 2 == 0){

                    numerospares++;                    
                }
                else {
                    numerosimpares++;

                }
                if ( numero == 0 ){

                    cantidadceros++;
                }
                if ( numero >= 0){

                    contadorpositivos++;

                    acumpositivos = contadorpositivos + numero;

                }
                else{
                    sumanegativos = sumanegativos + numero;

                }

                if(numero > maximo || flag == 0 ){

                    maximo = numero;
                    letrapositivos = letra;
                    flag = 0;

                }
                if (numero < minimo || flag == 0){
                    minimo = numero;
                    letranegativos = letra;
                    flag = 1;

                }

             seguir = prompt ("Desea seguir ingresando s o n: ");
            }
            while (seguir == "s")

        if (acumpositivos > 0){

            promedionumerospositivos = acumpositivos / contadorpositivos;
            
        }
        else { 
            promedionumerospositivos = 0;

        }
            
        document.write("La cantidad de numeros pares" + numerospares + "<br>");
        document.write("La cantidad de números impares." + numerosimpares + "<br>");
        document.write("La cantidad de ceros." + cantidadceros + "<br>");
        document.write("El promedio de todos los números positivos ingresados." + promedionumerospositivos + "<br>");
        document.write("La suma de todos los números negativos. " + sumanegativos + " <br>");
        document.write(+ letrapositivos + ", " + maximo + " , " + letranegativos + " , " + minimo + "<br>");

        



}



