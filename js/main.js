// Récupère le champ mot de passe
var passwordField = document.getElementById('password');
// Récupère la zone d'erreur du mot de passe
var passwordError = document.getElementById('password-error');


// Associe une action au fait de cliquer en-dehors du champ
passwordField.onchange = function() {
  // Si le contenu actuel du champ a une longueur inférieure à 4
  if (passwordField.value.length < 4) {
    // Modifie le message d'erreur
    passwordError.innerText = "Mot de passe trop court";
    // Enlève la classe qui rend le message d'erreur invisible
    passwordError.classList.remove('d-none');
  // Sinon
  } else {
    // Modifie le message d'erreur
    passwordError.innerText = "";
    // Rajoute la classe qui rend le message d'erreur invisible
    passwordError.classList.add('d-none');
  }
}

// Récupère le champ nom d'utilisateur
var usernameField = document.getElementById('username');
// Récupère la zone d'erreur de l'utilisateur
var usernameError = document.getElementById('username-error');


// Associe une action au fait de cliquer en-dehors du champ
usernameField.onchange = function() {
  if (usernameField.value.includes(' ')) {
    // Modifie le message d'erreur
    usernameError.innerText = "Le nom d'utilisateur ne doit pas contenir d'espace";
    // Enlève la classe qui rend le message d'erreur invisible
    usernameError.classList.remove('d-none');
  } else {
    // Modifie le message d'erreur
    usernameError.innerText = "";
    // Rajoute la classe qui rend le message d'erreur invisible
    usernameError.classList.add('d-none');
  }
}


// Récupère le champ confirmation du mot de passe
var passwordComfirmField = document.getElementById('password_confirm');
// Récupère la zone d'erreur de la confirmation du mot de passe
var passwordComfirmError = document.getElementById('password-confirm-error');


// Associe une action au fait de cliquer en-dehors du champ
passwordComfirmField.onchange = function () {
  if (passwordComfirmField.value === passwordField.value) {
    // Modifie le message d'erreur
    passwordComfirmError.innerText = "";
    // Rajoute la classe qui rend le message d'erreur invisible
    passwordComfirmError.classList.add('d-none');
  // Sinon
  } else {
    // Modifie le message d'erreur
    passwordComfirmError.innerText = "Les mots de passe ne correspondent pas";
    // Enlève la classe qui rend le message d'erreur invisible
    passwordComfirmError.classList.remove('d-none');
  }
}
