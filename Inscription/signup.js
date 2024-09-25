


window.addEventListener('load', function() {
  const signUpForm = document.getElementById('signUpForm');
  const nameInput = document.getElementById('signUpName');
  const emailInput = document.getElementById('signUpEmail');
  const passwordInput = document.getElementById('signUpPassword');
  const togglePassword = document.getElementById('togglePassword');

  // Navbar toggle functionality
  const navbarToggler = document.getElementById('navbarToggler');
  const navbarMenu = document.getElementById('navbarMenu');

  if (navbarToggler && navbarMenu) {
    navbarToggler.addEventListener('click', function() {
      navbarMenu.classList.toggle('show');
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  if (signUpForm) {
    signUpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;

      // Check if name is empty or contains only numbers
      if (!name || !/[a-zA-Z]/.test(name)) {
        Swal.fire({
          icon: 'error',
          title: 'Nom Invalide',
          text: 'Le nom doit contenir au moins une lettre et ne peut pas être vide.'
        });
        return;
      }

      // Check if email is empty
      if (!email) {
        Swal.fire({
          icon: 'error',
          title: 'Email Manquant',
          text: 'Veuillez entrer une adresse email.'
        });
        return;
      }

      // Check if email is valid
      if (!isValidEmail(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Email Invalide',
          text: 'Veuillez entrer une adresse email valide.'
        });
        return;
      }

      // Check if password is empty
      if (!password) {
        Swal.fire({
          icon: 'error',
          title: 'Mot de Passe Manquant',
          text: 'Veuillez entrer un mot de passe.'
        });
        return;
      }

      // Check if password is strong
      if (!isStrongPassword(password)) {
        Swal.fire({
          icon: 'error',
          title: 'Mot de Passe Faible',
          text: 'Le mot de passe doit contenir au moins 8 caractères, incluant une majuscule, une minuscule, un chiffre et un caractère spécial.'
        });
        return;
      }

      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      if (users.find(user => user.email === email)) {
        Swal.fire({
          icon: 'error',
          title: 'Email Déjà Enregistré',
          text: 'Cette adresse email est déjà enregistrée.'
        });
        return;
      }

      users.push({ name: name, email: email, password: password });
      localStorage.setItem('users', JSON.stringify(users));

      Swal.fire({
        icon: 'success',
        title: 'Inscription Réussie !',
        text: 'Vous pouvez maintenant vous connecter avec votre nouveau compte.',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        window.location.href = '../login/login.html';
      });
    });
  }

  // Toggle password visibility
  if (togglePassword) {
    togglePassword.addEventListener('click', function() {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      this.querySelector('i').classList.toggle('fa-eye');
      this.querySelector('i').classList.toggle('fa-eye-slash');
    });
  }

  

  function isStrongPassword(password) {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  }
});