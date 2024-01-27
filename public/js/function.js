import * as INSTANCE from "./instance.js";

// Ecran Bienvenue
let ecranBienvenue = document.getElementById("ecranBienvenue");
let startButton = document.getElementById("start-button");

// Ecran Regles
let regles = document.getElementById("regles");
let buttonRegles = document.getElementById("buttonRegles");

// Ecran Selection Personnages
let selectionPerso = document.getElementById("selectionPerso");
let ecranCarapuce = document.querySelector(".carapuce");
let ecranBulbizarre = document.querySelector(".bulbizarre");
let ecranSalameche = document.querySelector(".salameche");
let ecrans = [ecranBulbizarre, ecranCarapuce, ecranSalameche];


let choixJoueur = "";
let choixAdversaire = ""

export function startGame() {
  window.addEventListener("load", function () {
    //! Ecran Bienvenue
    startButton.addEventListener("click", () => {
      ecranBienvenue.style.display = "none";
      regles.style.display = "block";
    });

    //! Ecran regles
    buttonRegles.addEventListener("click", () => {
      regles.style.display = "none";
      selectionPerso.style.display = "flex";
    });

    // //! Choix Personnages
    // ecranBulbizarre.addEventListener("click",()=> {
    //     choixJoueur = INSTANCE.bulbizarre
    //     console.log(choixJoueur);
    // })
    // ecranCarapuce.addEventListener("click",()=> {
    //     choixJoueur = INSTANCE.carapuce
    //     console.log(choixJoueur);
    // })
    // ecranSalameche.addEventListener("click",()=> {
    //     choixJoueur = INSTANCE.salameche
    //     console.log(choixJoueur);
    // })

    // console.log(INSTANCE.personnages);

    ecrans.forEach((element) => {
      element.addEventListener("click", () => {
        if ((element.className == "bulbizarre")) {
          choixJoueur = INSTANCE.bulbizarre;
          INSTANCE.personnages.splice(0, 1);
        //   console.log(INSTANCE.personnages);
        } else if ((element.className == "carapuce")) {
          choixJoueur = INSTANCE.carapuce;
          INSTANCE.personnages.splice(1, 1);
        //   console.log(INSTANCE.personnages);
        } else if ((element.className == "salameche")) {
          choixJoueur = INSTANCE.salameche;
          INSTANCE.personnages.splice(2, 1);
        //   console.log(INSTANCE.personnages);
        }
        choixAdversaire = INSTANCE.personnages[Math.floor(Math.random() * INSTANCE.personnages.length)]
        console.log(`Choix adversaire ${choixAdversaire.nom}`);
        console.log(`Choix joueur ${choixJoueur.nom}`); //! si je sors, ca ne marche plus

        // while (choixAdversaire.vie > 0 && choixJoueur.vie > 0) {
            
        // }
    });

    });
  });
}
