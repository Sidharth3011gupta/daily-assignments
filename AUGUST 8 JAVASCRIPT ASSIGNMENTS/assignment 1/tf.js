let ch=parseInt(prompt("ENTER YOUR CHOICE\nPRESS 1 FOR STRING \nPRESS 2 FOR NUMBER"));
if(ch==1){
let a=prompt("Enter any string");
if(Boolean(a))
{
    alert("TRUTHY VALUE");
}
else{
    alert("FALSY VALUE");
}
}
else if(ch==2){
    let b=parseInt(prompt("Enter any number"));
if(Boolean(b))
    {
        alert("TRUTHY VALUE");
    }
    else{
        alert("FALSY VALUE");
    }
}
else
{
    alert("Wrong choice...try again");
}