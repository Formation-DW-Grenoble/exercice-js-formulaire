// Objet stockant pour chaque champ, si son contenu est valide ou non
var valid = {
  'email': false,
  'username': false,
  'password': false,
  'password-confirm': false,
};

// Récupère le champ mot de passe
var passwordField = document.getElementById('password');
// Récupère la zone d'erreur du mot de passe
var passwordError = document.getElementById('password-error');


// Associe une action au fait de cliquer en-dehors du champ
passwordField.onchange = function() {
  // Si le contenu actuel du champ a une longueur inférieure à 4
  if (passwordField.value.length < 4) {
    // Invalide le champ mot de passe
    valid['password'] = false;
    // Modifie le message d'erreur
    passwordError.innerText = "Mot de passe trop court";
    // Enlève la classe qui rend le message d'erreur invisible
    passwordError.classList.remove('d-none');
  // Sinon
  } else {
    // Valide le champ mot de passe
    valid['password'] = true;
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
    // Invalide le champ nom d'utilisateur
    valid['username'] = false;
    // Modifie le message d'erreur
    usernameError.innerText = "Le nom d'utilisateur ne doit pas contenir d'espace";
    // Enlève la classe qui rend le message d'erreur invisible
    usernameError.classList.remove('d-none');
  } else {
    // Valide le champ nom d'utilisateur
    valid['username'] = true;
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
    // Valide le champ confirmation du mot de passe
    valid['password-confirm'] = true;
    // Modifie le message d'erreur
    passwordComfirmError.innerText = "";
    // Rajoute la classe qui rend le message d'erreur invisible
    passwordComfirmError.classList.add('d-none');
  // Sinon
  } else {
    // Invalide le champ confirmation du mot de passe
    valid['password-confirm'] = false;
    // Modifie le message d'erreur
    passwordComfirmError.innerText = "Les mots de passe ne correspondent pas";
    // Enlève la classe qui rend le message d'erreur invisible
    passwordComfirmError.classList.remove('d-none');
  }
}


// Récupère le champ e-mail
var emailField = document.getElementById('email');
// Récupère la zone d'erreur de l'e-mail
var emailError = document.getElementById('email-error');


// Associe une action au fait de cliquer en-dehors du champ
emailField.onchange = function () {
  // Si l'e-mail est conforme à l'expression régulière:
  // - un (ou plus) caractère autre qu'un espace,
  // - puis une @,
  // - puis un (ou plus) caractère autre qu'un espace,
  // - puis un point,
  // - puis un (ou plus) caractère autre qu'un espace
  if (emailField.value.match(/\S+@\S+\.\S+/)) {
    // Valide le champ e-mail
    valid['email'] = true;
    // Modifie le message d'erreur
    emailError.innerText = "";
    // Rajoute la classe qui rend le message d'erreur invisible
    emailError.classList.add('d-none');
  // Sinon
  } else {
    // Invalide la champ e-mail
    valid['email'] = false;
    // Modifie le message d'erreur
    emailError.innerText = "Il ne s'agit pas d'une adresse e-mail valide";
    // Enlève la classe qui rend le message d'erreur invisible
    emailError.classList.remove('d-none');
  }
}


// Récupère le formulaire d'enregistrement
var registrationForm = document.getElementById('registration-form');

// Associe une action au fait d'envoyer le formulaire
registrationForm.onsubmit = function(event) {
  // Si tous les champs ont été validés
  if (valid['username'] && valid['email'] && valid['password'] && valid['password-confirm']) {
    // Envoie le formulaire normalement
  // Sinon, si l'un des champs contient une erreur
  } else {
    // Empêche le formulaire de s'envoyer
    event.preventDefault();
    // Affiche une alerte à l'attention de l'utilisateur
    window.alert("Merci de vérifier votre saisie!");
  }
}
