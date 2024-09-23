// // Wait for the DOM to be fully loaded before executing the script
// document.addEventListener('DOMContentLoaded', function() {
//   // Get the sign-up form element
//   const signUpForm = document.getElementById('signUpForm');

//   // Check if the sign-up form exists on the page
//   if (signUpForm) {
//       // Add a submit event listener to the form
//       signUpForm.addEventListener('submit', function(e) {
//           // Prevent the default form submission behavior
//           e.preventDefault();
          
//           // Get the values entered by the user
//           const name = document.getElementById('signUpName').value;
//           const email = document.getElementById('signUpEmail').value;
//           const password = document.getElementById('signUpPassword').value;

//           // Validate the email format
//           if (!isValidEmail(email)) {
//               alert('Please enter a valid email address.');
//               return;
//           }

//           // Check if the password meets the minimum length requirement
//           if (password.length < 6) {
//               alert('Password must be at least 6 characters long.');
//               return;
//           }

//           // Retrieve existing users from local storage or initialize an empty array
//           const users = JSON.parse(localStorage.getItem('users')) || [];
          
//           // Check if the email is already registered
//           if (users.some(user => user.email === email)) {
//               alert('This email is already registered.');
//               return;
//           }

//           // Add the new user to the array
//           users.push({ name, email, password });
          
//           // Save the updated users array back to local storage
//           localStorage.setItem('users', JSON.stringify(users));

//           // Inform the user of successful registration
//           alert('Sign up successful!');
          
//           // Redirect to the sign-in page
//           window.location.href = 'signin.html';
//       });
//   }

//   // Function to validate email format using a regular expression
//   function isValidEmail(email) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return emailRegex.test(email);
//   }
// });


// window.addEventListener('load', function() {
//   const signUpForm = document.getElementById('signUpForm');

//   if (signUpForm) {
//       signUpForm.addEventListener('submit', function(e) {
//           e.preventDefault();
          
//           const name = document.getElementById('signUpName').value;
//           const email = document.getElementById('signUpEmail').value;
//           const password = document.getElementById('signUpPassword').value;

//           if (!isValidEmail(email)) {
//               Swal.fire({
//                   icon: 'error',
//                   title: 'Email Invalide',
//                   text: 'Veuillez entrer une adresse email valide.'
//               });
//               return;
//           }

//           if (password.length < 6) {
//               Swal.fire({
//                   icon: 'error',
//                   title: 'Mot de Passe Trop Court',
//                   text: 'Le mot de passe doit contenir au moins 6 caractères.'
//               });
//               return;
//           }

//           const users = JSON.parse(localStorage.getItem('users')) || [];
          
//           if (users.find(user => user.email === email)) {
//               Swal.fire({
//                   icon: 'error',
//                   title: 'Email Déjà Enregistré',
//                   text: 'Cette adresse email est déjà enregistrée.'
//               });
//               return;
//           }

//           users.push({ name, email, password });
//           localStorage.setItem('users', JSON.stringify(users));

//           Swal.fire({
//               icon: 'success',
//               title: 'Inscription Réussie !',
//               text: 'Vous pouvez maintenant vous connecter avec votre nouveau compte.',
//               showConfirmButton: false,
//               timer: 1500
//           }).then(() => {
//               window.location.href = '../login/login.html';
//           });
//       });
//   }

//   function isValidEmail(email) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return emailRegex.test(email);
//   }
// });

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