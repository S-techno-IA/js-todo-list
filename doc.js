const monInput= document.querySelector("input");
const AddBouton=document.querySelector("button");
const AddListe=document.querySelector('#AjtListe');

console.log(monInput, AddBouton, AddListe);

 const typedText = monInput.value;

AddBouton.addEventListener('click', function () {
  console.log("Button waz clicked !");
 
  //Récupérer le texte et retire les espaces inutiles
  const taskText = monInput.value.trim();

  //Pour éviter les click vides
  if (typedText===''){
    return;
  }

  //Ajout des éléments de la Liste
  const li=document.createElement('li');

  //Définir le texte
  li.innerText=typedText;

  //Ajouter à la liste
  AddListe.appendChild(li);

  //Vider champ après saisie
  monInput.value = '';
});