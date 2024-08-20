let library = [];
localStorage.setItem("bookpalace",JSON.stringify(library))
document.getElementById('add-book-button').addEventListener('click', function() {

    const bookId = document.getElementById('book-id').value;
    const bookTitle = document.getElementById('book-title').value;
    const authorName = document.getElementById('author-name').value;

    if (bookId && bookTitle && authorName) {
        const book = {
            id: bookId,
            title: bookTitle,
            author: authorName,
            isBorrowed: false
        };
        library.push(book);
        displayBooks();
        alert('Book added successfully!');
    } else {
        alert('Please fill out all fields.');
    }
    localStorage.setItem("bookpalace",JSON.stringify(library))
const bookhub=JSON.parse(localStorage.getItem("library"))
});

function displayBooks() {
    localStorage.setItem("bookpalace",JSON.stringify(library))
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    library.forEach(book => {
        const bookEntry = document.createElement('div');
        bookEntry.className = 'book-entry';
        bookEntry.innerHTML = `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Status: ${book.isBorrowed ? 'Borrowed' : 'Available'} 
                               <button onclick="toggleBorrow('${book.id}')">${book.isBorrowed ? 'Return' : 'Borrow'}</button>`;
        bookList.appendChild(bookEntry);
        const bookhub=JSON.parse(localStorage.getItem("library"))
    });
}

function toggleBorrow(bookId) {
    localStorage.setItem("bookpalace",JSON.stringify(library))
    const book = library.find(item => item.id === bookId);
    if (book) {
        book.isBorrowed = !book.isBorrowed;
        displayBooks();
    let books=JSON.parse(localStorage.getItem("library"))
    }


}

document.getElementById('search-button').addEventListener('click', function() {
    const searchTitle = document.getElementById('search-title').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    const foundBooks = library.filter(book => book.title.toLowerCase().includes(searchTitle));
    if (foundBooks.length > 0) {
        foundBooks.forEach(book => {
            const resultEntry = document.createElement('div');
            resultEntry.innerHTML = `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Status: ${book.isBorrowed ? 'Borrowed' : 'Available'}`;
            searchResults.appendChild(resultEntry);
        });
    } else {
        searchResults.innerHTML = 'No books found.';
    }
    localStorage.setItem("bookpalace",JSON.stringify(library))
    let book=JSON.parse(localStorage.getItem("library"))
});
