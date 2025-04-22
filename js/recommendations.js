 // Function to fetch books from Google Books API
 async function fetchBooks() {
    const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=20';
    try {
      // Fetch books from the API
      const response = await fetch(apiUrl);

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON data
      const data = await response.json();

      // Log the response data for debugging purposes
      console.log("API Response:", data);

      // Get books from the data
      const books = data.items;

      // Get the book container where we will insert the books
      const bookContainer = document.getElementById('book-container');

      // Check if books are available in the response
      if (books && books.length > 0) {
        // Loop through books and create HTML structure for each book
        books.forEach(book => {
          const bookCard = document.createElement('div');
          bookCard.classList.add('card', 'small');  // Use Materialize's card class

          // Create a card with book details
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

          // Add event listener to toggle between title/image and description
          bookCard.addEventListener('click', function () {
            const image = bookCard.querySelector('.card-image');
            const title = bookCard.querySelector('.card-title');
            const description = bookCard.querySelector('.card-description');

            // Toggle the display of title/image and description
            if (description.style.display === 'none' || description.style.display === '') {
              image.style.display = 'none';  // Hide image
              title.style.display = 'none';  // Hide title
              description.style.display = 'block';  // Show description
            } else {
              image.style.display = 'block';  // Show image
              title.style.display = 'block';  // Show title
              description.style.display = 'none';  // Hide description
            }
          });

          // Append each book card to the container
          bookContainer.appendChild(bookCard);
        });
      } else {
        console.error('No books found in the API response.');
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  // Ensure the DOM is fully loaded before running the fetchBooks function
  window.onload = function () {
    fetchBooks();
  };