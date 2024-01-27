import * as INSTANCE from "./instance.js";


export function startGame() {
  window.addEventListener("load", function () {
    INSTANCE.startButton.addEventListener("click", () => {
      INSTANCE.ecranBienvenue.style.display = "none";
      INSTANCE.regles.style.display = "block";
    });

    INSTANCE.buttonRegles.addEventListener("click", () => {
      INSTANCE.regles.style.display = "none";
      INSTANCE.selectionPerso.style.display = "flex";
    });
  });
}
