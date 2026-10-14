const monInput = document.querySelector("input");
const AddBouton = document.querySelector("button");
const AddListe = document.querySelector('#AjtListe');

console.log(monInput, AddBouton, AddListe);

AddBouton.addEventListener('click', function () {
  console.log("Button waz clicked !");

  // Récupérer le texte et retirer les espaces inutiles
  const typedText = monInput.value.trim();

  // Pour éviter les clics vides
  if (typedText === '') {
    return;
  }

  // Ajout des éléments de la Liste
  const li = document.createElement('li');

  // Définir le texte
  li.innerText = typedText;

  // Ajouter à la liste
  AddListe.appendChild(li);

  // Vider le champ après saisie
  monInput.value = '';
});