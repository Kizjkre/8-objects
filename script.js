import * as sound from './sound.js';
import * as piece from './piece.js';

const copy = (btn, timeline) => {
  timeline.append(btn.firstElementChild.cloneNode(true));
};

const models = document.querySelectorAll('model-viewer');
models.forEach(model => {
  const min = 50;
  const max = 200;
  const speed = Math.floor(Math.random() * (max - min + 1)) + min;

  model.rotationPerSecond = `${ speed }%`;
});

const samples = document.querySelectorAll('.sample');
samples.forEach(sample => {
  sample.addEventListener('click', () => {
    sample.disabled = true;
  });
});

const reset = document.getElementById('reset');
const ticon = document.querySelectorAll('.ticon');
reset.addEventListener('click', () => {
  piece.stop();
  samples.forEach(button => {
    button.disabled = false;
  });
  ticon.forEach(icon => icon.innerHTML = '');
});


const chestnut = document.querySelector('#chestnut');
const tchestnut = document.querySelector('#tchestnut');
chestnut.addEventListener('click', () => {
  sound.play(sound.ASSETS.CHESTNUT);
  tchestnut.style.left = (piece.getProgress() * 100) + '%';
  copy(chestnut, tchestnut);

  piece.start();
});

const coin = document.querySelector('#coin');
const tcoin = document.querySelector('#tcoin');
coin.addEventListener('click', () => {
  sound.play(sound.ASSETS.COIN);
  tcoin.style.left = (piece.getProgress() * 100) + '%';
  copy(coin, tcoin);
});

const matchbox = document.querySelector('#matchbox');
const tmatchbox = document.querySelector('#tmatchbox');
matchbox.addEventListener('click', () => {
  sound.play(sound.ASSETS.MATCHBOX);
  tmatchbox.style.left = (piece.getProgress() * 100) + '%';
  copy(matchbox, tmatchbox);
});


const paper = document.querySelector('#paper');
const tpaper = document.querySelector('#tpaper');
paper.addEventListener('click', () => {
  sound.play(sound.ASSETS.PAPER);
  tpaper.style.left = (piece.getProgress() * 100) + '%';
  copy(paper, tpaper);
});


const pencil = document.querySelector('#pencil');
const tpencil = document.querySelector('#tpencil');
pencil.addEventListener('click', () => {
  sound.play(sound.ASSETS.PENCIL);
  tpencil.style.left = (piece.getProgress() * 100) + '%';
  copy(pencil, tpencil);
});


const rock = document.querySelector('#rock');
const trock = document.querySelector('#trock');
rock.addEventListener('click', () => {
  sound.play(sound.ASSETS.ROCK);
  trock.style.left = (piece.getProgress() * 100) + '%';
  copy(rock, trock);
});

const stick = document.querySelector('#stick');
const tstick = document.querySelector('#tstick');
stick.addEventListener('click', () => {
  sound.play(sound.ASSETS.STICK);
  tstick.style.left = (piece.getProgress() * 100) + '%';
  copy(stick, tstick);

  piece.pause();
});

const velcro = document.querySelector('#velcro');
const tvelcro = document.querySelector('#tvelcro');
velcro.addEventListener('click', () => {
  sound.play(sound.ASSETS.VELCRO);
  tvelcro.style.left = (piece.getProgress() * 100) + '%';
  copy(velcro, tvelcro);
});
