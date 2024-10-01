function toggleBar() {
    let form = document.getElementById("searchBar");
    form.classList.toggle("active");
  }


  //Liste bd

  //Filtre Rechercche

  //Template image

  // Slide liste bd 

  const slide = [
    "Blacksad-03-Ame rouge.jpg",
    "Elfes-01-Le crystal des Elfes bleus.jpg",
    "Trolls de Troy-05-Les mal‚fices de la thaumaturge.jpg",
  ];
  
  let auteur = ["Juan Diaz Canales", "Kyko Duartes", "Christophe Arleston"];
  
  let titre = ["Blacksad 03 ", "Efles", "Troll de Troy"];

  let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero > slide.length - 1) numero = 0;
  if (numero < 0) numero = slide.length - 1;

  document.getElementById("bd").src = "/.vscode/0_assets/BD/albumsMini/" + slide[numero];
  document.getElementById("Auteur").innerText = auteur[numero];
  document.getElementById("Titre").innerText = titre[numero];
  
}

console.log(slide);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          f


  //Bouton retour 

  
  