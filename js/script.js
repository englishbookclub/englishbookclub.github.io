
quotez = [
    { text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.", autor: "George R.R. Martin" },
    { text: "Think before you speak. Read before you think.", autor: "Fran Lebowitz" },
    { text: "I feel free and strong. If I were not a reader of books I could not feel this way.", autor: "Walter Tevis" },
    { text: "Each book is a mind alive, a life revealed, a world awaiting exploration.", autor: "Dean Kontz" },
    { text: "A mind needs books as a sword needs a whetstone, if it is to keep its edge.", autor: "George R.R. Martin" },
];
document.getElementById("content2").style.display = "none"; document.getElementById("content1").style.display = "block"; 
function generateRandomQuote() {
const randomIndex = Math.floor(Math.random() * quotez.length);
const randomQuote = quotez[randomIndex];
document.getElementById("quote").innerHTML = `<p class="tekst"><i>"${randomQuote.text}" <p class="lik">${randomQuote.autor}</p></i>`;
}
document.getElementById("generate-btn").addEventListener("click", generateRandomQuote);