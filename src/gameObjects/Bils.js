class Bils {
  constructor(id, name, selected, sound) {
    this.id = id;
    this.name = name;
    this.selected = selected;
    this.sound = {
      activated: sound.activated,
      clicked: sound.clicked,
      duplicated: sound.duplicated,
    };
  }

  setName(newName) {
    this.name = newName;
  }

  getName() {
    return this.name;
  }
}

export default Bils;
