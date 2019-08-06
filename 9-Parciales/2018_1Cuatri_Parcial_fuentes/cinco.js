function mostrar()
{

    var planetas;

    planetas = prompt (planetas);

    
    switch (planetas) {

        case "mercurio" :
        case "venus" :
            alert ("Aca hace mas calor!");
            break;
        case "tierra" :
            alert ("Aca vivimos!");
            break;
        
        case "marte" :
        case "jupiter" :
        case "saturno" :
        case "urano" :
        case "neptuno" :
            alert ("aca hace mas frio");
            break;
        default :
            alert ("no es un planeta");
            
        
    }

}
