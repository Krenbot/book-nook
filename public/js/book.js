const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#project-name').value.trim();
    const author = document.querySelector('#project-funding').value.trim();
    const isbn = document.querySelector('#project-desc').value.trim();
    const pages = document.querySelector('#project-desc').value.trim();

    if (title && author && isbn && pages) {
        const response = await fetch(`/api/books`, {
            method: 'POST',
            body: JSON.stringify({ title, author, isbn, pages }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert('Failed to add book');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('delBookButton')) {
        const id = event.target.getAttribute('delBookButton');

        const response = await fetch(`/api/books/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert('Failed to delete book');
        }
    }
};

document
    .getElementById('#newBookButton')
    .addEventListener('click', newFormHandler);

document
    .getElementById('#delBookButton')
    .addEventListener('click', delButtonHandler);