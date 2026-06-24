// --- Sélection des éléments HTML ---
const inputEcriture   = document.getElementById("inputEcriture");
const btnValider      = document.getElementById("btnValiderMot");
const zoneProposition = document.querySelector(".zoneProposition");
const zoneScore       = document.querySelector(".zoneScore span");
const listeBtnRadio   = document.querySelectorAll(".optionSource input");
const btnReset        = document.getElementById("reset");
// --- Variables d'état du jeu ---
let score = 0;
let indexActuel = 0;
let listeActive = listeMots; // La liste utilisée (mots ou phrases)

// --- Fonctions ---

// Affiche le mot/phrase à la position donnée
function afficherProposition() {
  zoneProposition.textContent = listeActive[indexActuel];
}

// Vérifie si le texte tapé correspond à la proposition
function verifierReponse() {
  const reponse = inputEcriture.value;

  if (reponse === listeActive[indexActuel]) {
    score++;
  }

  indexActuel++;
  inputEcriture.value = "";

  if (indexActuel >= listeActive.length) {
    zoneProposition.textContent = "Jeu terminé !";
    btnValider.disabled = true;
  } else {
    afficherProposition();
  }

  zoneScore.textContent = "Score : " + score + " / " + listeActive.length;
}

// Change la liste active selon le bouton radio sélectionné
function changerSource(event) {
  listeActive = event.target.value === "phrase" ? listePhrases : listeMots;
  score = 0;
  indexActuel = 0;
  btnValider.disabled = false;
  afficherProposition();
  zoneScore.textContent = "Score : 0 / " + listeActive.length;
}

// --- Démarrage du jeu ---
afficherProposition();

// Écouter le clic sur "Valider"
btnValider.addEventListener("click", verifierReponse);

// Écouter les boutons radio pour changer de liste
listeBtnRadio.forEach((btn) => {
  btn.addEventListener("change", changerSource);
});

btnReset.addEventListener("click", () =>{
    let score = 0;
    let indexActuel = 0;
    let listeActive = listeMots;
    afficherProposition();
})