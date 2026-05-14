/*il s'agit d'un code qui propose des mots et des phrases aux users
et les demandes de les resaisir identiquement pour augmenter le score
*/
//FONCTIONS
function afficherResultat(score,nbremot){
    return "Votre score est de " + score + " sur " + nbremot + " proposés";
}
function choisirPhraseouMot(){
 /*let reponse= "";
 while(reponse!=="mot" && reponse!=="phrase"){
   reponse = prompt("Voulez vous des mots ou des phrases(mot ou phrase)?");
 }
 return reponse;*/
}
function afficherproposition(position){
  zoneProposition.textContent = listemots[position];
 /*let i = 0;
  for (i=1;i<4;i++){
      let mot= prompt(liste+ "\n Entrez le mot "+i);
      if(mot === liste[i-1]){
         console.log("Mot a la position "+i+" correcte");
         score++;
      } else{
          switch (mot){
        case "idiot":
            console.log("vous etes vulgaire");
            break;
        case "imbecile":
            console.log("soit plus polie");
            break;
        default:
            console.log("Mot a la position "+i+" incorrecte.");
    }

      }
  }
  afficherResultat(score,listemots.length);*/
}
function testmot(motTest,motComparaison){
  /* let i = 0;
  for (i=1;i<4;i++){
      let phrase= prompt(liste+ "\n Entrez la phrase "+i);
      if(phrase === liste[i-1]){
         console.log("Phrase a la position "+i+" correcte");
         score++;
      } else{
         console.log("Phrase a la position "+i+" incorrecte");
      }
  }
  afficherResultat(score,listephrases.length);*/
    if(motTest === motComparaison){
        return true;
    } else{
        return false;
    }

}
function lancerjeu(i=0) {
 /* let answer= prompt("Voulez vous commencez le jeu(Oui ou Non)?");
 if(answer==="Oui" || answer ==="oui" || answer ==="OUI"){
 let reponse = choisirPhraseouMot();
 if(reponse==="mot"){
 lancerBoucledeJeuMot(listemots);
} else{
   lancerBoucledeJeuPhrase(listephrases);
}
 }*/
    afficherproposition(i);
    let score=0;
   btnValider = document.getElementById("btnValiderMot");
  btnValider.addEventListener("click", () => {
   
    //test pour l'egalite des mots
    if(testmot(motTapee.value,listemots[i])){
      score+=1;
      zoneScore.textContent = afficherResultat(score,listemots.length);
    }

    i=i+1;
    if(i==listemots.length){
      zoneProposition.textContent = "Le jeu est terminé";
    }else{
      afficherproposition(i);
    }

    
    // On affiche sa valeur (.value)
    
    motTapee.value = "";
    
  })
  ;
}

 
