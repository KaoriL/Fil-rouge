





 // Fonction pour charger les données à partir des fichiers albums.js, auteurs.js et series.js
// Cette fonction récupère les détails de la bande dessinée à partir du stockage local en utilisant l'ID de bande dessinée sélectionné.
// Elle récupère les informations sur la BD, l'auteur et la série, puis met à jour la page avec ces détails.
function loadDataFromPages() {
  const selectedComicId = localStorage.getItem('selectedComicId') || '85'; // Par défaut à '27'
  
  if (!selectedComicId) {
    console.error('Aucun ID de bande dessinée trouvé dans le stockage local.');
    return;
  }

  // Récupérer les détails de la bande dessinée à partir de albums.js
  const comicDetails = albums.get(selectedComicId);
  if (!comicDetails) {
    console.error('Bande dessinée non trouvée dans albums.');
    return;
  }

  // Récupérer les détails de l'auteur et de la série
  const authorDetails = auteurs.get(comicDetails.idAuteur);
  const seriesDetails = series.get(comicDetails.idSerie);

  // Mettre à jour les éléments HTML avec les détails de la bande dessinée
  document.getElementById('comicImage').src = comicDetails.imageUrl || ''; // Définir le chemin correct de l'image
  document.getElementById('comicTitle').textContent = comicDetails.titre || 'Titre indisponible';
  document.getElementById('comicAuthor').textContent = authorDetails ? authorDetails.nom : 'Auteur indisponible';
  document.getElementById('comicPrice').textContent = `${comicDetails.prix} €` || 'Prix indisponible';
  document.getElementById('comicSeries').textContent = seriesDetails ? seriesDetails.nom : 'Série indisponible';
  document.getElementById('rating-value').textContent = comicDetails.rating || '0';
  document.getElementById('vote-count').textContent = comicDetails.voteCount || '0';

  // Mettre à jour le compteur de panier si nécessaire
  updateCartCounter();
}

// Appeler la fonction lorsque la page se charge
window.onload = loadDataFromPages;

// Fonction pour basculer la visibilité de la barre de recherche
function toggleBar() {
  let form = document.getElementById("searchBar");
  form.classList.toggle("active");
}

// Fonctionnalité de notation par étoiles
const stars = document.querySelectorAll("#stars i");
const ratingValue = document.getElementById("rating-value");
const voteCount = document.getElementById("vote-count");
let userRating = 0;

// Mettre à jour les étoiles en fonction de la note actuelle
function updateStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.remove("far");
      star.classList.add("fas");
    } else {
      star.classList.remove("fas");
      star.classList.add("far");
    }
  });
}

// Enregistrer la note dans le stockage local
function saveRating(rating) {
  let ratings = JSON.parse(localStorage.getItem("comicRatings")) || [];
  ratings.push(rating);
  localStorage.setItem("comicRatings", JSON.stringify(ratings));

  voteCount.textContent = ratings.length;
  let average = ratings.reduce((a, b) => a + b, 0) / ratings.length;
  ratingValue.textContent = average.toFixed(1);
}

// Ajouter des écouteurs d'événements pour le système de notation par étoiles
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    userRating = index + 1;
    updateStars(userRating);
    saveRating(userRating);
  });

  star.addEventListener("mouseover", () => {
    updateStars(index + 1);
  });

  star.addEventListener("mouseout", () => {
    updateStars(userRating);
  });
});

// Charger les notes existantes lorsque la page se charge
function loadRatings() {
  let ratings = JSON.parse(localStorage.getItem("comicRatings")) || [];
  if (ratings.length > 0) {
    let average = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    ratingValue.textContent = average.toFixed(1);
    voteCount.textContent = ratings.length;
    updateStars(Math.round(average));
  }
}
loadRatings();

// function handleRating(rating) {
//   const details = JSON.parse(localStorage.getItem('cart'));
//   const newVoteCount = (details.voteCount || 0) + 1;
//   const newRating = ((details.rating * details.voteCount) + rating) / newVoteCount;
  
//   localStorage.setItem(`rating_${details.nom}`, newRating.toFixed(1));
//   localStorage.setItem(`voteCount_${details.nom}`, newVoteCount);
  
//   details.rating = newRating;
//   details.voteCount = newVoteCount;
//   updateCartCounter();
// }

// Fonction pour ajouter un article au panier
function addToCart(item, quantity) {
  if (!item || typeof quantity !== 'number' || isNaN(quantity)) {
    console.error("Article ou quantité invalide");
    return;
  }

  // Initialiser le panier à partir du stockage local
  let cart = JSON.parse(localStorage.getItem("id_book")) || [];

  // Supprimer toute valeur nulle ou indéfinie du panier
  cart = cart.filter(cartItem => cartItem !== null && cartItem !== undefined);

  // Vérifier si l'article existe déjà dans le panier
  const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);

  if (existingItemIndex !== -1) {
    // Mettre à jour la quantité si l'article est déjà dans le panier
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Ajouter le nouvel article au panier
    item.quantity = quantity;
    // Add the image URL to the item
    item.imageUrl = document.getElementById('comicImage').src;
    cart.push(item);
  }

  localStorage.setItem("id_book", JSON.stringify(cart));
  updateCartCounter(); // Mettre à jour le compteur de panier
}

// // Fonction pour ajouter un article au panier
// function addToCart(item, quantity) {
//   if (!item || typeof quantity !== 'number' || isNaN(quantity)) {
//     console.error("Article ou quantité invalide");
//     return;
//   }

//   // Initialiser le panier à partir du stockage local
//   let cart = JSON.parse(localStorage.getItem("id_book")) || [];

//   // Supprimer toute valeur nulle ou indéfinie du panier
//   cart = cart.filter(cartItem => cartItem !== null && cartItem !== undefined);

//   // Vérifier si l'article existe déjà dans le panier
//   const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);

//   if (existingItemIndex !== -1) {
//     // Mettre à jour la quantité si l'article est déjà dans le panier
//     cart[existingItemIndex].quantity += quantity;
//   } else {
//     // Ajouter le nouvel article au panier
//     item.quantity = quantity;
//     cart.push(item);
//   }

//   localStorage.setItem("id_book", JSON.stringify(cart));
//   updateCartCounter(); // Mettre à jour le compteur de panier
// }

// Mettre à jour le compteur de panier en fonction du nombre d'articles dans le panier
function updateCartCounter() {
  let cart = JSON.parse(localStorage.getItem("id_book")) || [];
  let totalQuantity = cart.reduce((sum, item) => {
    return sum + (item && typeof item.quantity === 'number' ? item.quantity : 0);
  }, 0);

  const cartCounter = document.getElementById('cart-counter');
  if (cartCounter) {
    cartCounter.textContent = totalQuantity;
    cartCounter.style.display = totalQuantity > 0 ? "inline-block" : "none";
  } else {
    console.error("Élément compteur de panier non trouvé");
  }
}

// Écouteur d'événements pour le bouton "Ajouter au panier"
const addToCartBtn = document.getElementById("addToCartBtn");
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const quantity = parseInt(document.getElementById("quantity").value, 10) || 1;

    // Collecter les données de la BD à ajouter au panier
    const comicData = {
      name: document.getElementById('comicTitle').textContent.trim(),
      author: document.getElementById('comicAuthor').textContent.trim(),
      price: parseFloat(document.getElementById('comicPrice').textContent),
      seriesId: parseInt(document.querySelector('.comic-id').textContent.trim()),
      imageUrl: document.getElementById('comicImage').src // Add this line to save the image URL
    };

    // Valider les données de la BD avant de l'ajouter au panier
    if (!comicData.name || !comicData.author || isNaN(comicData.price) || isNaN(comicData.seriesId)) {
      console.error("Les données de la BD sont incomplètes:", comicData);
      return;
    }

    addToCart(comicData, quantity);

    // Retour visuel lorsque l'article est ajouté au panier
    this.textContent = "Ajouté!";
    this.classList.add("added");
    setTimeout(() => {
      this.textContent = "Ajouter au panier";
      this.classList.remove("added");
    }, 2000);
  });
} else {
  console.error("Bouton ajouter au panier non trouvé");
}

// // Écouteur d'événements pour le bouton "Ajouter au panier"
// const addToCartBtn = document.getElementById("addToCartBtn");
// if (addToCartBtn) {
//   addToCartBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     const quantity = parseInt(document.getElementById("quantity").value, 10) || 1;

//     // Collecter les données de la BD à ajouter au panier
//     const comicData = {
//       name: document.getElementById('comicTitle').textContent.trim(),
//       author: document.getElementById('comicAuthor').textContent.trim(),
//       price: parseFloat(document.getElementById('comicPrice').textContent),
//       seriesId: parseInt(document.querySelector('.comic-id').textContent.trim())
//     };

//     // Valider les données de la BD avant de l'ajouter au panier
//     if (!comicData.name || !comicData.author || isNaN(comicData.price) || isNaN(comicData.seriesId)) {
//       console.error("Les données de la BD sont incomplètes:", comicData);
//       return;
//     }

//     addToCart(comicData, quantity);

//     // Retour visuel lorsque l'article est ajouté au panier
//     this.textContent = "Ajouté!";
//     this.classList.add("added");
//     setTimeout(() => {
//       this.textContent = "Ajouter au panier";
//       this.classList.remove("added");
//     }, 2000);
//   });
// } else {
//   console.error("Bouton ajouter au panier non trouvé");
// }

// Initialiser le compteur de panier lorsque la page se charge
updateCartCounter();

// Écouteurs d'événements pour les icônes de connexion et de panier
const loginIcon = document.querySelector(".fa-user").parentElement;
if (loginIcon) {
  loginIcon.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../Login/login.html";
  });
}

const cartIcon = document.querySelector(".cart-icon");
if (cartIcon) {
  cartIcon.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../Panier/panier.html";
  });
}



// // For developers working on the catalogue page:
// // Use this function to set the selected comic and navigate to the details page
// function navigateToDetailsPage(comicId) {
//   localStorage.setItem('selectedComicId', comicId);
//   window.location.href = 'Details.html'; // Adjust the path if necessary
// }

// // Example usage for the "En savoir plus" button in the catalogue page:
// /*
// document.querySelectorAll('.en-savoir-plus').forEach(button => {
//   button.addEventListener('click', function(event) {
//       event.preventDefault();
//       const comicId = this.dataset.comicId; // Assuming you store the comic ID in a data attribute
//       navigateToDetailsPage(comicId);
//   });
// });
// */

