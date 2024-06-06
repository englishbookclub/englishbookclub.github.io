userInput=2;
quotez = [
         { text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.", autor: "George R.R. Martin" },
         { text: "Think before you speak. Read before you think.", autor: "Fran Lebowitz" },
         { text: "I feel free and strong. If I were not a reader of books I could not feel this way.", autor: "Walter Tevis" },
         { text: "Each book is a mind alive, a life revealed, a world awaiting exploration.", autor: "Dean Kontz" },
         { text: "A mind needs books as a sword needs a whetstone, if it is to keep its edge.", autor: "George R.R. Martin" },
];
document.getElementById("content2").style.display = "none"; document.getElementById("content1").style.display = "block"; 
function updateContent() {
  const userInput = prompt("Enter '1' for English or '2' for Croatian! :)");
  if (userInput == '1') {
      document.getElementById("content2").style.display = "none";
      document.getElementById("content1").style.display = "block";
  } else if (userInput == '2') {
      document.getElementById("content1").style.display = "none"; 
      document.getElementById("content2").style.display = "block";
  } else {
      alert("Invalid input. Please enter '1' or '2'.");
  }
}
function updateContentCRO() {
  const userInput = prompt("Upišite 1 za Engleski ili 2 za Hrvatski! :)");
  if (userInput == '1') {
      document.getElementById("content2").style.display = "none";
      document.getElementById("content1").style.display = "block";
  } else if (userInput == '2') {
      document.getElementById("content1").style.display = "none"; 
      document.getElementById("content2").style.display = "block";
  } else {
      alert("Nevažeći unos. Molimo unesite '1' ili '2'.");
  }
}
function generateRandomQuote() {
const randomIndex = Math.floor(Math.random() * quotez.length);
const randomQuote = quotez[randomIndex];
document.getElementById("quote").innerHTML = `<p class="tekst"><i>"${randomQuote.text}" <p class="lik">${randomQuote.autor}</p></i>`;
}
document.getElementById("generate-btn").addEventListener("click", generateRandomQuote);