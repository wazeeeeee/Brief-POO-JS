/*
## Exercice 2 : Encapsulation

**Objectif :** Appliquer le concept d'encapsulation.

### Consignes

1. Modifiez la classe `Voiture` pour que ses attributs soient privés.
2. Ajoutez des `getters` et des `setters` pour chaques attributs.
3. Créer une instance de `Voiture` et modifiez en la couleur.
*/
'use strict';

class cars {
  constructor(make, model, year, color) {
    this._make = make;
    this._model = model;
    this._year = year;
    this._color = color;
  }
  get make() {
    return this._make;
  }

  set make(newMake) {
    this._make = newMake;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    this._year = newYear;
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this._color = newColor;
  }
}

let myCars = new cars("Mercedes-Benz", "C63", "2014", "Grey");

console.log(myCars);