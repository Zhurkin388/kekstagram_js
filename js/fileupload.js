import { effectLevel, lastClass } from './effect.js';

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

const fileUpload = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const scaleControl = document.querySelector('.scale__control--value');
const body = document.querySelector('body');

const buttonLeft = document.querySelector('.scale__control--smaller');
const buttonRigth = document.querySelector('.scale__control--bigger');
const imgPreview = document.querySelector('.img-upload__preview > img');
const cancel = document.querySelector('.img-upload__cancel');

const closeModal = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');

  fileUpload.value = '';
};

const resetSetting = () => {
  imgPreview.style = 'transform: scale(1.00)';
  imgPreview.style.filter = '';

  if(lastClass) {
    imgPreview.classList.remove(lastClass);

  }
  scaleControl.value = '100%'

  effectLevel.classList.add('visually-hidden');
};

fileUpload.addEventListener('change', () => {
  resetSetting();

  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

cancel.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', (evt) => {
  if(evt.key === Keys.ESC || evt.key === Keys.ESCAPE) {
    closeModal();
  }
});

buttonLeft.addEventListener('click', () => {
  let scale = parseInt(scaleControl.value, 10) - Scale.STEP;

  if (scale <= Scale.MIN) {
    scale = Scale.MIN;
  }
  scaleControl.value = scale + '%';

  scale = scale / 100;
  imgPreview.style.transform = 'scale(' + scale + ')';
});

buttonRigth.addEventListener('click', () => {
  let scale = parseInt(scaleControl.value, 10) + Scale.STEP;

  if (scale >= Scale.MAX) {
    scale = Scale.MAX;
  }

  scaleControl.value = scale + '%';

  scale = scale / 100;
  imgPreview.style.transform = 'scale(' + scale + ')';
});
