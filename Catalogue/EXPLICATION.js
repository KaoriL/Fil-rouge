
/*

Tout d'abord, n'oubliez pas d'inclure dans votre fichier HTML les fichiers JavaScript contenant les données :


        <!-- les fichiers JavaScript qui contiennent les données  -->

        <script src="../0_assets/BD/data/albums.js"></script>
        <script src="../0_assets/BD/data/auteurs.js"></script>
        <script src="../0_assets/BD/data/series.js"></script> 


        <!-- Utiliser ce script pour faire correspondre les images avec les albums dans l'application -->

        <script src="../0_assets/BD/albumsMini/titres_Images.js"></script>



    Voici un aperçu de chaque fichier :


    albums.js   =====>  var albums = new Map();

                        albums.set("1", {titre: "Croc vert", numero: "23", idSerie: "6", idAuteur: "13", prix: "24.50"});


    auteurs.js   =====> var auteurs = new Map();

                        auteurs.set("8", {nom: "Gaudin, Danard"});


    series.js   =====>  var series = new Map();

                        series.set("2", {nom: "Spirou et Fantasio"});



    titres_Images.js    =====>    const TITRES_IMAGES = [ "Arkezone-01-Le dôme.jpg", "Astérix- les Goths.jpg", ... ]

*/



// #######################################################################################


// À partir de maintenant, nous pouvons travailler avec les albums, les auteurs et les séries


console.log( albums );           // Map(530) {'1' => {…}, '2' => {…}, '3' => {…}, '4' => {…}, '6' => {…}, …}

console.log( typeof albums );    // object




// *********************      allbum            *********************


// Récupérer l'album avec l'identifiant "1"

console.log(albums.get("1"));                        //  { titre: 'Croc vert', numero: '23', idSerie: '6', idAuteur: '13', prix: '24.50' }


// Récupérer le titre de l'album avec l'identifiant "1"

console.log(albums.get("1").titre);                  // Croc vert

console.log(albums.get("1").prix);                   // 24.50



// *********************      auteurs            *********************


// Récupérer l'auteur avec l'identifiant "8"

console.log(auteurs.get("8"));                      //  { nom: 'Gaudin, Danard' }


// Récupérer le nom de l'auteur avec l'identifiant "8"

console.log(auteurs.get("8").nom);                  //  Gaudin, Danard



// *********************       Album et auteur liés          *********************



// Pour (( l'album )) avec l'identifiant "1", récupérer l'identifiant de (( l'auteur )) associé


let idAuteur  = albums.get("1").idAuteur; 

console.log(idAuteur)   // 13


// Récupérer le nom de cet auteur    

let nomAuteur  = auteurs.get(idAuteur).nom

console.log(nomAuteur );                // Franquin, Batem, Colman




// *********************      Album et série liés           *********************



let id_series = albums.get("1").idSerie; 



console.log(  series.get(id_series).nom  );          //  Marsupilami



// #######################################################################################



// Exercice : Afficher les 3 premiers albums  


// Rappelle =====>  albums.set (  "1"    ,   { titre : "Croc vert" , numero : "23" , idSerie : "6" , idAuteur : "13" , prix : "24.50"  }   ) 


const nombreAlbumsAAfficher  = 3;

let compteur  = 0;


for ( let [id, album] of albums) 
{

    if ( compteur  < nombreAlbumsAAfficher ) 
    {

        // Récupère l'auteur de l'album

        const auteur = auteurs.get(album.idAuteur);


        // Récupère la série de l'album

        const serie  = series.get(album.idSerie);



        // Ex de resultat : 

        console.log(`\nAlbum ${compteur + 1}`);                         //  Album 1

        console.log('---------------------------');

        console.log(`Titre: ${ album.titre }`);                         // Titre: Croc vert

        console.log(`Numéro: ${ album.numero }`);                       // Numéro: 23

        console.log(`Prix: ${ album.prix } €`);                         // Prix: 24.50 €


        console.log(`Série: ${ serie.nom }`);                           // Série: Marsupilami

        console.log(`Auteur: ${ auteur.nom }`);                         // Auteur: Franquin, Batem, Colman


        console.log('---------------------------\n');

        compteur++;
    }
}


// #######################################################################################


/*

    Problème pour trouver l'image :


    Dans    "../0_assets/BD/albumsMini"     il y a une centaine d'images. 


    Le souci est que lorsque l'on prend un titre comme   "Croc vert"   (récupéré avec le map des albums), 
    
        et que l'on cherche dans le dossier des images, on trouve que la photo correspondante s'appelle   "Marsupilami-23-Croc vert" 


    L'image est présente, mais son nom ne correspond pas exactement au titre.


    Il existe donc un fichier dans   "../0_assets/BD/albumsMini/titres_Images.js"   qui contient une liste de noms de toutes les images.


    Avec la fonction ci-dessous, nous pouvons trouver l'image correspondant au titre donné.


*/



/**
     * Fonction pour trouver l'image correspondant au livre
     * 
     * @param  {string} titreAlbum - Le titre de l'album à rechercher
     *
 */


function findImageForAlbum(titreAlbum) 
{     
    
    const defaultImage = `https://via.placeholder.com/120x150.png?text=Pas+d'image`;


    // Parcourir toutes les images dans le tableau "TITRES_IMAGES de "titres_Images.js" 

    for (let cheminImage  of TITRES_IMAGES) {


        let cheminImageMinuscule   = cheminImage.toLowerCase();       // Convertit le nom de l'image en minuscules

        let titreMinuscule         = titreAlbum.toLowerCase();        // Convertit le titre de l'album en minuscules    


        // Vérifier si le nom de l'image (qui peut être assez long) contient le titre de l'album

        if (cheminImageMinuscule.includes(titreMinuscule)) 
        {

            // Si on trouve une image qui correspond, on retourne son chemin

            return '../0_assets/BD/albumsMini/' + cheminImage;
        }

    }
    // Si aucune image n'est trouvée, retourner l'image par défaut

    return defaultImage;
}




// Exemple d'utilisation : 


titrePremierAlbum  = albums.get("1").titre;                  // Croc vert



const imageUrl = findImageForAlbum(titrePremierAlbum);   


console.log(imageUrl);   // ../0_assets/BD/albumsMini/Marsupilami-23-Croc vert.jpg




// Si le titre n'exite pas il renvoie une image par defaut de ligne 

let testImage  = findImageForAlbum("n'importe quoi");   


console.log(testImage);       // https://via.placeholder.com/120x150.png?text=Pas+d'image




// #######################################################################################



/*

    ************** Interaction avec html 

    <body>

        <h1> Liste des Albums /h1>
        

        <!-- Conteneur pour afficher les albums -->

        <div id="albumContainer_test">  </div>         

    </body>

*/


// Sélectionner le conteneur dans le HTML où afficher les albums

const albumContainer = document.getElementById("albumContainer_test");



for ( let [id, album] of albums) 
{

    if ( compteur  < nombreAlbumsAAfficher ) 
    {

        // Créer un élément pour l'album

        const albumDiv = document.createElement("div");

        albumDiv.classList.add("album_style"); // Ajouter une classe pour le style


        // Récupérer l'image
        const imageUrl = findImageForAlbum(album.titre);

        // Récupérer l'auteur et la série
        const auteur = auteurs.get(album.idAuteur);
        const serie  = series.get(album.idSerie);


        // Créer le contenu HTML de l'album

        albumDiv.innerHTML = `

            <h2>${album.titre}</h2>

            <img src="${imageUrl}" alt="${album.titre}" />

            <p><strong>Numéro:</strong> ${album.numero}</p>

            <p><strong>Prix:</strong> ${album.prix} €</p>

            <p><strong>Série:</strong> ${serie.nom}</p>

            <p><strong>Auteur:</strong> ${auteur.nom}</p>
        `;


        // Ajouter l'élément album au conteneur

        albumContainer.appendChild(albumDiv);


        compteur++;   // Incrémenter le compteur
    }
}
