var c;
let a=parseInt(prompt("ENTER FIRST NUMBER"));
let b=parseInt(prompt("ENTER SECOND NUMBER"));
let choice=parseInt(prompt("ENTER YOUR CHOICE(1-4)\nMENU\n1.ADDITION\n2.SUBTRACTION\n3.MULTIPLICATION\n4.DIVISION\n"));
function addition(a,b){
    c=a+b;
    alert(c);
}
function subtraction(a,b){
    c=a-b;
    alert(c);
}
function multiplication(a,b){
    c=a*b;
    alert(c);
}
function division(a,b){
    c=a/b;
    alert(c);

}
switch(choice){
    case 1:
        addition(a,b);
        // alert(c.valueof())
        break;
        case 2:
            subtraction(a,b);
            // alert(c.valueof())
            break;
            case 3:
                multiplication(a,b);
                // alert(c.valueof())
                break;
                case 4:
                    division(a,b);
                    // alert(c.valueof())
                    break;
                    default:
                        alert("WRONG CHOICE......TRY AGAIN");      
}
