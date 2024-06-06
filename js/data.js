let data=[
  {naslov:"Great expectations",
  slika:"slike/great.jpg",
  opis:`"U Puritanskom gradu Bostonu, jedno grimizno slovo "A" označava ženu kao izopćenicu. Hester Prynne, koju društvo izbjegava zbog svoje zabranjene strasti, bori se s težinom svog grijeha dok nastoji zaštititi identitet svog tajnog ljubavnika. Dok napetosti rastu i tajne se razotkrivaju, "Scarlet Letter" razotkriva uzbudljivu priču o ljubavi,izdaji i trajnoj snazi ljudskog duha."`},
  {naslov:"Scarlet letter",
  slika:"slike/scarlet.jpg",
  opis:"Onako..."} ,
  {naslov:"Harry Potter",
  slika:"slike/musko.png",
  opis:"Brezveze"}
];
localStorage.setItem("data", JSON.stringify(data));