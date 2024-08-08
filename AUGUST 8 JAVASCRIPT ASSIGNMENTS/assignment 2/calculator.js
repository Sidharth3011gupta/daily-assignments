var a,b,c;
a=parseInt(prompt("ENTER NUMBER one: "));
b=parseInt(prompt("ENTER NUMBER two:"));
alert("MENU\n1.ADDITION\n2.SUBTRACTION\n3.MULTIPLICATION\n4.DIVISION\n5.MODULUS");
choice=parseInt(prompt("ENTER YOUR CHOICE(1-5)"));
switch(choice)
{
    case 1:
        c=a + b;
        alert(c.valueOf());
        break;
        case 2:
            c=a - b;
            alert(c.valueOf());
            break;
            case 3:
                c=a * b;
                alert(c.valueOf());  break;
                case 4:
                    c=a / b;
                    alert(c.valueOf());
                    break;
                    case 5:
                        c=a % b;
                        alert(c.valueOf());
                        break;
                        default:
                            alert("WRONG CHOICE..........TRY AGAIN");
                            break;
}