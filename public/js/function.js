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

// Arene
let buttonAdv = document.querySelectorAll(".buttonAttaqueAdv");
let buttonJoueur = document.querySelectorAll(".buttonAttaqueJr");
let methodeAttaqueAdv = "";
let methodeAttaqueJoueur = "";

let choixJoueur = "";
let choixAdversaire = "";

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

    ecrans.forEach((perso) => {
      perso.addEventListener("click", () => {
        if (perso.className == "bulbizarre") {
          choixJoueur = INSTANCE.bulbizarre;
          INSTANCE.personnages.splice(0, 1);
        } else if (perso.className == "carapuce") {
          choixJoueur = INSTANCE.carapuce;
          INSTANCE.personnages.splice(1, 1);
        } else if (perso.className == "salameche") {
          choixJoueur = INSTANCE.salameche;
          INSTANCE.personnages.splice(2, 1);
        }
        choixAdversaire =
          INSTANCE.personnages[
            Math.floor(Math.random() * INSTANCE.personnages.length)
          ];
        selectionPerso.style.display = "none";
        document.getElementById("arene").style.display = "block";
        console.log(`Choix adversaire ${choixAdversaire.nom}`);
        console.log(`Choix joueur ${choixJoueur.nom}`); //! si je sors, ca ne marche plus

        // while (choixAdversaire.vie > 0 && choixJoueur.vie > 0) {
        // }
        //! innerText adversaire
        document
          .querySelector(".barreAdversaire")
          .querySelector("p").innerText = choixAdversaire.nom;
        document
          .querySelector(".barreAdversaire")
          .querySelectorAll("p")[1].innerText +=
          " " + choixAdversaire.vie + "HP";
        document.querySelector(".elementPokemonAdv").innerText +=
          " " + choixAdversaire.element;

        //? Filtrer les methodes et les remplacer dans les buttons
        methodeAttaqueAdv = Object.getOwnPropertyNames(
          Object.getPrototypeOf(choixAdversaire)
        ).filter((property) => property !== "constructor");

        buttonAdv.forEach((button, index) => {
          button.innerHTML = methodeAttaqueAdv[index];
          button.addEventListener("click", () => {
              let nomMethodes = methodeAttaqueAdv[index]
            choixAdversaire[nomMethodes]()
            console.log("attaquer");
          })
        });

        //! innerText Joueur
        document.querySelector(".barreJoueur").querySelector("p").innerText =
          choixJoueur.nom;
        document
          .querySelector(".barreJoueur")
          .querySelectorAll("p")[1].innerText += " " + choixJoueur.vie + "HP";
        document.querySelector(".elementPokemonJoueur").innerText +=
          " " + choixAdversaire.element;

        //? Filtrer les methodes et les remplacer dans les buttons
        methodeAttaqueJoueur = Object.getOwnPropertyNames(
          Object.getPrototypeOf(choixJoueur)
        ).filter((property) => property !== "constructor");

        buttonJoueur.forEach((button, index) => {
          button.innerHTML = methodeAttaqueJoueur[index];
          button.addEventListener("click", () => {
            let nomMethodes = methodeAttaqueJoueur[index]
          choixJoueur[nomMethodes]()
          console.log("attaquer");
        })

        });
      });
    });
  });
}
