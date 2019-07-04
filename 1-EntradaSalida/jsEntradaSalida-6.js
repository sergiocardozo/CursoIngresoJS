/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{   var num1;
    var num2;
    var suma;

    num1 = parseInt (document.getElementById("numeroUno").value); //LEO LA CAJA DE TEXTO SUPERIOR Y LO CONVIERTO A ENTERO
    num2 = parseInt (document.getElementById("numeroDos").value); //*forma abreviada se puede hacer de ambas maneras*//

suma = num1 + num2;

alert("La suma es " + suma);
}

