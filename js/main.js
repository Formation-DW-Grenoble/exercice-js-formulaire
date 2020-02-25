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
