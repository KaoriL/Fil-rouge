function toggleBar() {
  let form = document.getElementById("searchBar");
  form.classList.toggle("active");
}



  //SLIDER
const slide = [
  "Blacksad-03-Ame rouge.jpg",
  "Elfes-01-Le crystal des Elfes bleus.jpg",
  "Trolls de Troy-05-Les mal,fices de la thaumaturge.jpg",
];

let auteur = ["Juan Diaz Canales", "Kyko Duartes", "Christophe Arleston"];
//slide[0]="Blacksad-03-Ame rouge.jpg";
//slide[1]="Elfes-01-Le crystal des Elfes bleus.jpg";
//slide[2]="Trolls de Troy-05-Les mal‚fices de la thaumaturge.jpg";

let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero > slide.length - 1) numero = 0;
  if (numero < 0) numero = slide.length - 1;


  document.getElementById("slide").src = "/Accueil/Images/" + slide[numero];

}

setInterval("ChangeSlide(1)", 4000);

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
