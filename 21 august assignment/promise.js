const users=document.querySelector("#one")
const todos=document.querySelector("#three")
const posts = document.querySelector("#two")
const users2=document.querySelector("#four")
const todos2=document.querySelector("#five")
const posts2 = document.querySelector("#six")
//"FETCH API USING PROMISE AND ASYNC AWAIT"
//for users
const url = "https://jsonplaceholder.typicode.com/users"
 const result =fetch(url);
 result.then(result=>result.json()
 ).then((result)=>{console.log(result.slice(0,3))

    for(item of result.slice(0,3))
    {
        const ele = document.createElement("p");
        ele.innerHTML = JSON.stringify(item);
        users.appendChild(ele)
    }

 })
 .catch(err=>console.log(err))

//for posts
 const url2 = "https://jsonplaceholder.typicode.com/posts"
 const result2 =fetch(url2);
 result2.then(result2=>result2.json()
 ).then((result2)=>{console.log(result2.slice(0,3))
 for(item of result2.slice(0,3))
    {
        const elem = document.createElement("p");
        elem.innerHTML = JSON.stringify(item);
        posts.appendChild(elem)
    }
}
)
 .catch(err=>console.log(err))


//for todos 
const url3 = "https://jsonplaceholder.typicode.com/todos"
const result3 =fetch(url3);
result3.then(result3=>result3.json()
).then((result3)=>{console.log(result3.slice(0,3))
    for(item of result3.slice(0,3))
       {
           const eleme = document.createElement("p");
           eleme.innerHTML = JSON.stringify(item);
           todos.appendChild(eleme)
       }
   }
   )
.catch(err=>console.log(err))


//for users
    async function getData(){
    const result =await fetch(url);
    const data = await result.json();
    return data;
 }
 getData().then((result)=>{console.log(result.slice(4,7))

    for(item of result.slice(4,7))
    {
        const ele = document.createElement("p");
        ele.innerHTML = JSON.stringify(item);
        users2.appendChild(ele)
    }

 })
 
//for posts

async function getData2(){
   const result2 =await fetch(url2);
   const data2 = await result2.json();
   return data2;
}
getData2().then((result2)=>{console.log(result2.slice(4,7))
    for(item of result2.slice(4,7))
       {
           const elem = document.createElement("p");
           elem.innerHTML = JSON.stringify(item);
           posts2.appendChild(elem)
       }
   }
   )

//for todos

async function getData3(){

   const result3 =await fetch(url3);
   const data3 = await result3.json();
  return data3;
}
getData3().then((result3)=>{console.log(result3.slice(4,7))
    for(item of result3.slice(4,7))
       {
           const eleme = document.createElement("p");
           eleme.innerHTML = JSON.stringify(item);
           todos2.appendChild(eleme)
       }
   }
   )
