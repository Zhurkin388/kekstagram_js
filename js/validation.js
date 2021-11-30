const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;
const MAX_COMMENT_LENGTH = 140;

const Escape = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

const inputHashtags = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

inputHashtags.addEventListener('input', () => {
  inputHashtags.setCustomValidity('');

  const inputHashtagsText = inputHashtags.value.toLowerCase().trim();

  if (!inputHashtagsText) {
    return;
  }

  const inputArray = inputHashtagsText.split(/\s+/);

  if (inputArray.length === 0) {
    return;
  }

  const isStartNotHashtags = inputArray.some((item) => {
    return item[0] !== '#';
  })

  if (isStartNotHashtags) {
    inputHashtags.setCustomValidity('Хештег начинается с символа # (решетки)');
  }

  const isOnlyLatticeHashtag = inputArray.some((item) => {
    return item === '#';
  });

  if (isOnlyLatticeHashtag) {
    inputHashtags.setCustomValidity('Хештег не может состоять только из решетки');
  }

  const isSplitSpaceHashtag = inputArray.some((item) => {
    return item.indexOf('#', 1) >= 1;
  });

  if (isSplitSpaceHashtag) {
    inputHashtags.setCustomValidity('Хештеги разделяются пробелами');
  }

  const isRepeatingHashtag = inputArray.some((item, i, arr) => {
    return arr.indexOf(item, i + 1) >= i + 1;
  });

  if (isRepeatingHashtag) {
    inputHashtags.setCustomValidity('Хештеги не должны повторяться');
  }

  const isOnlyLongHashtag = inputArray.some((item) => {
    return item.length > MAX_SYMBOLS;
  });

  if (isOnlyLongHashtag) {
    inputHashtags.setCustomValidity('Максимальная длина хештега 20 символов, включая решетку');
  }

  if (inputArray.length > MAX_HASHTAGS) {
    inputHashtags.setCustomValidity('Максимум 5 хештегов');
  }
});

const onEscapeDown = (evt) => {
  if(evt.key === Escape.ESC || evt.key === Escape.ESCAPE) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

inputHashtags.addEventListener('keydown', onEscapeDown);
inputComment.addEventListener('keydown', onEscapeDown);
