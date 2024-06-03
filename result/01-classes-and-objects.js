/*
## Exercice 1 : Classes et Objets

**Objectif :** Comprendre la création de classes et d'objets.

### Consignes

1. Créez une classe `Voiture` avec les attributs `marque`, `modele`, `annee`, et `couleur`.
2. Ajoutez une méthode `afficherDetails` permettant d'afficher les caractéristiques de la `Voiture`. 
3. Créez une instance de cette classe et initialisez ses attributs.
4. Affichez les détails de la voiture.
*/
'use strict';

class cars {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  showDetails() {
    console.log(this.make, this.model, this.year, this.color);
  }
}

let myCar = new cars("Mercedes-Benz", "C63", "2014", "Grey");

myCar.showDetails();