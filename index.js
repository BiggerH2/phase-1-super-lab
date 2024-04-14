// Write your classes hereclass Tree {
  constructor(species) {
    this.species = species;
  }

  static definition() {
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
}

class Deciduous extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Deciduous trees shed their leaves annually.`;
  }
}

class Evergreen extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Evergreens keep their leaves all year round.`;
  }
}

const oak = new Deciduous("Oak", "Oak Tree");
console.log(oak.species); // Output: Oak
console.log(oak.name); // Output: Oak Tree
console.log(Deciduous.definition()); // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.

const pine = new Evergreen("Pine", "Pine Tree");
console.log(pine.species); // Output: Pine
console.log(pine.name); // Output: Pine Tree
console.log(Evergreen.definition()); // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round.
