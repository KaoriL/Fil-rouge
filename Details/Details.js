// function toggleBar() {
//     let form = document.getElementById("searchBar");
//     form.classList.toggle("active");
//   }

// document.addEventListener('DOMContentLoaded', function() {
//   const stars = document.querySelectorAll('#stars i');
//   const addToCartBtn = document.getElementById('addToCartBtn');
//   const voteCount = document.getElementById('vote-count');
//   const cartCounter = document.getElementById('cart-counter');
//   const cartIcon = document.querySelector('.cart-icon');
//   const ratingValue = document.getElementById('rating-value');
//   let allRatings = [];
//   let userRating = 0;

//   // Initialize cart counter and rating display
//   updateCartCounter();
//   ratingValue.textContent = "0.0";

//   // Star rating interaction
//   stars.forEach((star, index) => {
//       star.addEventListener('click', function() {
//           userRating = index + 1;
//           allRatings.push(userRating);
//           updateStarRating(userRating, true);
//           updateAverageRating();
//           updateVoteCount();
//       });

//       // Hover effect
//       star.addEventListener('mouseover', function() {
//           updateStarRating(index + 1);
//       });

//       star.addEventListener('mouseout', function() {
//           updateStarRating(userRating, true);
//       });
//   });

//   function updateStarRating(rating, permanent = false) {
//       stars.forEach((star, index) => {
//           if (index < rating) {
//               star.classList.remove('far');
//               star.classList.add('fas');
//           } else {
//               star.classList.remove('fas');
//               star.classList.add('far');
//           }
//       });

//       if (permanent) {
//           userRating = rating;
//       }
//   }

//   function updateAverageRating() {
//       if (allRatings.length === 0) return;

//       let sum = allRatings.reduce((a, b) => a + b, 0);
//       let average = sum / allRatings.length;
//       ratingValue.textContent = average.toFixed(1);
//   }

//   function updateVoteCount() {
//       voteCount.textContent = allRatings.length;
//   }

//   // Add to cart functionality
//   addToCartBtn.addEventListener('click', function(event) {
//       event.preventDefault();
//       const comicData = {
//           name: 'Nom du Comic',
//           author: 'John Doe',
//           price: 15
//       };
//       addToCart(comicData);
//   });

//   function addToCart(item) {
//       let cart = JSON.parse(localStorage.getItem('cart')) || [];
//       cart.push(item);
//       localStorage.setItem('cart', JSON.stringify(cart));

//       updateCartCounter();

//       // Visual feedback
//       addToCartBtn.textContent = 'Ajouté !';
//       addToCartBtn.classList.add('added');
//       setTimeout(() => {
//           addToCartBtn.textContent = 'Ajouter au panier';
//           addToCartBtn.classList.remove('added');
//       }, 2000);
//   }

//   function updateCartCounter() {
//       let cart = JSON.parse(localStorage.getItem('cart')) || [];
//       cartCounter.textContent = cart.length;
//       if (cart.length > 0) {
//           cartCounter.style.display = 'inline-block';
//       } else {
//           cartCounter.style.display = 'none';
//       }
//   }

//   // Add click event for cart icon to navigate to panier.html
//   cartIcon.addEventListener('click', function(event) {
//       event.preventDefault();
//       window.location.href = '../Panier/panier.html';
//   });
// }); finished here (correct version 1)


// // Search bar functionality
// const searchBar = document.getElementById("searchBar");
// const searchBtn = searchBar.querySelector("button");

// function toggleBar() {
//   searchBar.classList.toggle("active");
// }

// searchBtn.addEventListener("click", toggleBar);

// // Function to load data from local storage and display comic details
function loadDataFromPages() {
  const selectedComicId = localStorage.getItem('selectedComicId');
  if (!selectedComicId) {
      console.error('No comic ID found in local storage.');
      return;
  }



  // Assuming you have albums, auteurs, and series defined globally
  const comicDetails = albums.get(selectedComicId);
  if (!comicDetails) {
      console.error('Comic not found in albums.');
      return;
  }

  const authorDetails = auteurs.get(comicDetails.idAuteur);
  const seriesDetails = series.get(comicDetails.idSerie);

  // Remplir les détails de la bande dessinée dans le HTML

  document.getElementById('comicImage').src = comicDetails.imageUrl || ''; 
  document.getElementById('comicTitle').textContent = comicDetails.title || 'Titre non disponible';
  document.getElementById('comicAuthor').textContent = authorDetails.name || 'Auteur non disponible';
  document.getElementById('comicPrice').textContent = `${comicDetails.price} €` || 'Prix non disponible';
  document.getElementById('comicSeries').textContent = seriesDetails.name || 'Série non disponible';
  document.getElementById('rating-value').textContent = comicDetails.rating || '0';
  document.getElementById('vote-count').textContent = comicDetails.voteCount || '0';

    


  // Update cart counter if necessary
  const cartCounter = document.getElementById('cart-counter');
  const cartItemsCount = localStorage.getItem('cartItemsCount') || '0';
  cartCounter.textContent = cartItemsCount;
  cartCounter.style.display = cartItemsCount > 0 ? 'block' : 'none';
}

// Call the function on page load
window.onload = loadDataFromPages;

// Function to toggle the search bar visibility
function toggleBar() {
  let form = document.getElementById("searchBar");
  form.classList.toggle("active");
}

// Star rating functionality
const stars = document.querySelectorAll("#stars i");
const ratingValue = document.getElementById("rating-value");
const voteCount = document.getElementById("vote-count");
const addToCartBtn = document.getElementById("addToCartBtn");
const cartCounter = document.getElementById("cart-counter");
const cartIcon = document.querySelector(".cart-icon");
const quantityInput = document.getElementById("quantity");
let userRating = 0;

// Function to update stars based on rating
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

// Function to save rating to local storage
function saveRating(rating) {
  let ratings = JSON.parse(localStorage.getItem("comicRatings")) || [];
  ratings.push(rating);
  localStorage.setItem("comicRatings", JSON.stringify(ratings));

  voteCount.textContent = ratings.length;

  let sum = ratings.reduce((a, b) => a + b, 0);
  let average = sum / ratings.length;
  ratingValue.textContent = average.toFixed(1);
}

// Event listeners for star rating
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

// Load existing ratings
function loadRatings() {
  let ratings = JSON.parse(localStorage.getItem("comicRatings")) || [];
  if (ratings.length > 0) {
      let sum = ratings.reduce((a, b) => a + b, 0);
      let average = sum / ratings.length;
      ratingValue.textContent = average.toFixed(1);
      voteCount.textContent = ratings.length;
      updateStars(Math.round(average));
  }
}
loadRatings();

function addToCart(item, quantity) {
  if (!item || typeof quantity !== 'number' || isNaN(quantity)) {
      console.error("Invalid item or quantity");
      return;
  }

  // Initialize cart variable correctly at the beginning
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Filter out any null or undefined values
  cart = cart.filter(cartItem => cartItem !== null && cartItem !== undefined);

  const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);

  if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
  } else {
      item.quantity = quantity;
      cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCounter();
}



// Update cart counter
function updateCartCounter() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalQuantity = cart.reduce((sum, item) => {
      return sum + (item && typeof item.quantity === 'number' ? item.quantity : 0);
  }, 0);

  if (cartCounter) {
      cartCounter.textContent = totalQuantity;
      cartCounter.style.display = totalQuantity > 0 ? "inline-block" : "none";
  } else {
      console.error("Cart counter element not found");
  }
}

// Event listener for the "Add to Cart" button
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const quantity = parseInt(quantityInput.value, 10) || 1;

    // Log comic data before adding to the cart
    console.log("Comic data being added to cart:", {
      name: document.getElementById('comicTitle').textContent.trim(),
      author: document.getElementById('comicAuthor').textContent.trim(),
      price: parseFloat(document.getElementById('comicPrice').textContent)
    });

     // Add price parsing logic here
     const priceText = document.getElementById('comicPrice').textContent.trim();
     const price = parseFloat(priceText.replace(' €', '')); // Clean and parse price

    const comicData = {
      name: document.getElementById('comicTitle').textContent.trim(), // Get comic title for cart
      author: document.getElementById('comicAuthor').textContent.trim(), // Get author for cart
      price: parseFloat(document.getElementById('comicPrice').textContent) // Get price for cart
    };

    // Check for valid comicData before adding to cart
    if (!comicData.name || !comicData.author || isNaN(comicData.price)) {
      console.error("Comic data is incomplete:", comicData);
      return;
    }

    // Add comicData to cart
    addToCart(comicData, quantity);

    // Visual feedback
    this.textContent = "Ajouté !";
    this.classList.add("added");
    setTimeout(() => {
      this.textContent = "Ajouter au panier";
      this.classList.remove("added");
    }, 2000);
  });
} else {
  console.error("Add to cart button not found");
}

// Login icon functionality
const loginIcon = document.querySelector(".fa-user").parentElement;
if (loginIcon) {
  loginIcon.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../Login/login.html";
  });
}

// Cart icon functionality
if (cartIcon) {
  cartIcon.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../Panier/panier.html";
  });
}

// Initialize cart counter
updateCartCounter();


// // Function to load comic details
// function loadComicDetails() {
//   const comicDetails = albums.get(selectedComicId);
//   if (!comicDetails) {
//       console.error('Comic not found in albums.');
//       return;
//   }

//   // Get author and series details
//   const authorDetails = auteurs.get(comicDetails.idAuteur);
//   const seriesDetails = series.get(comicDetails.idSerie);

//   // Populate the comic details in the HTML
//   const comicImage = document.getElementById('comicImage');
//   if (comicImage) {
//       comicImage.src = comicDetails.imageUrl || '';
//   }

//   const comicTitle = document.getElementById('comicTitle');
//   if (comicTitle) {
//       comicTitle.textContent = comicDetails.title || 'Titre non disponible';
//   }

//   const comicAuthor = document.getElementById('comicAuthor');
//   if (comicAuthor) {
//       comicAuthor.textContent = (authorDetails && authorDetails.name) || 'Auteur non disponible';
//   }

//   const comicPrice = document.getElementById('comicPrice');
//   if (comicPrice) {
//       comicPrice.textContent = `${comicDetails.price} €` || 'Prix non disponible';
//   }

//   const comicSeries = document.getElementById('comicSeries');
//   if (comicSeries) {
//       comicSeries.textContent = (seriesDetails && seriesDetails.name) || 'Série non disponible';
//   }

//   // Load the average rating for the comic
//   loadAverageRating(selectedComicId);

//   // Update cart counter if necessary
//   const cartCounter = document.getElementById('cart-counter');
//   const cartItemsCount = localStorage.getItem('cartItemsCount') || '0';
//   if (cartCounter) {
//       cartCounter.textContent = cartItemsCount;
//       cartCounter.style.display = cartItemsCount > 0 ? 'block' : 'none';
//   }
// }

// // Function to load and display the average rating
// function loadAverageRating(comicId) {
//   const ratings = JSON.parse(localStorage.getItem(`ratings_${comicId}`)) || [];
//   const averageRating = ratings.length > 0 ? (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(2) : 0;
//   const averageRatingDisplay = document.getElementById('average-rating');
//   if (averageRatingDisplay) {
//       averageRatingDisplay.textContent = `Average Rating: ${averageRating} ⭐`;
//   }
// }

// // Function to handle rating submission
// function submitRating() {
//   const ratingInput = document.getElementById('rating-input'); // Assume this is a number input or select
//   const rating = parseFloat(ratingInput.value);
  
//   if (rating >= 1 && rating <= 5) { // Assuming ratings are from 1 to 5
//       // Get existing ratings from local storage
//       const ratingsKey = `ratings_${selectedComicId}`;
//       const ratings = JSON.parse(localStorage.getItem(ratingsKey)) || [];

//       // Add the new rating
//       ratings.push(rating);

//       // Store updated ratings back to local storage
//       localStorage.setItem(ratingsKey, JSON.stringify(ratings));

//       // Recalculate and display the average rating
//       loadAverageRating(selectedComicId);
//   } else {
//       console.error("Invalid rating. Please provide a rating between 1 and 5.");
//   }
// }

// // Event listener for the submit button
// const submitRatingBtn = document.getElementById('submit-rating-btn'); // Button to submit the rating
// if (submitRatingBtn) {
//   submitRatingBtn.addEventListener('click', submitRating);
// }

// // Call the loadComicDetails function to display details when the page loads
// loadComicDetails();

// // Function to load data from local storage and display comic details
// function loadDataFromPages() {
// const selectedComicId = localStorage.getItem('selectedComicId');
// if (!selectedComicId) {
//     console.error('No comic ID found in local storage.');
//     return;
// }

// // Assuming you have albums, auteurs, and series defined globally
// const comicDetails = albums.get(selectedComicId);
// if (!comicDetails) {
//     console.error('Comic not found in albums.');
//     return;
// }

// const authorDetails = auteurs.get(comicDetails.idAuteur);
// const seriesDetails = series.get(comicDetails.idSerie);

// // Populate the comic details in the HTML
// document.getElementById('comicImage').src = comicDetails.imageUrl || ''; // Ensure image URL is correct
// document.getElementById('comicTitle').textContent = comicDetails.title || 'Titre non disponible';
// document.getElementById('comicAuthor').textContent = authorDetails.name || 'Auteur non disponible';
// document.getElementById('comicPrice').textContent = `${comicDetails.price} €` || 'Prix non disponible';
// document.getElementById('comicSeries').textContent = seriesDetails.name || 'Série non disponible';
// document.getElementById('rating-value').textContent = comicDetails.rating || '0';
// document.getElementById('vote-count').textContent = comicDetails.voteCount || '0';

// // Update cart counter if necessary
// const cartCounter = document.getElementById('cart-counter');
// const cartItemsCount = localStorage.getItem('cartItemsCount') || '0';
// cartCounter.textContent = cartItemsCount;
// cartCounter.style.display = cartItemsCount > 0 ? 'block' : 'none';
// }

// // Call the function on page load
// window.onload = loadDataFromPages;

// // Function to toggle the search bar visibility
// function toggleBar() {
// let form = document.getElementById("searchBar");
// form.classList.toggle("active");
// }

// // Star rating functionality
// const stars = document.querySelectorAll("#stars i");
// const ratingValue = document.getElementById("rating-value");
// const voteCount = document.getElementById("vote-count");
// const addToCartBtn = document.getElementById("addToCartBtn");
// const cartCounter = document.getElementById("cart-counter");
// const cartIcon = document.querySelector(".cart-icon");
// const quantityInput = document.getElementById("quantity");
// let userRating = 0;

// // Function to update stars based on rating
// function updateStars(rating) {
// stars.forEach((star, index) => {
//     if (index < rating) {
//         star.classList.remove("far");
//         star.classList.add("fas");
//     } else {
//         star.classList.remove("fas");
//         star.classList.add("far");
//     }
// });
// }

// // Function to save rating to local storage
// function saveRating(rating) {
// let ratings = JSON.parse(localStorage.getItem("comicRatings")) || [];
// ratings.push(rating);
// localStorage.setItem("comicRatings", JSON.stringify(ratings));

// voteCount.textContent = ratings.length;

// let sum = ratings.reduce((a, b) => a + b, 0);
// let average = sum / ratings.length;
// ratingValue.textContent = average.toFixed(1);
// }

// // Event listeners for star rating
// stars.forEach((star, index) => {
// star.addEventListener("click", () => {
//     userRating = index + 1;
//     updateStars(userRating);
//     saveRating(userRating);
// });

// star.addEventListener("mouseover", () => {
//     updateStars(index + 1);
// });

// star.addEventListener("mouseout", () => {
//     updateStars(userRating);
// });
// });

// // Load existing ratings
// function loadRatings() {
// let ratings = JSON.parse(localStorage.getItem("comicRatings")) || [];
// if (ratings.length > 0) {
//     let sum = ratings.reduce((a, b) => a + b, 0);
//     let average = sum / ratings.length;
//     ratingValue.textContent = average.toFixed(1);
//     voteCount.textContent = ratings.length;
//     updateStars(Math.round(average));
// }
// }
// loadRatings();

// function addToCart(item, quantity) {
// if (!item || typeof quantity !== 'number' || isNaN(quantity)) {
//     console.error("Invalid item or quantity");
//     return;
// }

// // Initialize cart variable correctly at the beginning
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Filter out any null or undefined values
// cart = cart.filter(cartItem => cartItem !== null && cartItem !== undefined);

// const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);

// if (existingItemIndex !== -1) {
//     cart[existingItemIndex].quantity += quantity;
// } else {
//     item.quantity = quantity;
//     cart.push(item);
// }

// localStorage.setItem("cart", JSON.stringify(cart));
// updateCartCounter();
// }

// // Update cart counter
// function updateCartCounter() {
// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// let totalQuantity = cart.reduce((sum, item) => {
//     return sum + (item && typeof item.quantity === 'number' ? item.quantity : 0);
// }, 0);

// if (cartCounter) {
//     cartCounter.textContent = totalQuantity;
//     cartCounter.style.display = totalQuantity > 0 ? "inline-block" : "none";
// } else {
//     console.error("Cart counter element not found");
// }
// }

// // Event listener for the "Add to Cart" button
// if (addToCartBtn) {
// addToCartBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   const quantity = parseInt(quantityInput.value) || 1; // Default to 1 if not specified
//   addToCart({
//       name: comicTitle.textContent,
//       price: comicPrice.textContent.replace(' €', ''), // Assuming this is the price format
//       image: comicImage.src
//   }, quantity);
// });
// }

// // Update the cart counter on page load
// updateCartCounter();











  //BELOW IS THE VERSION I AM USING RIGHT NOW//
// function toggleBar() {
//         let form = document.getElementById("searchBar");
//         form.classList.toggle("active");
//       }

// document.addEventListener("DOMContentLoaded", function () {
//   const stars = document.querySelectorAll("#stars i");
//   const ratingValue = document.getElementById("rating-value");
//   const voteCount = document.getElementById("vote-count");
//   const addToCartBtn = document.getElementById("addToCartBtn");
//   const cartCounter = document.getElementById("cart-counter");
//   const cartIcon = document.querySelector(".cart-icon");
//   const quantityInput = document.getElementById("quantity");
//   let userRating = 0;

//   // Star rating functionality
//   function updateStars(rating) {
//     stars.forEach((star, index) => {
//       if (index < rating) {
//         star.classList.remove("far");
//         star.classList.add("fas");
//       } else {
//         star.classList.remove("fas");
//         star.classList.add("far");
//       }
//     });
//   }

//   function saveRating(rating) {
//     let ratings = JSON.parse(localStorage.getItem("comicRatings")) || [];
//     ratings.push(rating);
//     localStorage.setItem("comicRatings", JSON.stringify(ratings));

//     voteCount.textContent = ratings.length;

//     let sum = ratings.reduce((a, b) => a + b, 0);
//     let average = sum / ratings.length;
//     ratingValue.textContent = average.toFixed(1);
//   }

//   stars.forEach((star, index) => {
//     star.addEventListener("click", () => {
//       userRating = index + 1;
//       updateStars(userRating);
//       saveRating(userRating);
//     });

//     star.addEventListener("mouseover", () => {
//       updateStars(index + 1);
//     });

//     star.addEventListener("mouseout", () => {
//       updateStars(userRating);
//     });
//   });

//   // Load existing ratings
//   function loadRatings() {
//     let ratings = JSON.parse(localStorage.getItem("comicRatings")) || [];
//     if (ratings.length > 0) {
//       let sum = ratings.reduce((a, b) => a + b, 0);
//       let average = sum / ratings.length;
//       ratingValue.textContent = average.toFixed(1);
//       voteCount.textContent = ratings.length;
//       updateStars(Math.round(average));
//     }
//   }

//   loadRatings();

//   // Cart functionality
//   function addToCart(item, quantity) {
//     if (!item || typeof quantity !== 'number' || isNaN(quantity)) {
//       console.error("Invalid item or quantity");
//       return;
//     }
    
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    
//     if (existingItemIndex !== -1) {
//       cart[existingItemIndex].quantity += quantity;
//     } else {
//       item.quantity = quantity;
//       cart.push(item);
//     }
    
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCounter();
//   }

//   function updateCartCounter() {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     let totalQuantity = cart.reduce((sum, item) => {
//       return sum + (item && typeof item.quantity === 'number' ? item.quantity : 0);
//     }, 0);
    
//     if (cartCounter) {
//       cartCounter.textContent = totalQuantity;
//       cartCounter.style.display = totalQuantity > 0 ? "inline-block" : "none";
//     } else {
//       console.error("Cart counter element not found");
//     }
//   }

//   if (addToCartBtn) {
//     addToCartBtn.addEventListener("click", function (event) {
//       event.preventDefault();
//       const quantity = parseInt(quantityInput.value, 10) || 1;
//       const comicData = {
//         name: "Nom du Comic",
//         author: "John Doe",
//         price: 15,
//       };
//       addToCart(comicData, quantity);

//       // Visual feedback
//       this.textContent = "Ajouté !";
//       this.classList.add("added");
//       setTimeout(() => {
//         this.textContent = "Ajouter au panier";
//         this.classList.remove("added");
//       }, 2000);
//     });
//   } else {
//     console.error("Add to cart button not found");
//   }

//   // Login icon functionality
//   const loginIcon = document.querySelector(".fa-user").parentElement;
//   if (loginIcon) {
//     loginIcon.addEventListener("click", function (event) {
//       event.preventDefault();
//       window.location.href = "../Login/login.html";
//     });
//   }

//   if (cartIcon) {
//     cartIcon.addEventListener("click", function (event) {
//       event.preventDefault();
//       window.location.href = "../Panier/panier.html";
//     });
//   }

//   // Initialize cart counter
//   updateCartCounter();



  //NEW UPDATED VERSION TO CHECK//

//   // Function to load data from local storage and display comic details
// function loadDataFromPages() {
//   const selectedComicId = localStorage.getItem('selectedComicId');
//   if (!selectedComicId) {
//       console.error('No comic ID found in local storage.');
//       return;
//   }

//   // Assuming you have albums, auteurs, and series defined globally
//   const comicDetails = albums.get(selectedComicId);
//   if (!comicDetails) {
//       console.error('Comic not found in albums.');
//       return;
//   }

//   const authorDetails = auteurs.get(comicDetails.idAuteur);
//   const seriesDetails = series.get(comicDetails.idSerie);

//   // Populate the comic details in the HTML
//   document.getElementById('comicImage').src = comicDetails.imageUrl || ''; // Ensure image URL is correct
//   document.getElementById('comicTitle').textContent = comicDetails.title || 'Titre non disponible';
//   document.getElementById('comicAuthor').textContent = authorDetails.name || 'Auteur non disponible';
//   document.getElementById('comicPrice').textContent = `${comicDetails.price} €` || 'Prix non disponible';
//   document.getElementById('comicSeries').textContent = seriesDetails.name || 'Série non disponible';
//   document.getElementById('rating-value').textContent = comicDetails.rating || '0';
//   document.getElementById('vote-count').textContent = comicDetails.voteCount || '0';

//   // Update cart counter if necessary
//   const cartCounter = document.getElementById('cart-counter');
//   const cartItemsCount = localStorage.getItem('cartItemsCount') || '0';
//   cartCounter.textContent = cartItemsCount;
//   cartCounter.style.display = cartItemsCount > 0 ? 'block' : 'none';
// }

// // Call the function on page load
// window.onload = loadDataFromPages;

// // Function to toggle the search bar visibility
// function toggleBar() {
//   let form = document.getElementById("searchBar");
//   form.classList.toggle("active");
// }

// // Star rating functionality
// const stars = document.querySelectorAll("#stars i");
// const ratingValue = document.getElementById("rating-value");
// const voteCount = document.getElementById("vote-count");
// const addToCartBtn = document.getElementById("addToCartBtn");
// const cartCounter = document.getElementById("cart-counter");
// const cartIcon = document.querySelector(".cart-icon");
// const quantityInput = document.getElementById("quantity");
// let userRating = 0;

// // Function to update stars based on rating
// function updateStars(rating) {
//   stars.forEach((star, index) => {
//       if (index < rating) {
//           star.classList.remove("far");
//           star.classList.add("fas");
//       } else {
//           star.classList.remove("fas");
//           star.classList.add("far");
//       }
//   });
// }

// // Function to save rating to local storage
// function saveRating(rating) {
//   let ratings = JSON.parse(localStorage.getItem("comicRatings")) || [];
//   ratings.push(rating);
//   localStorage.setItem("comicRatings", JSON.stringify(ratings));

//   voteCount.textContent = ratings.length;

//   let sum = ratings.reduce((a, b) => a + b, 0);
//   let average = sum / ratings.length;
//   ratingValue.textContent = average.toFixed(1);
// }

// // Event listeners for star rating
// stars.forEach((star, index) => {
//   star.addEventListener("click", () => {
//       userRating = index + 1;
//       updateStars(userRating);
//       saveRating(userRating);
//   });

//   star.addEventListener("mouseover", () => {
//       updateStars(index + 1);
//   });

//   star.addEventListener("mouseout", () => {
//       updateStars(userRating);
//   });
// });

// // Load existing ratings
// function loadRatings() {
//   let ratings = JSON.parse(localStorage.getItem("comicRatings")) || [];
//   if (ratings.length > 0) {
//       let sum = ratings.reduce((a, b) => a + b, 0);
//       let average = sum / ratings.length;
//       ratingValue.textContent = average.toFixed(1);
//       voteCount.textContent = ratings.length;
//       updateStars(Math.round(average));
//   }
// }
// loadRatings();

// // Cart functionality
// function addToCart(item, quantity) {
//   if (!item || typeof quantity !== 'number' || isNaN(quantity)) {
//       console.error("Invalid item or quantity");
//       return;
//   }

//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);

//   if (existingItemIndex !== -1) {
//       cart[existingItemIndex].quantity += quantity;
//   } else {
//       item.quantity = quantity;
//       cart.push(item);
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartCounter();
// }

// // Update cart counter
// function updateCartCounter() {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   let totalQuantity = cart.reduce((sum, item) => {
//       return sum + (item && typeof item.quantity === 'number' ? item.quantity : 0);
//   }, 0);

//   if (cartCounter) {
//       cartCounter.textContent = totalQuantity;
//       cartCounter.style.display = totalQuantity > 0 ? "inline-block" : "none";
//   } else {
//       console.error("Cart counter element not found");
//   }
// }

// // Event listener for the "Add to Cart" button
// if (addToCartBtn) {
//   addToCartBtn.addEventListener("click", function (event) {
//       event.preventDefault();
//       const quantity = parseInt(quantityInput.value, 10) || 1;
//       const comicData = {
//           name: document.getElementById('comicTitle').textContent, // Get comic title for cart
//           author: document.getElementById('comicAuthor').textContent, // Get author for cart
//           price: parseFloat(document.getElementById('comicPrice').textContent) // Get price for cart
//       };
//       addToCart(comicData, quantity);

//       // Visual feedback
//       this.textContent = "Ajouté !";
//       this.classList.add("added");
//       setTimeout(() => {
//           this.textContent = "Ajouter au panier";
//           this.classList.remove("added");
//       }, 2000);
//   });
// } else {
//   console.error("Add to cart button not found");
// }

// // Login icon functionality
// const loginIcon = document.querySelector(".fa-user").parentElement;
// if (loginIcon) {
//   loginIcon.addEventListener("click", function (event) {
//       event.preventDefault();
//       window.location.href = "../Login/login.html";
//   });
// }

// // Cart icon functionality
// if (cartIcon) {
//   cartIcon.addEventListener("click", function (event) {
//       event.preventDefault();
//       window.location.href = "../Panier/panier.html";
//   });
// }

// // Initialize cart counter
// updateCartCounter();


  // Search bar functionality
  // function toggleBar() {
  //   let form = document.getElementById("searchBar");
  //   if (form) {
  //     form.classList.toggle("active");
  //   }
  // }

  


// function toggleBar() {
//       let form = document.getElementById("searchBar");
//       form.classList.toggle("active");
//     }

// document.addEventListener("DOMContentLoaded", function () {
//   const stars = document.querySelectorAll("#stars i");
//   const ratingValue = document.getElementById("rating-value");
//   const voteCount = document.getElementById("vote-count");
//   const addToCartBtn = document.getElementById("addToCartBtn");
//   const cartCounter = document.getElementById("cart-counter");
//   const cartIcon = document.querySelector(".cart-icon");
//   let userRating = 0;

//   // Star rating functionality
//   function updateStars(rating) {
//     stars.forEach((star, index) => {
//       if (index < rating) {
//         star.classList.remove("far");
//         star.classList.add("fas");
//       } else {
//         star.classList.remove("fas");
//         star.classList.add("far");
//       }
//     });
//   }

//   function saveRating(rating) {
//     let ratings = JSON.parse(localStorage.getItem("comicRatings")) || [];
//     ratings.push(rating);
//     localStorage.setItem("comicRatings", JSON.stringify(ratings));

//     voteCount.textContent = ratings.length;

//     let sum = ratings.reduce((a, b) => a + b, 0);
//     let average = sum / ratings.length;
//     ratingValue.textContent = average.toFixed(1);
//   }

//   stars.forEach((star, index) => {
//     star.addEventListener("click", () => {
//       userRating = index + 1;
//       updateStars(userRating);
//       saveRating(userRating);
//     });

//     star.addEventListener("mouseover", () => {
//       updateStars(index + 1);
//     });

//     star.addEventListener("mouseout", () => {
//       updateStars(userRating);
//     });
//   });

//   // Load existing ratings
//   function loadRatings() {
//     let ratings = JSON.parse(localStorage.getItem("comicRatings")) || [];
//     if (ratings.length > 0) {
//       let sum = ratings.reduce((a, b) => a + b, 0);
//       let average = sum / ratings.length;
//       ratingValue.textContent = average.toFixed(1);
//       voteCount.textContent = ratings.length;
//       updateStars(Math.round(average));
//     }
//   }

//   loadRatings();

//   // Cart functionality
//   function updateCartCounter() {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cartCounter.textContent = cart.length;
//     cartCounter.style.display = cart.length > 0 ? "inline-block" : "none";
//   }

//   function addToCart(item) {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(item);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCounter();
//   }

//   addToCartBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     const comicData = {
//       name: "Nom du Comic",
//       author: "John Doe",
//       price: 15,
//     };
//     addToCart(comicData);

//     // Visual feedback
//     addToCartBtn.textContent = "Ajouté !";
//     addToCartBtn.classList.add("added");
//     setTimeout(() => {
//       addToCartBtn.textContent = "Ajouter au panier";
//       addToCartBtn.classList.remove("added");
//     }, 2000);
//   });

//   // Login icon functionality
//   const loginIcon = document.querySelector(".fa-user").parentElement;
//   if (loginIcon) {
//     loginIcon.addEventListener("click", function (event) {
//       event.preventDefault();
//       window.location.href = "../Login/login.html";
//     });
//   }

//   cartIcon.addEventListener("click", function (event) {
//     event.preventDefault();
//     window.location.href = "../Panier/panier.html";
//   });

//   // Initialize cart counter
//   updateCartCounter();

//   //   // Define the function
//   // function removeSpecificRating(ratingToRemove) {
//   //   let ratings = JSON.parse(localStorage.getItem('comicRatings')) || [];
//   //   ratings = ratings.filter(rating => rating !== ratingToRemove);
//   //   localStorage.setItem('comicRatings', JSON.stringify(ratings));
//   //   updateRatingDisplay();
//   // }

//   // // Later, when you want to remove 5-star ratings, call the function like this:
//   // removeSpecificRating(2);

 
// }); //correct version2
