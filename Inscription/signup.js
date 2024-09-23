
  window.addEventListener('load', function() {
  const signUpForm = document.getElementById('signUpForm');
  const passwordInput = document.getElementById('signUpPassword');
  const togglePassword = document.getElementById('togglePassword');

  if (signUpForm) {
      signUpForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const name = document.getElementById('signUpName').value;
          const email = document.getElementById('signUpEmail').value;
          const password = passwordInput.value;

          if (!isValidEmail(email)) {
              Swal.fire({
                  icon: 'error',
                  title: 'Email Invalide',
                  text: 'Veuillez entrer une adresse email valide.'
              });
              return;
          }

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

  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  function isStrongPassword(password) {
      const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return strongPasswordRegex.test(password);
  }
});