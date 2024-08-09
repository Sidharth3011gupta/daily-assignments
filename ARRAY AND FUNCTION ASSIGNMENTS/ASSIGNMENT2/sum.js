let a=[12,344,455,"array",34,"jammu"];
sum=0;
console.log(typeof a);

for(let i=0;i<a.length;i++){

if(typeof(a[i]) == 'number')
{
    console.log(a[i]);
    
    sum=sum+a[i];
}
}
alert(sum);