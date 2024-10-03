// function toggleBar() {
//   let form = document.getElementById("searchBar");
//   form.classList.toggle("active");
// }


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const comicsContainer = document.getElementById('comics-container');
  const bestSellersContainer = document.getElementById('best-sellers-container');
  const filterSelect = document.getElementById('filter-select');
  const filterInput = document.getElementById('filter-input');
  const filterButton = document.getElementById('filter-button');
  const loadMoreButton = document.getElementById('load-more');

  let currentPage = 1;
  const comicsPerPage = 12;
  let filteredComics = [];

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Load initial comics
  function loadInitialComics() {
      filteredComics = Array.from(albums.entries()).map(([id, comic]) => ({ id, ...comic }));
      displayComics(comicsContainer, filteredComics.slice(0, comicsPerPage));
      displayBestSellers(bestSellersContainer, filteredComics);
  }

  // Display comics in a container
  function displayComics(container, comics) {
      container.innerHTML = '';
      comics.forEach(comic => {
          const comicCard = createComicCard(comic);
          container.appendChild(comicCard);
      });
  }

  // Create a comic card element
  function createComicCard(comic) {
      const card = document.createElement('div');
      card.className = 'comic-card';
      const seriesName = series.get(comic.idSerie)?.nom || 'Inconnue';
      const imagePath = `../0_assets/BD/albums/${encodeURIComponent(seriesName)}-${comic.numero}-${encodeURIComponent(comic.titre)}.jpg`;
      card.innerHTML = `
          <img src="${imagePath}" alt="${comic.titre}" onerror="this.src='../0_assets/BD/albums/placeholder.jpg'">
          <div class="comic-info">
              <h3>${comic.titre}</h3>
              <p>ID: ${comic.id}</p>
              <p>Auteur: ${auteurs.get(comic.idAuteur)?.nom || 'Inconnu'}</p>
              <p>Série: ${seriesName}</p>
              <p>Numéro: ${comic.numero}</p>
              <p>Prix: ${comic.prix} €</p>
              <button class="btn">En savoir plus</button>
          </div>
      `;

      card.querySelector('img').addEventListener('click', () => navigateToDetails(comic.id));
      card.querySelector('.btn').addEventListener('click', () => navigateToDetails(comic.id));

      return card;
  }

  // Display best sellers
  function displayBestSellers(container, comics) {
      const bestSellers = comics.sort((a, b) => parseFloat(b.prix) - parseFloat(a.prix)).slice(0, 5);
      displayComics(container, bestSellers);
  }

  // Navigate to details page
  function navigateToDetails(comicId) {
      localStorage.setItem('selectedComicId', comicId);
      window.location.href = '../Details/Details.html';
  }


  function filterComics() {
    const filterType = filterSelect.value;
    const filterValue = filterInput.value.toLowerCase();
    filteredComics = Array.from(albums.entries()).map(([id, comic]) => ({ id, ...comic })).filter(comic => {
        switch (filterType) {
            case 'id':
                return comic.id.toString() === filterValue;  // Change to exact match
            case 'titre':
                return comic.titre.toLowerCase().includes(filterValue);
            case 'auteur':
                const auteurNom = auteurs.get(comic.idAuteur)?.nom.toLowerCase() || '';
                return auteurNom.includes(filterValue);
            case 'serie':
                const serieNom = series.get(comic.idSerie)?.nom.toLowerCase() || '';
                return serieNom.includes(filterValue);
            default:
                return true;
        }
    });
    currentPage = 1;
    displayComics(comicsContainer, filteredComics.slice(0, comicsPerPage));
    updateLoadMoreButton();
}


  // // Filter comics
  // function filterComics() {
  //     const filterType = filterSelect.value;
  //     const filterValue = filterInput.value.toLowerCase();
  //     filteredComics = Array.from(albums.entries()).map(([id, comic]) => ({ id, ...comic })).filter(comic => {
  //         switch (filterType) {
  //             case 'id':
  //                 return comic.id.toLowerCase().includes(filterValue);
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

  // Load more comics
  function loadMoreComics() {
      const start = currentPage * comicsPerPage;
      const end = start + comicsPerPage;
      const nextComics = filteredComics.slice(start, end);
      nextComics.forEach(comic => {
          const comicCard = createComicCard(comic);
          comicsContainer.appendChild(comicCard);
      });
      currentPage++;
      updateLoadMoreButton();
  }

  // Update load more button visibility
  function updateLoadMoreButton() {
      if (currentPage * comicsPerPage >= filteredComics.length) {
          loadMoreButton.style.display = 'none';
      } else {
          loadMoreButton.style.display = 'block';
      }
  }

  // Event listeners
  filterButton.addEventListener('click', filterComics);
  filterInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
          filterComics();
      }
  });
  loadMoreButton.addEventListener('click', loadMoreComics);

  // Initial load
  loadInitialComics();
  updateLoadMoreButton();
});