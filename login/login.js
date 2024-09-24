

// // Variables simulées pour l'utilisateur

// const storedUser = {

//     username : "john",
//     email    : "john@gmail.com",
//     password : "john"
// };



// #############################################################


document.getElementById('login-form').addEventListener('submit', function(event) {

    event.preventDefault();

    // Récupérer les valeurs du formulaire 
    let usernameOrEmail = document.getElementById('username').value;
    let enteredPassword = document.getElementById('password').value;


    // Récupérer les utilisateurs stockés lors de l'inscription
    const users = JSON.parse(localStorage.getItem('users')) || []; 


    // Chercher l'utilisateur correspondant dans la liste des utilisateurs
    const user = users.find(user => 
        (user.email === usernameOrEmail || user.name === usernameOrEmail) && user.password === enteredPassword
    );

    // Vérifier si l'utilisateur existe dans LocalStorage
    if (user) 
    {
        showMessage('Connexion réussie !', 'success');

        setTimeout( () => { window.location.href = "../Accueil/accueil.html"; } , 1500);
    } 
    else {
        showMessage('Nom d\'utilisateur ou mot de passe incorrect.', 'error');
    }
});



// Fonction pour afficher le message
function showMessage(message, className) 
{
    const messageDiv         = document.getElementById('message');
    messageDiv.textContent   = message;
    messageDiv.className     = className;  
    messageDiv.style.display = 'block';      // Affiche le message


    // Masquer le message après un délai
    setTimeout( () => {  messageDiv.style.display = 'none'; } , 3000); // Masquer après 3 secondes
}