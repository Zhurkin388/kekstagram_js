const Slider = {
  MAX: 100,
  MIN: 0,
  STEP: 1,
};

let lastClass = '';

const effectRadioGroup = document.querySelector('.img-upload__effects');
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const imgPreview = document.querySelector('.img-upload__preview > img');
const effectLevelValue = document.querySelector('.effect-level__value');

effectLevel.classList.add('visually-hidden');


const effects = {
  none: () => {
    effectLevel.classList.add('visually-hidden');

    return 'none';
  },
  chrome: () => {
    effectLevel.classList.remove('visually-hidden');

    return `grayscale(${parseInt(effectLevelValue.value, 10) * 0.1})`;
  },
  sepia: () => {
    effectLevel.classList.remove('visually-hidden');

    return `sepia(${parseInt(effectLevelValue.value, 10) * 0.1})`;
  },
  marvin: () => {
    effectLevel.classList.remove('visually-hidden');

    return `invert(${Math.floor(effectLevelValue.value)}%)`;
  },
  phobos: () => {
    effectLevel.classList.remove('visually-hidden');

    return `blur(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01}px)`;
  },
  heat: () => {
    effectLevel.classList.remove('visually-hidden');

    return `brightness(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01})`;
  },
};

const onEffectRadioGroupClick = (evt) => {
  if(evt.target.classList.contains('effects__preview')) {
    if(lastClass != '') {
      imgPreview.classList.remove(lastClass);
    }

    effectLevelSlider.noUiSlider.set(100);
    let currentClass = evt.target.classList[1];
    lastClass = currentClass;

    imgPreview.classList.add(currentClass);
    imgPreview.style.filter = effects[currentClass.replace('effects__preview--', '')]();
  }
};

effectRadioGroup.addEventListener('click', onEffectRadioGroupClick);

window.noUiSlider.create(effectLevelSlider, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  connect: 'lower',
});

effectLevelSlider.noUiSlider.on('change', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();

  imgPreview.style.filter = effects[lastClass.replace('effects__preview--', '')]();
});

export{ effectLevel, lastClass };
