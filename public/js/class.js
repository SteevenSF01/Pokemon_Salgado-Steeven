class Pokemon {
  constructor(nom, vie, attaque) {
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
  }
}

//! *************************** BULBIZARRE ***************************

export class Bulbizarre extends Pokemon {
  constructor(nom, vie, attaque, terre) {
    super(nom, vie, attaque);
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
    this.terre = terre;
  }
  végé_Griffe(adversaire) {
    if (this.terre == 4) {
      this.attaque = 160;
      adversaire.vie -= this.attaque;
      this.attaque = 0;
      this.terre = 0;
    } else {
        this.vie += 50
      console.log("impossible d'attaquer, pas assez de terre, vous , vous soignez ");
    }
  }
  fouet_Lianes(adversaire) {
    this.attaque = 50;
    adversaire.vie -= this.attaque;
    this.attaque = 0;
    if (this.terre < 4) {
        this.terre += 1;
      } else if (this.terre >= 4) {
        this.terre = 4;
      }
  
    // continue
    ("Daño: 50, Acción: Immobilise l'adversaire pendant un tour.");
  }
  racine_Mêlée(adversaire) {
    this.attaque = 30;
    adversaire.vie -= this.attaque;
    this.vie += 20;
    this.attaque = 0;
    if (this.terre < 4) {
      this.terre += 1;
    } else if (this.terre >= 4) {
      this.terre = 4;
    }
  }
  bombe_Acide(adversaire) {
    this.attaque = 70;
    adversaire.vie -= this.attaque;
    this.attaque = 0;
    if (this.terre < 4) {
      this.terre += 1;
    } else if (this.terre >= 4) {
      this.terre = 4;
    }
  }
}

//! ***************************** SALAMECHE ****************************

export class Salameche extends Pokemon {
  constructor(nom, vie, attaque, feu) {
    super(nom, vie, attaque);
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
    this.feu = feu;
  }
  flammèche(adversaire) {
    this.attaque = 60;
    adversaire.vie -= this.attaque;
    this.attaque = 0;

    if (this.feu < 4) {
      this.feu += 1;
    } else if (this.feu >= 4) {
      this.feu = 4;
    }
  }
  griffe(adversaire) {
    this.attaque = 40;
    adversaire.vie -= this.attaque;
    this.vie += 50;
    this.attaque = 0;
    if (this.feu < 4) {
      this.feu += 1;
    } else if (this.feu >= 4) {
      this.feu = 4;
    }
  }
  flamme_Ardente(adversaire) {
    if (this.feu == 4) {
      this.attaque = 150;
      adversaire.vie -= this.attaque;
      this.attaque = 0;
      this.feu = 0;
    } else {
        this.vie += 50
      console.log("impossible d'attaquer, pas assez de feu, vous vous soignez");
    }
  }
  queue_de_Fer(adversaire) {
    this.attaque = 50;
    adversaire.vie -= this.attaque;
    this.attaque = 0;
    if (this.feu < 4) {
      this.feu += 1;
    } else if (this.feu >= 4) {
      this.feu = 4;
    }
  }
}

//! *********************** CARAPUCE *********************

export class Carapuce extends Pokemon {
  constructor(nom, vie, attaque, eau) {
    super(nom, vie, attaque);
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
    this.eau = eau;
  }
  Pistolet_à_O(adversaire) {
    this.attaque = 70;
    adversaire.vie -= this.attaque;
    this.attaque = 0;

    if (this.eau < 4) {
      this.eau += 1;
    } else if (this.eau >= 4) {
      this.eau = 4;
    }
  }
  jet_d_Eau(adversaire) {
    this.attaque = 50;
    adversaire.vie -= this.attaque;
    this.attaque = 0;

    if (this.eau < 4) {
      this.eau += 1;
    } else if (this.eau >= 4) {
      this.eau = 4;
    }
  }
  coup_d_Boue(adversaire) {
    this.attaque = 40;
    adversaire.vie -= this.attaque;
    this.vie += 40;
    this.attaque = 0;

    if (this.eau < 4) {
      this.eau += 1;
    } else if (this.eau >= 4) {
      this.eau = 4;
    }
  }
  hydrocanon(adversaire) {
    if (this.eau == 4) {
      this.attaque = 150;
      adversaire.vie -= this.attaque;
      this.attaque = 0;
      this.eau = 0;
    }
    else{
        this.vie += 50  
        console.log("Pas assez d'eau, vous vous soignez")
    }
    ("Daño: 150, Acción: Attaque puissante mais nécessite un tour de recharge après utilisation.");
  }
}
