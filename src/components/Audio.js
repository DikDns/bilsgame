import React from "react";
// Import Music
// import "../assets/music/main.mp3";
// import "../assets/music/play.mp3";
// import "../assets/music/sfx/bils-activated.wav";
// import "../assets/music/sfx/bils-clicked.wav";
// import "../assets/music/sfx/bils-duplicated.wav";
// import "../assets/music/sfx/btn-clicked.wav";
// import "../assets/music/sfx/count.wav";
// import "../assets/music/sfx/lose.wav";
// import "../assets/music/sfx/win.wav";

function Audio(url, toggle) {
  const [audio] = React.useState(new Audio(url));
  const [playing, setPlaying] = React.useState(toggle ? true : false);

  React.useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  React.useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing];
}

export default Audio;
