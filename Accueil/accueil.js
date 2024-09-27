function toggleBar() {
  let form = document.getElementById("searchBar");
  form.classList.toggle("active");
}

//SLIDER
const slide = [
  "Blacksad-03-Ame rouge.jpg",
  "Elfes-01-Le crystal des Elfes bleus.jpg",
  "Trolls de Troy-05-Les mal‚fices de la thaumaturge.jpg",
];

let auteur = ["Juan Diaz Canales", "Kyko Duartes", "Christophe Arleston"];

let titre = ["Blacksad 03 ", "Efles", "Troll de Troy"];

let resumer = [
  "Finances et moral au plus bas, Blacksad est à Las Vegas où il travaille pour le compte d'un joueur fortuné. Pourtant une rencontre inattendue va bousculer sa nouvelle vie : un ami, Otto Lieber, scientifique de haut rang, est de passage dans la ville où a lieu une conférence sur le nucléaire",
  "Les Elfes bleus d'Ennlya, une petite ville portuaire du Nordrenn, ont tous été massacrés ! L'Elfe bleue Lanawyn et Turin, un homme réputé, enquêtent alors que toutes les pistes mènent vers un clan d'Yrlanais, ces Hommes du nord qui haïssent les Elfes",
  "Vous connaissez déjà Hébus, le célèbre troll de la série Lanfeust de troy... Vous allez faire la connaissance de son grand-père, le troll Tedräm, dont les aventures se déroulent plusieurs générations avant celles de Lanfeust"
]

let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero > slide.length - 1) numero = 0;
  if (numero < 0) numero = slide.length - 1;

  document.getElementById("slide").src = "/Accueil/Images/" + slide[numero];
  document.getElementById("Auteur").innerText = auteur[numero];
  document.getElementById("Titre").innerText = titre[numero];
  document.getElementById("resumer").innerText = resumer[numero];
}

setInterval("ChangeSlide(1)", 5000);

//Filtre sorties



////Slide en json
//fetch("accueil.json")
//  .then((rep) => {
//    return rep.json();
//  })
//
//  .then((data) => {
//    console.log("données récupérées :", data);
//
//    data.slide.forEach((slide) => {
//      AfficherTemplateSlide(slide);
//    });
//
//
//
//    let suivant = document.getElementById("suivant");
//    let precedent = document.getElementById("precedent");
//
//
//
//
//
//
//
//
//
//    function AfficherTemplateSlide(slide) {
//      let template = `
//        <div class="info" id="slide">
//       <h1>${slide.auteur}</h1>
//       <h2>${slide.titre}</h2>
//       <p>
//       ${slide.resume}
//       </p>
//       <button>En savoir plus</button>
//     </div>
//     <img src="${slide.img}" alt="" id="slide" />`;
//
//      console.log(template);
//
//      let madiv = document.getElementById("slider");
//      madiv.innerHTML += template;
//
//      let numero = 0;
//
//      function ChangeSlide(sens) {
//        numero = numero + sens;
//        if (numero > slide.length - 1) numero = 0;
//        if (numero < 0) numero = slide.length - 1;
//
//        document.getElementById("slide").src =
//          "/images/albums/" + slide[numero];
//      }
//    }
//  });
//
////FIN SLIDER
//
