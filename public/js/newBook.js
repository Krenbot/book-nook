const newBookHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#newBookTitle').value.trim();
    const author = document.querySelector('#newBookAuthor').value.trim();
    const isbn = document.querySelector('#newBookISBN').value.trim();

    
  
    if (title && author && isbn) {
      const response = await fetch(`/api/addBook`, {
        method: 'POST',
        body: JSON.stringify({ title, author, isbn }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert('Failed to create new Book');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/book/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/book');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.newBookForm')
    .addEventListener('submit', newBookHandler);
  
  