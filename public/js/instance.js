import * as CLASS from "./class.js"
export let bulbizarre = new CLASS.Bulbizarre ("Bulbizarre", 1300 , 110, `Utilisation des pouvoirs végétaux.`,0)
export let salameche = new CLASS.Salameche("Salamèche", 1200, 130 , `Contrôle du feu ardent.`, 0)
export let carapuce = new CLASS.Carapuce("Carapuce",1250,110 ,` Maîtrise des attaques aquatiques.`,0)
export let personnages = [bulbizarre, carapuce, salameche]

//! Carapuce Stats
let carapuceStats = document.querySelectorAll(".carapuceStats")

carapuceStats[0].innerText += `${carapuce.vie} HP`
carapuceStats[1].innerText += `${carapuce.attaque} ATK`
carapuceStats[2].innerText += carapuce.specialite

//! Salameche Stats
let salamecheStats = document.querySelectorAll(".salamecheStats")

salamecheStats[0].innerText += `${salameche.vie} HP`
salamecheStats[1].innerText += `${salameche.attaque} ATK`
salamecheStats[2].innerText += salameche.specialite

//! Bulbizarre Stats
let bulbizarreStats = document.querySelectorAll(".bulbizarreStats")

bulbizarreStats[0].innerText += `${bulbizarre.vie} HP`
bulbizarreStats[1].innerText += `${bulbizarre.attaque} ATK`
bulbizarreStats[2].innerText += bulbizarre.specialite