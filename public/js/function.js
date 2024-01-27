import * as INSTANCE from "./instance.js";

// Ecran Bienvenue
const ecranBienvenue = document.getElementById("ecranBienvenue");
const startButton = document.getElementById("start-button");

// Ecran Regles
const regles = document.getElementById("regles");
const buttonRegles = document.getElementById("buttonRegles");

// Ecran Selection Personnages
const selectionPerso = document.getElementById("selectionPerso");
const ecranCarapuce = document.querySelector(".carapuce")
const ecranBulbizarre = document.querySelector(".bulbizarre")
const ecranSalameche = document.querySelector(".salameche")

const gameScreen = document.getElementById("ecranJeu");

export function startGame() {
  window.addEventListener("load", function () {
    startButton.addEventListener("click", () => {
      ecranBienvenue.style.display = "none";
      regles.style.display = "block";
    });

    buttonRegles.addEventListener("click", () => {
      regles.style.display = "none";
      selectionPerso.style.display = "flex";
    });

    ecranBulbizarre.addEventListener("click",()=> {
        console.log(ecranBulbizarre);
    })
    ecranCarapuce.addEventListener("click",()=> {
        console.log(ecranCarapuce);
    })
    ecranSalameche.addEventListener("click",()=> {
        console.log(ecranSalameche);
    })

  });
}
