// Récupère le champ mot de passe
var passwordField = document.getElementById('password');

// Associe une action au fait de cliquer en-dehors du champ
passwordField.onblur = function() {
  // Si le contenu actuel du champ a une longueur inférieure à 4
  if (passwordField.value.length < 4) {
    // Afficher un message
    console.log("Mot de passe trop court");
  // Sinon
  } else {
    // Afficher un autre message
    console.log("Mot de passe valide");
  }
}
