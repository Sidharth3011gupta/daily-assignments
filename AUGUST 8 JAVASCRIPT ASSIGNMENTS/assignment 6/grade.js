var a=parseInt(prompt("Enter marks in first exam"));
var b=parseInt(prompt("Enter marks in second exam"));
var c=parseInt(prompt("Enter marks in third exam"));
var d=parseInt(prompt("Enter marks in fourth exam"));
var e=parseInt(prompt("Enter marks in fifth exam"));
avg=(a+b+c+d+e)/5;
if(avg>85)
{
    alert("A")
}
else if(avg<85 && avg>70)
{
    alert("B");
}
else if(avg>55 && avg<70){
    alert("C")
}
else if(avg>40 && avg<55)
{
    alert("D")
}
else{
    alert("FAILED,BETTER LUCK NEXT TIME")
}