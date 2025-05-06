
document.getElementById('generate-btn').addEventListener('click', async () => {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');

  quoteText.innerHTML = "<i>Fetching quote...</i>";
  quoteAuthor.textContent = "";

  try {
    const response = await fetch('https://qapi.vercel.app/api/random');
    const data = await response.json();

    quoteText.innerHTML = `<i>"${data.quote}"</i>`;
    quoteAuthor.textContent = ~`${data.author}`;
  } catch (error) {
    quoteText.innerHTML = "<i>Sorry, couldn't load a quote right now.</i>";
    quoteAuthor.textContent = "";
  }
});