    const ecranBienvenue = document.getElementById("ecranBienvenue");
    const regles = document.getElementById("regles")

    const gameScreen = document.getElementById("ecranJeu");

    const startButton = document.getElementById("start-button");

    const buttonRegles = document.getElementById("buttonRegles")

    const selectionPerso = document.getElementById("selectionPerso")
    console.log(regles);
    

    window.addEventListener('load', function() {
        
        startButton.addEventListener("click", () => {
            ecranBienvenue.style.display = "none"
            regles.style.display = "block"
        });
        
        buttonRegles.addEventListener("click" , () => {
            regles.style.display = "none"
            selectionPerso.style.display = "flex"
        })
    });