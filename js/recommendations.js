  async function fetchBooks() {
    const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=20';
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("API Response:", data);
      const books = data.items;
      const bookContainer = document.getElementById('book-container');
      if (books && books.length > 0) {
        books.forEach(book => {
          const bookCard = document.createElement('div');
          bookCard.classList.add('card', 'small'); 
          const bookCover = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150';
          const bookTitle = book.volumeInfo.title;
          const bookDescription = book.volumeInfo.description ? book.volumeInfo.description : 'No description available.';

          bookCard.innerHTML = `
            <div class="card-image">
              <img src="${bookCover}" alt="${bookTitle}">
            </div>
            <div class="card-content">
              <span class="card-title">${bookTitle}</span>
            </div>
            <div class="card-description">
              <p>${bookDescription}</p>
            </div>
          `;
          bookCard.addEventListener('click', function () {
            const image = bookCard.querySelector('.card-image');
            const title = bookCard.querySelector('.card-title');
            const description = bookCard.querySelector('.card-description');
            if (description.style.display === 'none' || description.style.display === '') {
              image.style.display = 'none'; 
              title.style.display = 'none';
              description.style.display = 'block';
            } else {
              image.style.display = 'block'; 
              title.style.display = 'block';
              description.style.display = 'none'; 
            }
          });
          bookContainer.appendChild(bookCard);
        });
      } else {
        console.error('No books found in the API response.');
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }
  window.onload = function () {
    fetchBooks();
  };