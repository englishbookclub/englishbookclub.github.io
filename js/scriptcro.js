/*let globalData=JSON.parse(localStorage.getItem("data"));
let veliki=document.querySelector('.veliki');
console.log(veliki);
veliki.innerHTML="";
globalData.forEach((e)=>{
    veliki.innerHTML+=`  <div class="jedinica">
    <div class="card-container">
    <div class="kartica">
       <div class="image-container">
         <br>
      <img src=${e.slika} alt="scarlet_letter">
       </div>
      <div class="content">
        <h2>${e.naslov}</h2>
        <p>${e.opis}</p>
      </div>
    </div>
    </div>
    </div>`;
});*/

userInput=1;
quotes = [
   { text: "Čitatelj živi tisuću života prije nego što umre. Čovjek koji nikad ne čita živi samo jedan.", autor: "George R.R. Martin" },
   { text: "Misli prije nego što kažeš. Čitaj prije nego što budeš mislio.", autor: "Fran Lebowitz" },
   { text: "Osjećam se slobodno i snažno. Da nisam čitač knjiga ne bih se mogao ovako osjećati.", autor: "Walter Tevis" },
   { text: "Svaka knjiga je živ um, otkriveni život, svijet koji čeka na istraživanje.", autor: "Dean Kontz" },
   { text: "Um treba knjige kao što mač treba brus, ako želi zadržati oštricu.", autor: "George R.R. Martin" },
 ];

document.getElementById("content1").style.display = "none"; 
document.getElementById("content2").style.display = "block"; 
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
function generateRandomQuoteA() {
const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];
document.getElementById("quote").innerHTML = `<p class="tekst"><i>"${randomQuote.text}" <p class="lik">${randomQuote.autor}</p></i>`;
}
document.getElementById("generate-btna").addEventListener("click", generateRandomQuoteA);



