import React from "react";
import bilsClickedSfx from "../assets/music/sfx/bils-clicked.wav";
import bilsActivatedSfx from "../assets/music/sfx/bils-activated.wav";
import bilsDuplicatedSfx from "../assets/music/sfx/bils-duplicated.wav";

class Bils {
  constructor(id, name, selected, sound) {
    this.id = id;
    this.name = name;
    this.selected = selected;
    this.doubled = false;
    this.sound = {
      activated: sound.activated,
      clicked: sound.clicked,
      duplicated: sound.duplicated,
    };
  }

  setDoubled(newDoubled) {
    this.doubled = newDoubled;
  }

  setName(newName) {
    this.name = newName;
  }

  getName() {
    return this.name;
  }

  setSelected(newSelected) {
    this.selected = newSelected;
  }

  getSelected() {
    return this.selected;
  }

  setSound(newSound) {
    this.sound = newSound;
  }

  getSound() {
    return this.sound;
  }
}

const bilsSound = {
  clicked: new Audio(bilsClickedSfx),
  activated: new Audio(bilsActivatedSfx),
  duplicated: new Audio(bilsDuplicatedSfx),
};

const spawnBils = (count) => {
  const bils = [];

  for (let i = 0; i < count; i++) {
    let random = Math.round(Math.random() * 10);
    random = random === 10 ? --random : random;
    bils.push(new Bils(i, random, false, bilsSound));
  }
  return bils;
};

const DisplayBils = ({ gameObject, handleClick, handleAnimationEnd }) => {
  return (
    <div
      id={gameObject.id}
      className={`bils my-2 ${
        gameObject.selected ? `shake bg-info text-white` : `shake`
      }`}
      onClick={(event) => handleClick(event, gameObject)}
      onAnimationEnd={(event) => handleAnimationEnd(event, gameObject)}
    >
      <span
        className={`h-100 fw-bold d-flex justify-content-center align-items-center`}
      >
        {gameObject.name}
      </span>
    </div>
  );
};

export { Bils, spawnBils, DisplayBils };
