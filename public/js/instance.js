import * as CLASS from "./class.js";
export let bulbizarre = new CLASS.Bulbizarre(
  "Bulbizarre",
  1300,
  110,
  `Utilisation des pouvoirs végétaux.`,
  0,
  {}
);

export let salameche = new CLASS.Salameche(
  "Salamèche",
  1200,
  130,
  `Contrôle du feu ardent.`,
  0,
  {}
);

export let carapuce = new CLASS.Carapuce(
  "Carapuce",
  1250,
  110,
  ` Maîtrise des attaques aquatiques.`,
  0,
  {}
);
export let personnages = [bulbizarre, carapuce, salameche];

//! Carapuce Stats
let carapuceStats = document.querySelectorAll(".carapuceStats");

carapuceStats[0].innerText += `${carapuce.vie} HP`;
carapuceStats[1].innerText += `${carapuce.attaque} ATK`;
carapuceStats[2].innerText += carapuce.specialite;

//! Salameche Stats
let salamecheStats = document.querySelectorAll(".salamecheStats");

salamecheStats[0].innerText += `${salameche.vie} HP`;
salamecheStats[1].innerText += `${salameche.attaque} ATK`;
salamecheStats[2].innerText += salameche.specialite;

//! Bulbizarre Stats
let bulbizarreStats = document.querySelectorAll(".bulbizarreStats");

bulbizarreStats[0].innerText += `${bulbizarre.vie} HP`;
bulbizarreStats[1].innerText += `${bulbizarre.attaque} ATK`;
bulbizarreStats[2].innerText += bulbizarre.specialite;

//! Methode personnages
export let carapuceMethode = [
  carapuce.Pistolet_à_O,
  carapuce.coup_d_Boue,
  carapuce.hydrocanon,
  carapuce.jet_d_Eau,
];

export let bulbizarreMethode = [
  bulbizarre.bombe_Acide,
  bulbizarre.fouet_Lianes,
  bulbizarre.racine_Mêlée,
  bulbizarre.végé_Griffe,
];

export let salamecheMethode = [
  salameche.flamme_Ardente,
  salameche.flammèche,
  salameche.griffe,
  salameche.griffe,
];

export let imagesAdversaire = {
    option1 : "./public/src/img/bulbiFace.png",
    option2 : "./public/src/img/carapuceFace.png",
    option3 : "./public/src/img/salamecheFace.png" 
}

export let imagesJoueur = {
    option1 : "./public/src/img/bulbiDos.png",
    option2 : "./public/src/img/carapuceDos.png",
    option3 : "./public/src/img/salamecheDos.png"
}

