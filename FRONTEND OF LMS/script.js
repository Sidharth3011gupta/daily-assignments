const API_URL = 'https://lms-backend-zecn.onrender.com/api';

async function fetchBooks() {
    try {
        const response = await fetch(`${API_URL}/books`);
        if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
        const books = await response.json();
        renderBookList(books);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

function renderBookList(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach( (book)=> {
        const bookEntry = document.createElement('div');
        bookEntry.className = 'book-entry';
        bookEntry.innerHTML = `
            <strong>Title:</strong> ${book.title} <br>
            <strong>Author:</strong> ${book.author} <br>`;

      
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        editButton.addEventListener('click', () => editBook(book._id));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => deleteBook(book._id));

        const toggleButton = document.createElement('button');
        
        
        toggleButton.innerHTML = book.isBorrowed ? 'Return' : 'Borrow';
        toggleButton.className = 'toggle-button';
        toggleButton.addEventListener('click', async() => {
           
   
            await toggleBorrowReturn(book._id,book.isBorrowed)
        });


        bookEntry.appendChild(editButton);
        bookEntry.appendChild(deleteButton);
      bookEntry.appendChild(toggleButton);
        bookList.appendChild(bookEntry);
    });
}


async function addBook() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('author-name').value;

    try {
        const response = await fetch(`${API_URL}/addbooks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, borrowed: false }) // Set default borrow status
        });
        if (!response.ok) throw new Error('Failed to add book');
        fetchBooks();
        clearInputFields();
    } catch (error) {
        console.error('Error adding book:', error);
    }
}

async function editBook(id) {
    const newTitle = prompt('Enter new title:');
    const newAuthor = prompt('Enter new author:');

    try {
        const response = await fetch(`${API_URL}/updatebooks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: newTitle, author: newAuthor })
        });
        if (!response.ok) throw new Error('Failed to update book');
        fetchBooks();
    } catch (error) {
        console.error('Error editing book:', error);
    }
}

async function deleteBook(id) {
    try {
        const response = await fetch(`${API_URL}/deletebooks/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete book');
        fetchBooks();
    } catch (error) {
        console.error('Error deleting book:', error);
    }
}
async function toggleBorrowReturn(id, borrowedStatus) {
    try {
       
        const response = await fetch(`${API_URL}/updatebooks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isBorrowed: borrowedStatus })
        });
        if (!response.ok) throw new Error('Failed to toggle borrow/return status');
        fetchBooks(); 
      
    } catch (error) {
        console.error('Error toggling borrow/return:', error);
    }
}

function clearInputFields() {
    document.getElementById('book-title').value = '';
    document.getElementById('author-name').value = '';
}

document.getElementById('add-book-button').addEventListener('click', addBook);

fetchBooks();
