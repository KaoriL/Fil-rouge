
document.addEventListener('DOMContentLoaded', function() {


    /*

    ***********************************************************
    *************** function movePaymentBox() *****************
    *********************************************************** 

    Fonction pour bouger la payment-box selon la taille de l'ecran

        Quand l'ecran est plus petit que 925px, la boite .payment-box sera bougee sous .product-box et avant .shipping-box.
        
        Quand l'ecran devient plus grand, elle retourne a sa position normale hors de .left-section.

    */

    function movePaymentBox() {

        const paymentBox    = document.querySelector('.payment-box');
        const leftSection   = document.querySelector('.left-section');
        const shippingBox   = document.querySelector('.shipping-box');
        const cartContainer = document.querySelector('.cart-container');


        if (window.innerWidth <= 925) {

            // Si l'écran est petit, déplacer la payment-box dans left-section, avant shipping-box
            if (!leftSection.contains(paymentBox)) {

                leftSection.insertBefore(paymentBox, shippingBox);
            }
        } 
        // Si l'écran est large, replacer la payment-box en dehors de left-section
        else {
            if (leftSection.contains(paymentBox)) {
                leftSection.removeChild(paymentBox);
            }
            if (!cartContainer.contains(paymentBox)) {
                cartContainer.appendChild(paymentBox);
            }
        }
    }

    // Appeler la fonction lors du chargement initial
    movePaymentBox();

    
    window.addEventListener('resize', movePaymentBox);



    /*
        ***************************************************************************************
        *************** Inserer dynamiquement les infos dans le panier ********************
        ***************************************************************************************

        Pour chaque id d'album pris du localStorage  :

            1. Prendre les details de l'album depuis la map albums.
            2. Trouver le nom de l'auteur et la serie qui correspondent.
            3. Montrer ces infos dans la page.
    */

                                // ##############################

                                // POUR TESTER  

                                // =============>  localStorage.setItem('id_book', JSON.stringify(["6", "4", "43", "14", "87", "24"]));
                                // localStorage.setItem('id_book', JSON.stringify(["6", "4", "43", "14", "87", "24"]));


    // Récupération des ID des albums depuis localStorage

    let albumIds = JSON.parse(localStorage.getItem('id_book')) || [];



    // Sélectionner l'élément où ajouter les produits
    const cartProductContainer    = document.querySelector('.product-box');
    const paymentSummaryContainer = document.querySelector('.payment-summary');
    const totalPriceContainer     = document.querySelector('.total-price');
    const deliveryPriceContainer  = document.querySelector('.payment-item .payment-price:nth-child(2)');  // Selector for delivery price


    let deliveryCost = 6.01;  // Prix de livraison par defaut
    let totalAmount  = 0;


    /*
        Variable pour stocker les quantités de produits

        - Chaque cle est l'ID d'un produit, et la valeur associe est la quantité de ce produit dans le panier.

        - Par exemple, si un produit avec la ID "1" a une quantité de 2 : 

            productQuantities = {
                                    "1": 2
                                }
    */

    let productQuantities = JSON.parse(localStorage.getItem('productQuantities')) || {}; 


    // ##############################

    
    /**
         * Fonction pour trouver l'image correspondant au livre
         * 
         * @param  {string} title_book - Le titre de l'album à rechercher
         * @return {string}            - Le chemin de l'image ou une image par défaut
     */

    function findImageForAlbum(title_book) 
    {        
        const defaultImage = `https://via.placeholder.com/120x150.png?text=Pas+d'image`;

        // Parcourir toutes les images dans le tableau "TITRES_IMAGES de "titres_Images.js" 
        for (let image_path of TITRES_IMAGES) {

            let ImageLowerCase  = image_path.toLowerCase();           
            let TitleLowerCase  = title_book.toLowerCase();            

            // Vérifier si le nom de l'image (qui peut être assez long) contient le titre de l'album
            if (ImageLowerCase.includes(TitleLowerCase)) {

                // Si on trouve une image qui correspond, on retourne son chemin
                return '../0_assets/BD/albumsMini/' + image_path;
            }
    
        }
        // Si aucune image n'est trouvée 
        return defaultImage;
    }


    // ##############################


    /**
         * Fonction pour afficher les albums dans le panier en utilisant les informations stockées dans `albums`, `auteurs`, et `series`.

        Example de albums.js  =====> albums.set("7", {titre: "Le Waltras", numero: "07", idSerie: "13", idAuteur: "8", prix: "15.20"});

        Example de auteurs.js =====> auteurs.set("8", {nom: "Gaudin, Danard"});
    */

    function displayCartProducts() 
    {

        let totalProducts = 0;  // Nombre total de produits


        if (albumIds.length === 0) {

            document.getElementById("heading").innerText = ' ( 0 produit ) ';
            return;
        }

        // Boucle sur les id dans localStorage
        albumIds.forEach(id => {
                                 // albums est un ficher dans data/
            const current_album = albums.get(id);

            if (current_album && current_album != undefined) 
            {
                totalProducts += 1;  

                const imageUrl = findImageForAlbum(current_album.titre);   // Trouver l'image associée
                const auteur   = auteurs.get(current_album.idAuteur);        
                const serie    = series.get(current_album.idSerie);


                // Récupérer la quantité stockée pour ce produit dans localStorage
                const quantity = productQuantities[id] || 1;  

                
                // Créer une structure HTML pour chaque produit
                const productHtml = `

                    <div class="cart-product" data-id="${id}">

                        <img src="${imageUrl ? imageUrl : 'https://via.placeholder.com/120x150.png?text=Image'}" alt="${current_album.titre}">


                        <div class="product-info">
                            <h3>${current_album.titre}</h3>
                            <p><strong>Auteur:</strong> ${auteur ? auteur.nom : 'Auteur inconnu'}</p>
                            <p><strong>Série:</strong>  ${serie  ? serie.nom  : 'Série inconnue'}</p>
                        </div>


                        <div class="price-quantity">

                            <span class="product-price">${current_album.prix} €</span>

                            <!-- Contrôles de quantité -->

                            <div class="quantity-controls">

                                <button class="remove-btn" aria-label="Supprimer l'article">
                                    <i class="fas fa-trash-alt"></i> <!-- Icône supprimer -->
                                </button>

                                <div class="quantity-wrapper">
                                    <button class="quantity-btn" aria-label="Réduire la quantité">-</button>
                                    <input type="number" value="${quantity}" min="1" class="quantity-input" aria-label="Quantité">
                                    <button class="quantity-btn" aria-label="Augmenter la quantité">+</button>
                                </div>

                            </div>
                        </div>
                    </div>
                `;

                // Ajouter le produit à la section du panier
                cartProductContainer.innerHTML += productHtml;
            }
        });
        // End for loop

        document.getElementById("heading").innerText = ` (${totalProducts} produit${albumIds.length > 1 ? 's' : ''})`;
        
    }


    // ##############################

    // Fonction pour mettre à jour le resume de paiement

    function updatePaymentSummary() 
    {
        const paymentSummaryContainer = document.querySelector('.payment-summary');
        const paymentItems            = paymentSummaryContainer.querySelectorAll('.payment-item');

        // Vider le contenu actuel de la summary
        paymentSummaryContainer.innerHTML = '';

        let totalAmount   = 0;    // Variable pour le total à payer
        let deliveryPrice = 0;    // Variable pour le prix de la livraison

        // Parcourir tous les produits du panier pour calculer le total
        albumIds.forEach(id => {
            
            const current_album = albums.get(id);
            if (current_album) {

                totalAmount += parseFloat(current_album.prix);

                // Ajouter le produit à la section de paiement
                const productHtml = `
                    <div class="payment-item">
                        <p>${current_album.titre}</p>
                        <p class="payment-price">${current_album.prix} €</p>
                    </div>
                `;
                paymentSummaryContainer.innerHTML += productHtml;
            }
        });


        // Vérifier l'option de livraison sélectionnée
        const shippingOptions = document.querySelectorAll('input[name="shipping"]');

        shippingOptions.forEach(option => {

            if (option.checked) {

                const shippingPriceElement = option.nextElementSibling.nextElementSibling; // Récupère l'élément de prix de livraison
                const shippingPriceText    = shippingPriceElement.textContent.trim();

                if (shippingPriceText === 'GRATUIT') {
                    deliveryPrice = 0;
                } 
                else {
                    deliveryPrice = parseFloat(shippingPriceText);
                }
            }
        });

        // Ajouter les frais de livraison au total
        totalAmount += deliveryPrice;

        // Afficher les détails de la livraison
        const deliveryHtml = `
            <div class="payment-item">
                <p>Articles en livraison</p>
                <p class="payment-price">${deliveryPrice > 0 ? deliveryPrice + ' €' : 'GRATUIT'}</p>
            </div>
        `;
        
        paymentSummaryContainer.innerHTML += deliveryHtml;

        // Afficher le total à payer
        const totalHtml = `
            <div class="payment-total">
                <p>Total à payer</p>
                <p class="total-price">${totalAmount.toFixed(2)} €</p>
            </div>
        `;
        paymentSummaryContainer.innerHTML += totalHtml;


        // Mise à jour du bouton de paiement avec le montant total
        const payButton = document.querySelector('.pay-btn');
        payButton.innerHTML = `<i class="fas fa-credit-card"></i> PAIEMENT EN LIGNE (${totalAmount.toFixed(2)} €)`;
    }



    /*
        **********************************************************************************
        ***************  Gestion Dynamique des Quantités et Suppressions *****************
        **********************************************************************************
    */

        // Fonction pour gérer les événements de mise à jour de la quantité

        function setupQuantityControls() 
        {   
            // QuantityControls of all 
            const quantityControls = document.querySelectorAll('.quantity-controls');
            
            quantityControls.forEach(control => {

                const quantityInput = control.querySelector('.quantity-input');
                const removeButton  = control.querySelector('.remove-btn');
    

                // Événement pour les boutons de quantité
                control.querySelectorAll('.quantity-btn').forEach(button => {

                    button.addEventListener('click', function() 
                    {

                        const currentQuantity = parseInt(quantityInput.value);

                        if (button.textContent.trim() === '+')
                        {
                            quantityInput.value = currentQuantity + 1;
                        }
                        else if (button.textContent.trim() === '-') 
                        {
                            if (currentQuantity > 1) {
                                quantityInput.value = currentQuantity - 1;
                            }
                        }
                        updateProductQuantity(currentQuantity, quantityInput.value);
                    });
                });
    

                // Événement pour supprimer l'article

                removeButton.addEventListener('click', function() 
                {   
                    // closest() recherche l'ancêtre le plus proche de l'élément actuel (dans ce cas, control)
                    const productElement = control.closest('.cart-product');

                    const productID      = productElement.dataset.id;  
                    
                    // -- ---------------------------------------

                    // Supprimer le produit de la liste
                    productElement.remove();

                    // Supprime l'entre correspondante a productId dans l'objet productQuantities, qui stocke les quantités de chaque produit.
                    delete productQuantities[productID];  

                    localStorage.setItem('productQuantities', JSON.stringify(productQuantities));
                
                    // -- ---------------------------------------
                
                    let albumIds = JSON.parse(localStorage.getItem('id_book')) || [];

                    albumIds = albumIds.filter(id => id !== productID);

                    // Mettre à jour localStorage avec la nouvelle liste d'IDs
                    localStorage.setItem('id_book', JSON.stringify(albumIds));

                    // -- ---------------------------------------


                    // Mettre à jour le résumé de paiement après suppression
                    updatePaymentSummary();

                    // Mettre à jour le nombre total de produits
                    updateCartCount(); 
                });
            });
        }
    
        // ##############################


    /**
     * Fonction pour mettre à jour la quantité de produits dans le stockage local
     * 
     *   @param {number} oldQuantity - Quantité précédente
     *   @param {number} newQuantity - Nouvelle quantité
     */

    function updateProductQuantity(oldQuantity, newQuantity) 
    {
        // Mettre à jour la quantité dans le stockage local
        const productID  = event.target.closest('.cart-product').dataset.id;  

        console.log(productID);

        productQuantities[productID] = newQuantity;

        localStorage.setItem('productQuantities', JSON.stringify(productQuantities));

        // Mettre à jour le résumé de paiement
        updatePaymentSummary();
    }

    // ##############################


    // Fonction pour mettre à jour le nombre total de produits affichés
    
    function updateCartCount() 
    {
        let totalProducts = 0;  
        const quantities = Object.values(productQuantities);  // Récupérer les quantités

        // Ajouter chaque quantité au total
        for (let qty of quantities) {
            totalProducts += parseInt(qty); 
        }

        document.getElementById("heading").innerText = ` (${totalProducts} produit${totalProducts !== 1 ? 's' : ''})`;
    }


    // ##############################

    // Appeler la fonction pour afficher les albums dans le panier
    displayCartProducts();

    // Configurer les contrôles de quantité
    setupQuantityControls();

    // Mettre à jour le résumé de paiement
    updatePaymentSummary();


    // Appeler la fonction lors de la modification de l'option de livraison
    const shippingOptions = document.querySelectorAll('input[name="shipping"]');

    shippingOptions.forEach(option => {
        option.addEventListener('change', updatePaymentSummary);
    });

});

