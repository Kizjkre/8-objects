export const ASSETS = Object.freeze({
  PENCIL: ['pencil', 3],
  COIN: ['coin', 5],
  STICK: ['stick', 3],
  PAPER: ['paper', 3],
  VELCRO: ['velcro', 5],
  ROCK: ['rock', 3],
  CHESTNUT: ['chestnut', 5],
  MATCHBOX: ['matchbox', 3],
});

export const play = sound => {
  try {
    new Audio(`./assets/${ sound[0] }/${ Math.floor(Math.random() * sound[1]) + 1 }_norm.wav`).play();
  } catch {
    new Audio(`./assets/${ sound[0] }/${ Math.floor(Math.random() * sound[1]) + 1 }_norm.aiff`).play();
  }
};
