
/*
    Simulation de HTML : 

    <div class="recherche">

        <input type="text" id="searchInput" placeholder="Rechercher un titre">
    </div>

    <div id="liste-bd"></div>


    _____________________________________

    Explication de la Logique du Code : 


    Recherche en Temps Réel  =======>       searchInput.addEventListener('input', function() { ... });

        À chaque fois que l'utilisateur saisit quelque chose, le code effectue les actions suivantes :

        -  Récupère le texte saisi 

        -  Filtre les albums en appelant   =====> filterAlbumsByTitle(rechercheTexte)

                                                Cette fonction extrait uniquement les albums qui contiennent le texte spécifié.


        -  Affiche les résultats filtrés avec   =====>  displayResults(filteredAlbums).

                                                Elle génère un div pour chaque album filtré et l'insère dans la zone de résultats.
*/


document.addEventListener('DOMContentLoaded', function() 
{

    const searchInput   = document.getElementById('searchInput');   
    const zoneResultat  = document.getElementById('liste-bd');       


    // Transformer les albums en un tableau
    const listeAlbums  = Array.from(albums.values());

    // console.log(listeAlbums[0])              ========>  {titre: "Croc vert", numero: "23", idSerie: "6", idAuteur: "13", prix: "24.50"}
    // console.log( typeof listeAlbums[0])      ========>   object



    // Fonction pour filtrer les albums selon ce qu'on tape
    function filterAlbumsByTitle(rechercheTexte) 
    {
        let albumsTrouves = [];

        for (let album of listeAlbums) 
        {
            if (album.titre.toLowerCase().includes(rechercheTexte.toLowerCase())) 
            {
                albumsTrouves.push(album);  
            }
        }
        return albumsTrouves;
    }


    function displayResults(filteredAlbums) 
    {
        zoneResultat.innerHTML = '';    

        if (filteredAlbums.length === 0) 
        {
            zoneResultat.innerHTML = '<p>Aucun album trouvé</p>'; 
            return;
        }

        // Pour chaque album filtré, on crée un div
        filteredAlbums.forEach(album => 
        {
            const albumDiv = document.createElement('div');

            albumDiv.classList.add('album');    // classe pour le style

            albumDiv.innerHTML = `
                <h2>${album.titre}</h2>
                <p>Tome : ${album.numero}</p>
                <p>Prix : ${album.prix}€</p>
            `;
            listeBD.appendChild(albumDiv);   
        });
    }

    

    // Quand on tape dans la barre, on fait la recherche

    searchInput.addEventListener('input', function() 
    {
        const searchTerm = searchInput.value;   

        const filteredAlbums = filterAlbumsByTitle(searchTerm);  // Filtrer les albums par titre

        displayResults(filteredAlbums);  // Afficher les résultats
    });
});
