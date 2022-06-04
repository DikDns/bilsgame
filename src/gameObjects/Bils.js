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
    this.set = {
      name(newName) {
        this.name = newName;
      },
    };
    this.get = {
      name() {
        return this.name;
      },
    };
  }
}

export default Bils;
