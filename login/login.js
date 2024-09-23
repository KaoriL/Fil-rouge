

// Variables simulées pour l'utilisateur

const storedUser = {

    username : "john",
    email    : "john@gmail.com",
    password : "john"
};



// #############################################################


document.getElementById('login-form').addEventListener('submit', function(event) {

    event.preventDefault();

    // Récupérer les valeurs du formulaire 
    let usernameOrEmail = document.getElementById('username').value;
    let enteredPassword = document.getElementById('password').value;


    // Récupérer les informations de l'utilisateur stockées lors de l'inscription
    const storedUser = JSON.parse(localStorage.getItem('user'));  


    // Vérifier si l'utilisateur existe dans LocalStorage
    if (storedUser) 
    {
        const { username, email, password } = storedUser;

        // Comparer les informations saisies avec celles stockées
        
        if ( (usernameOrEmail === username || usernameOrEmail === email) && enteredPassword  === password) 
        {
            showMessage('Connexion réussie !', 'success');

            // Rediriger vers la page d'accueil après un court délai

            setTimeout( () => { window.location.href = "../Accueil/accueil.html"; } , 1500);
        } 
        else 
        {
            showMessage('Nom d\'utilisateur ou mot de passe incorrect.', 'error')
        }
    } 
    else {
        showMessage('Aucun compte n\'a été trouvé. Veuillez vous inscrire.', 'error');
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