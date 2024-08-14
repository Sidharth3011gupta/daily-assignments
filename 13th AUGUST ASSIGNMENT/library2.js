const library=[];
localStorage.setItem("bookpalace",JSON.stringify(library))

function addBook(id, title, author){
    library.push({
        id:id,
        title:title,
        author:author,
        isBorrowed:false,
    });
    localStorage.setItem("bookpalace",JSON.stringify(library))
}
function borrowBook(id)
{
    const bookhub=JSON.parse(localStorage.getItem("library"))
    const bookdetails = bookhub.find((item)=>item.id===id);
    if(bookdetails.isBorrowed)
    {
        return console.log(`${bookdetails.title} is Not Available`)
    }
    else{
        bookdetails.isBorrowed = true;
        localStorage.setItem("bookpalace",JSON.stringify(library))
    }
}

function returnBook(id)
{
    const bookdetails = library.find((item)=>item.id===id);
    bookdetails.isBorrowed = false;
    localStorage.setItem("bookpalace",JSON.stringify(library))
}
function listAvailableBooks(){
    for(item of library)
    {
        if(item.isBorrowed === false)
        {
            console.log(item.id,item.title,item.author)
        }
    }
    const bookhub=JSON.parse(localStorage.getItem("library"))
}

function searchBook(title){
     const bookhub=JSON.parse(localStorage.getItem("library"));
    const bookdetails = library.find((item)=>item.title===title);
    if(bookdetails)
    {
        console.log(bookdetails)
    }
    else 
    {
        return null;
    }
}

addBook(1,"RICH DAD POOR DAD","CLARKE")
addBook(2,"ON THE MONEY","SHAHEEN")
addBook(3,"IMPROVE YOUR POWER OF LISTENING","WILLIAMS")
addBook(4,"INSTA MILLIONAIRE","JIM")
bookhub=JSON.parse(localStorage.getItem("library"))
console.log(library);

console.log("NEW BOOK ADDED\n")
addBook(5,"A BIILION DREAMS","SACHIN");
bookhub=JSON.parse(localStorage.getItem("library"));
console.log(library);
console.log("\nNEW BOOK ADDED\n")
-addBook(6,"MY LIFE-A ROLLERCOASTER RIDE","ROBERT");
bookhub=JSON.parse(localStorage.getItem("library"));
console.log(library);
console.log("_____________________________")
borrowBook(2);
listAvailableBooks();
console.log("_____________________________")
borrowBook(1);
listAvailableBooks();
console.log("_____________________________")
returnBook(2);
listAvailableBooks();
console.log("_____________________________")
searchBook("MY LIFE-A ROLLERCOASTER RIDE")
console.log("_____________________________")

