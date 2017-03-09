import AFRAME from 'aframe';
import GamepadControls from './controls/gamepad-controls';
import physics from 'aframe-physics-system';
import extras from 'aframe-extras';
import checkControls from './controls/checkControls';
import changeSlide from './slides';

AFRAME.registerComponent('gamepad-controls', GamepadControls);


physics.registerAll();
extras.misc.registerAll();

document.addEventListener('DOMContentLoaded', () => {
  checkControls();

  window.addEventListener('gamepadbuttondown', (e) => {
    if (e.detail.index === 0) {
      changeSlide('next');
    }
    if (e.detail.index === 1) {
      changeSlide('previous');
    }
  });


  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 34) {
      changeSlide('next');
    }
    if (e.keyCode === 32) {
      changeSlide('next');
    }
    if (e.keyCode === 33) {
      changeSlide('previous');
    }
  });
});
