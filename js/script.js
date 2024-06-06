hrv=document.querySelector("#hrv");
hrv.addEventListener('click',()=>{ 
    document.getElementById("content2").style.display = "none";           
    document.getElementById("content1").style.display = "block";
                                 });
if (userInput == '1') {
    document.getElementById("content2").style.display = "none";
    document.getElementById("content1").style.display = "block";
} else if (userInput == '2') {
    document.getElementById("content1").style.display = "none"; 
    document.getElementById("content2").style.display = "block"; 
}
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
document.getElementById("generate-btn").addEventListener("click", generateRandomQuote);