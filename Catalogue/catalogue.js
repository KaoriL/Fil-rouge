// // function toggleBar() {
// //   let form = document.getElementById("searchBar");
// //   form.classList.toggle("active");
// // }


// document.addEventListener('DOMContentLoaded', () => {
//   const hamburger = document.querySelector('.hamburger');
//   const navLinks = document.querySelector('.nav-links');
//   const comicsContainer = document.getElementById('comics-container');
//   const bestSellersContainer = document.getElementById('best-sellers-container');
//   const filterSelect = document.getElementById('filter-select');
//   const filterInput = document.getElementById('filter-input');
//   const filterButton = document.getElementById('filter-button');
//   const loadMoreButton = document.getElementById('load-more');

//   let currentPage = 1;
//   const comicsPerPage = 12;
//   let filteredComics = [];

//   // Toggle mobile menu
//   hamburger.addEventListener('click', () => {
//       navLinks.classList.toggle('active');
//   });

//   // Load initial comics
//   function loadInitialComics() {
//       filteredComics = Array.from(albums.entries()).map(([id, comic]) => ({ id, ...comic }));
//       displayComics(comicsContainer, filteredComics.slice(0, comicsPerPage));
//       displayBestSellers(bestSellersContainer, filteredComics);
//   }

//   // Display comics in a container
//   function displayComics(container, comics) {
//       container.innerHTML = '';
//       comics.forEach(comic => {
//           const comicCard = createComicCard(comic);
//           container.appendChild(comicCard);
//       });
//   }

//   // Create a comic card element
//   function createComicCard(comic) {
//       const card = document.createElement('div');
//       card.className = 'comic-card';
//       const seriesName = series.get(comic.idSerie)?.nom || 'Inconnue';
//       const imagePath = `../0_assets/BD/albums/${encodeURIComponent(seriesName)}-${comic.numero}-${encodeURIComponent(comic.titre)}.jpg`;
//       card.innerHTML = `
//           <img src="${imagePath}" alt="${comic.titre}" onerror="this.src='../0_assets/BD/albums/placeholder.jpg'">
//           <div class="comic-info">
//               <h3>${comic.titre}</h3>
//               <p>ID: ${comic.id}</p>
//               <p>Auteur: ${auteurs.get(comic.idAuteur)?.nom || 'Inconnu'}</p>
//               <p>Série: ${seriesName}</p>
//               <p>Numéro: ${comic.numero}</p>
//               <p>Prix: ${comic.prix} €</p>
//               <button class="btn">En savoir plus</button>
//           </div>
//       `;

//       card.querySelector('img').addEventListener('click', () => navigateToDetails(comic.id));
//       card.querySelector('.btn').addEventListener('click', () => navigateToDetails(comic.id));

//       return card;
//   }

//   // Display best sellers
//   function displayBestSellers(container, comics) {
//       const bestSellers = comics.sort((a, b) => parseFloat(b.prix) - parseFloat(a.prix)).slice(0, 5);
//       displayComics(container, bestSellers);
//   }

//   // Navigate to details page
//   function navigateToDetails(comicId) {
//       localStorage.setItem('selectedComicId', comicId);
//       window.location.href = '../Details/Details.html';
//   }


//   function filterComics() {
//     const filterType = filterSelect.value;
//     const filterValue = filterInput.value.toLowerCase();
//     filteredComics = Array.from(albums.entries()).map(([id, comic]) => ({ id, ...comic })).filter(comic => {
//         switch (filterType) {
//             case 'id':
//                 return comic.id.toString() === filterValue;  // Change to exact match
//             case 'titre':
//                 return comic.titre.toLowerCase().includes(filterValue);
//             case 'auteur':
//                 const auteurNom = auteurs.get(comic.idAuteur)?.nom.toLowerCase() || '';
//                 return auteurNom.includes(filterValue);
//             case 'serie':
//                 const serieNom = series.get(comic.idSerie)?.nom.toLowerCase() || '';
//                 return serieNom.includes(filterValue);
//             default:
//                 return true;
//         }
//     });
//     currentPage = 1;
//     displayComics(comicsContainer, filteredComics.slice(0, comicsPerPage));
//     updateLoadMoreButton();
// }


//   // // Filter comics
//   // function filterComics() {
//   //     const filterType = filterSelect.value;
//   //     const filterValue = filterInput.value.toLowerCase();
//   //     filteredComics = Array.from(albums.entries()).map(([id, comic]) => ({ id, ...comic })).filter(comic => {
//   //         switch (filterType) {
//   //             case 'id':
//   //                 return comic.id.toLowerCase().includes(filterValue);
//   //             case 'titre':
//   //                 return comic.titre.toLowerCase().includes(filterValue);
//   //             case 'auteur':
//   //                 const auteurNom = auteurs.get(comic.idAuteur)?.nom.toLowerCase() || '';
//   //                 return auteurNom.includes(filterValue);
//   //             case 'serie':
//   //                 const serieNom = series.get(comic.idSerie)?.nom.toLowerCase() || '';
//   //                 return serieNom.includes(filterValue);
//   //             default:
//   //                 return true;
//   //         }
//   //     });
//   //     currentPage = 1;
//   //     displayComics(comicsContainer, filteredComics.slice(0, comicsPerPage));
//   //     updateLoadMoreButton();
//   // }

//   // Load more comics
//   function loadMoreComics() {
//       const start = currentPage * comicsPerPage;
//       const end = start + comicsPerPage;
//       const nextComics = filteredComics.slice(start, end);
//       nextComics.forEach(comic => {
//           const comicCard = createComicCard(comic);
//           comicsContainer.appendChild(comicCard);
//       });
//       currentPage++;
//       updateLoadMoreButton();
//   }

//   // Update load more button visibility
//   function updateLoadMoreButton() {
//       if (currentPage * comicsPerPage >= filteredComics.length) {
//           loadMoreButton.style.display = 'none';
//       } else {
//           loadMoreButton.style.display = 'block';
//       }
//   }

//   // Event listeners
//   filterButton.addEventListener('click', filterComics);
//   filterInput.addEventListener('keyup', (event) => {
//       if (event.key === 'Enter') {
//           filterComics();
//       }
//   });
//   loadMoreButton.addEventListener('click', loadMoreComics);

//   // Initial load
//   loadInitialComics();
//   updateLoadMoreButton();
// });

// Nombre d'albums a afficher par lot

const LOAD_AMOUNT = 5;

let currentIndex  = 0;


// Albums filtres a afficher

let filteredAlbums = []; 


// #######################################################################################################


// Fonction pour trouver l'image correspondant à un album
function findImageForAlbum(titreAlbum) 
{
    const defaultImage = `https://via.placeholder.com/120x150.png?text=Pas+d'image`;

    // Parcourir toutes les images dans le tableau "TITRES_IMAGES" 
    for (let cheminImage of TITRES_IMAGES) 
    {
        let cheminImageMinuscule = cheminImage.toLowerCase();       // Convertit le nom de l'image en minuscules
        let titreMinuscule       = titreAlbum.toLowerCase();        // Convertit le titre de l'album en minuscules

        // Vérifier si le nom de l'image contient le titre de l'album
        if (cheminImageMinuscule.includes(titreMinuscule)) 
        {
            return '../0_assets/BD/albumsMini/' + cheminImage;
        }
    }

    // Si aucune image n'est trouvée, retourner l'image par défaut
    return defaultImage;
}


// #######################################################################################################



// Fonction pour récupérer les albums avec leurs auteurs et séries

function getAlbumData() 
{
    const albumData = [];

    albums.forEach((album, id) => {

        const auteur = auteurs.get(album.idAuteur) ;
        const serie  = series.get(album.idSerie);
        
        // Récupérer l'image de l'album
        const image = findImageForAlbum(album.titre);


        albumData.push( { id,  titre : album.titre,   numero : album.numero,   auteur: auteur,  serie: serie,   prix: album.prix,   image: image } );



        // Example de albumData : 

        /*
                    { 
                        id: '3', 

                        titre: 'La guerre des gloutons (II)', 
                        
                        numero: '13', 

                        image : "../0_assets/BD/albumsMini/....jpg", 

                        auteur: { nom: 'Arleston, Mourier' }

                        serie: { nom: 'Trolls de Troy' }
                        ...
                    }
        */
    });

    return albumData;
}


// #######################################################################################################


// Fonction pour créer l'affichage HTML des albums

function createAlbumCard(album) 
{
    return `
        <div class="album-card" data-id="${album.id}">

            <img src="${album.image}" alt="${album.titre}">

            <div class="album-details">

                <h3> ${album.titre} </h3>

                <p> Série: ${album.serie.nom} </p>

                <p> Auteur: ${album.auteur.nom} </p>

                <p> Prix: ${album.prix}€ </p>
            </div>

        </div>
    `;
}


// #######################################################################################################



// Fonction pour charger les albums

function loadAlbums() 
{

    const bookList  = document.getElementById('book-list');

    bookList.innerHTML = ''; // Vider la liste avant d'ajouter les nouveaux éléments


    const albumsToLoad = filteredAlbums.slice(currentIndex, currentIndex + LOAD_AMOUNT);   // Charger les albums par lot de 5

    // For loop albums Charger  ------------------------------------------
    albumsToLoad.forEach(album => 
    {   
        const albumCardHTML = createAlbumCard(album);

        bookList.innerHTML += albumCardHTML;
    });
    // -- -----------------------------------------------------------------


    // Mise à jour  
    currentIndex += LOAD_AMOUNT;


    // Si on atteint la fin des albums, masquer le bouton "Afficher plus"
    if (currentIndex >= filteredAlbums.length) 
    {
        document.getElementById('load-more').style.display = 'none';
    }

    // -- -----------------------------------------------------------------

    // Ajouter des gestionnaires d'événements pour les cartes d'album

    const albumCards = document.querySelectorAll('.album-card');

    albumCards.forEach(card => 
    {
        card.addEventListener('click', function() 
        {
            const albumId = this.dataset.id;                   // Récupérer l'ID de l'album

            localStorage.setItem('image_detail', albumId);     // Enregistrer l'ID dans localStorage

            window.location.href = '../details/details.html';  // Rediriger vers la page de détails
        });
    });
}


// #######################################################################################################


// Appliquer les filtres et réinitialiser l'affichage des albums

function applyFilters() 
{
    const TitreSlected   = document.getElementById('filter-titre').value.toLowerCase();
    const AuteurSelected = document.getElementById('filter-auteur').value.toLowerCase();
    const SerieSelected  = document.getElementById('filter-serie').value.toLowerCase();


    const allAlbums = getAlbumData(); // Récupérer tous les albums


    // Filtrer les albums en fonction des sélections

    filteredAlbums = allAlbums.filter(album => 
    {
        const titreMatch  = TitreSlected   === ""  || album.titre.toLowerCase().includes(TitreSlected);

        const auteurMatch = AuteurSelected === ""  || album.auteur.nom.toLowerCase().includes(AuteurSelected);

        const serieMatch  = SerieSelected  === ""  || album.serie.nom.toLowerCase().includes(SerieSelected);

    
        return titreMatch && auteurMatch && serieMatch;
    });

    
    // Réinitialiser l'affichage et l'index
    currentIndex = 0;

    loadAlbums(); // Charger les albums filtrés


    // Masquer le bouton "Afficher plus" si des filtres sont appliques
    if (filteredAlbums.length > 0) {
        document.getElementById('load-more').style.display = 'none';
    } 
    else {
        document.getElementById('load-more').style.display = 'block'; // Si aucun album n'est trouvé, on montre le bouton
    }
}


// #######################################################################################################


// Initialiser les options dans les filtres (titres, auteurs, séries)

function initFilterOptions() 
{
    const titres     = new Set();
    const auteursSet = new Set();
    const seriesSet  = new Set();


    albums.forEach(album => 
    {
        titres.add(album.titre);


        auteursSet.add( auteurs.get(album.idAuteur).nom );


        seriesSet.add( series.get(album.idSerie).nom );
    });


    // Remplir les options pour chaque filtre

    fillSelectOptions('filter-titre', titres);
    fillSelectOptions('filter-auteur', auteursSet);
    fillSelectOptions('filter-serie', seriesSet);
}


// #######################################################################################################


// Remplir les options dans les menus déroulants des filtres

function fillSelectOptions(elementId, optionsSet)
{

    const select = document.getElementById(elementId);

    optionsSet.forEach(option => 
    {
        const optionElement = document.createElement('option');

        optionElement.value = option;

        optionElement.textContent = option;

        select.appendChild(optionElement);
    });
}


// #######################################################################################################


function resetFilters() {
    document.getElementById('filter-titre').value = "";
    document.getElementById('filter-auteur').value = "";
    document.getElementById('filter-serie').value = "";

    // Réinitialiser les filtres
    applyFilters();

    // Afficher le bouton "Afficher plus"
    document.getElementById('load-more').style.display = 'block';
}





// #######################################################################################################


// Initialiser au chargement du DOM

document.addEventListener('DOMContentLoaded', function() 
{
    // Charger les albums lors du chargement initial de la page

    filteredAlbums = getAlbumData(); // Par défaut, tous les albums sont chargés


    initFilterOptions(); // Initialiser les filtres

    loadAlbums();        // Charger le premier lot d'albums
});


// Ajouter des événements de filtrage
document.getElementById('filter-titre').addEventListener('change', applyFilters);
document.getElementById('filter-auteur').addEventListener('change', applyFilters);
document.getElementById('filter-serie').addEventListener('change', applyFilters);


// Événement du bouton "Afficher plus"
document.getElementById('load-more').addEventListener('click', loadAlbums);


document.getElementById('reset-filters').addEventListener('click', resetFilters);