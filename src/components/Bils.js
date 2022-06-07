class BilsObj {
  constructor(count = [], names = 1) {
    if (names !== undefined && names.length < 1) {
      this.names = names;
    } else {
      this.names = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    if (count >= 1) {
      this.count = count;
      this.bils = this.randomizeBils(count);
    } else {
      this.count = 5;
      this.bils = this.randomizeBils(count);
    }
  }

  randomizeBils(count = this.count, id = null) {
    if (id === null && count >= 1) {
      const arrBils = [];
      const maxName = this.names.length - 1;
      for (let i = 0; i < count; i++) {
        let randomNum = Math.round(Math.random() * maxName);
        randomNum = randomNum === maxName ? --randomNum : randomNum;
        arrBils.push(new Bil(i, randomNum));
      }
      return arrBils;
    } else {
      for (let i = 0; i < count; i++) {
        console.log(i);
      }
    }
  }
}

class Bil {
  constructor(id, name, selected = false, duplicated = false) {
    this.id = id;
    this.name = name;
    this.selected = selected;
    this.duplicated = duplicated;
  }
}

export { BilsObj, Bil };
