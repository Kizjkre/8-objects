const PLAYHEAD = document.getElementById('playhead');
const PERCENT = document.getElementById('percent');

let startTime = null;
const duration = 180;
let stopTime = false;

let progress = 0;

export const getProgress = () => progress;

const animate = timestamp => {
  if (startTime === null) {
    startTime = timestamp;
  }
  const elapsed = timestamp - startTime;
  progress = Math.min(elapsed / (1000 * duration), 1);
  PLAYHEAD.style.width = `${ progress * 100 }%`;

  PERCENT.textContent = `${ (progress * 100).toFixed(1) }%`;

  if (progress < 1 && !stopTime) {
    requestAnimationFrame(animate);
  }
};

export const start = () => {
  stop();
  stopTime = false;
  requestAnimationFrame(animate);
};

export const pause = () => {
  stopTime = true;
};

export const stop = () => {
  stopTime = true;
  startTime = null;
  progress = 0;
  PLAYHEAD.style.width = '0%';
  PERCENT.textContent = '0.0%';
};
