/*
## Exercice 4 : Polymorphisme

**Objectif :** Utiliser le polymorphisme.

### Consignes

1. Créez une classe `Animal` avec une méthode `faireDuBruit`.
2. Créez des classes `Chien` et `Chat` qui héritent de `Animal` et redéfinissent la méthode `faireDuBruit`.
3. Utilisez le polymorphisme pour afficher que `Le chien aboie` et que `Le chat miaule` lors de l'appel de la méthode `faireDuBruit`.
*/
'use strict';

class animals {
  makeNoise() {}
}

class dogs extends animals {
  makeNoise() {
    console.log("The dog barks");
  }
}

class cats extends animals {
  makeNoise() {
    console.log("The cat meows");
  }
}

const theDog = new dogs();
const theCat = new cats();

theDog.makeNoise();
theCat.makeNoise();