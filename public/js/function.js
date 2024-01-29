import * as INSTANCE from "./instance.js";
import * as CIBLAGE from "./ciblage.js";

function checkVie(pokemon1, pokemon2) {
  if (pokemon1.vie <= 0) {
    console.log(`${pokemon1.nom} à perdu`);
    return false
  } else if (pokemon2.vie <= 0) {
    console.log(`${pokemon2.nom} à perdu`);
    return false
  }
}

let methodeAttaqueAdv = "";
let methodeAttaqueJoueur = "";

let choixJoueur = "";
let choixAdversaire = "";

export function startGame() {
  window.addEventListener("load", function () {
    //! Ecran Bienvenue
    CIBLAGE.startButton.addEventListener("click", () => {
      CIBLAGE.ecranBienvenue.style.display = "none";
      CIBLAGE.regles.style.display = "block";
    });

    //! Ecran regles
    buttonRegles.addEventListener("click", () => {
      CIBLAGE.regles.style.display = "none";
      CIBLAGE.selectionPerso.style.display = "flex";
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

    CIBLAGE.ecrans.forEach((perso) => {
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

        // image adversaire

        if (choixAdversaire.nom == "Bulbizarre") {
          CIBLAGE.imageAdv.src = INSTANCE.imagesAdversaire.option1;
        } else if (choixAdversaire.nom == "Salamèche") {
          CIBLAGE.imageAdv.src = INSTANCE.imagesAdversaire.option3;
        } else if (choixAdversaire.nom == "Carapuce") {
          CIBLAGE.imageAdv.src = INSTANCE.imagesAdversaire.option2;
        }

        // image joueur

        if (choixJoueur.nom == "Bulbizarre") {
          CIBLAGE.imageJoueur.src = INSTANCE.imagesJoueur.option1;
        } else if (choixJoueur.nom == "Salamèche") {
          CIBLAGE.imageJoueur.src = INSTANCE.imagesJoueur.option3;
        } else if (choixJoueur.nom == "Carapuce") {
          CIBLAGE.imageJoueur.src = INSTANCE.imagesJoueur.option2;
        }
        CIBLAGE.selectionPerso.style.display = "none";
        document.getElementById("arene").style.display = "block";
        console.log(`Choix adversaire ${choixAdversaire.nom}`);
        console.log(`Choix joueur ${choixJoueur.nom}`);

        // -------------- innerText adversaire
        CIBLAGE.lesPAdv[0].innerText = choixAdversaire.nom;
        CIBLAGE.lesPAdv[1].innerText += ` ${choixAdversaire.vie} HP`;

        document.querySelector(".elementPokemonAdv").innerText +=
          " " + choixAdversaire.element;

        methodeAttaqueAdv = Object.getOwnPropertyNames(
          Object.getPrototypeOf(choixAdversaire)
        ).filter((property) => property !== "constructor");

        //  ------------ innerText Joueur--------
        CIBLAGE.lesPj[0].innerText = choixJoueur.nom;
        CIBLAGE.lesPj[1].innerText += `${choixJoueur.vie} HP`;
        document.querySelector(".elementPokemonJoueur").innerText +=
          `Element : ${choixJoueur.element}`;

        //? Filtrer les methodes et les remplacer dans les buttons
        methodeAttaqueJoueur = Object.getOwnPropertyNames(
          Object.getPrototypeOf(choixJoueur)
        ).filter((property) => property !== "constructor");

        CIBLAGE.buttonAdv.forEach((button, index) => {
          button.innerHTML = methodeAttaqueAdv[index];
          button.addEventListener("click", () => {
            let randomIndex = Math.floor(Math.random() * methodeAttaqueAdv.length)
            let nomMethodes = methodeAttaqueAdv[randomIndex];
            choixAdversaire[nomMethodes](choixJoueur);
            CIBLAGE.lesPAdv[1].innerText = `Point de vie :${choixAdversaire.vie} HP`;
            console.log(nomMethodes);
            checkVie(choixJoueur, choixAdversaire);
            console.log(choixJoueur);
          });
        });

        CIBLAGE.buttonJoueur.forEach((button, index) => {
          button.innerHTML = methodeAttaqueJoueur[index];
          button.addEventListener("click", () => {
            let nomMethodes = methodeAttaqueJoueur[index];
            choixJoueur[nomMethodes](choixAdversaire);
            CIBLAGE.lesPj[1].innerText = `Points de vie :${choixJoueur.vie} HP`;

            // MAJ adversaire
            CIBLAGE.lesPAdv[1].innerText = `Points de vie : ${choixAdversaire.vie} HP`;
            document.querySelector(".elementPokemonAdv").innerText =`Element : ${choixAdversaire.element}`;


            //MAJ joueur 
            document.querySelector(".elementPokemonJoueur").innerText =
            `Element : ${choixJoueur.element}`;
  

            checkVie(choixAdversaire, choixJoueur);
            console.log(choixAdversaire);
          });
        });
      });
    });
  });
}


