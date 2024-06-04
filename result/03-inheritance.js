/*
## Exercice 3 : Héritage

**Objectif :** Comprendre l'héritage entre classes.

### Consignes

1. Créez une classe `Vehicule` avec les attributs `marque`, `modele`, et `annee`.
2. Faites en sorte que la classe `Voiture` hérite de la classe `Vehicule` et possède l'attribut `couleur` (non présent dans la classe `Vehicule`).
*/
'use strict';

class vehicle {
  constructor(make, model, year) {
    this._make = make;
    this._model = model;
    this._year = year;
  }
}

class cars extends vehicle {
  constructor(make, model, year, color) {
    super(make, model, year);
    this._color = color;
  }
}

let newCars = new cars("Mercedes-Benz", "C63", "2014", "Black");

console.log(newCars._make, newCars._model, newCars._year, newCars._color);