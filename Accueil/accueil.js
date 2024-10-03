

function toggleBar() {
  let form = document.getElementById("searchBar");
  form.classList.toggle("active");
}

//SLIDER
const slide = [
  "Blacksad-03-Ame rouge.jpg",
  "Elfes-01-Le crystal des Elfes bleus.jpg",
  "Trolls de Troy-05-Les mal‚fices de la thaumaturge.jpg",
  "Finn-01-La forˆt suspendue.jpg"
];

let auteure = ["Juan Diaz Canales", "Kyko Duartes", "Christophe Arleston","Arnaud Leterrier"];

let titre = ["Blacksad 03 ", "Efles", "Troll de Troy","Finn"];

let resumer = [
  "Finances et moral au plus bas, Blacksad est à Las Vegas où il travaille pour le compte d'un joueur fortuné. Pourtant une rencontre inattendue va bousculer sa nouvelle vie : un ami, Otto Lieber, scientifique de haut rang, est de passage dans la ville où a lieu une conférence sur le nucléaire",
  "Les Elfes bleus d'Ennlya, une petite ville portuaire du Nordrenn, ont tous été massacrés ! L'Elfe bleue Lanawyn et Turin, un homme réputé, enquêtent alors que toutes les pistes mènent vers un clan d'Yrlanais, ces Hommes du nord qui haïssent les Elfes",
  "Vous connaissez déjà Hébus, le célèbre troll de la série Lanfeust de troy... Vous allez faire la connaissance de son grand-père, le troll Tedräm, dont les aventures se déroulent plusieurs générations avant celles de Lanfeust",
];

let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero > slide.length - 1) numero = 0;
  if (numero < 0) numero = slide.length - 1;

  document.getElementById("slide").src = "/Accueil/Images/" + slide[numero];
  document.getElementById("Auteur").innerText = auteure[numero];
  document.getElementById("Titre").innerText = titre[numero];
  document.getElementById("resumer").innerText = resumer[numero];
}

setInterval("ChangeSlide(1)", 5000);

//Filtre sorties
/////////////Fonction pour afficher le nom des serie


// Lecture d'un album
console.log("Lecture d'un album");
var album = albums.get("5");
var serie = series.get(album.idSerie);
var auteur = auteurs.get(album.idAuteur);
console.log(album.titre+" "+serie.nom+" "+auteur.nom);


console.log("Liste des albums");

