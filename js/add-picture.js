import {cards} from './date.js';
import {show} from './big-picture.js';

const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const listPicture = document.querySelector('.pictures');

const rendersPhoto = (picture) => {
  const pictureTemplates = pictureTemplate.cloneNode(true);

  pictureTemplates.querySelector('img').src = picture.url;
  pictureTemplates.querySelector('.picture__likes').textContent = picture.likes;
  pictureTemplates.querySelector('.picture__comments').textContent = picture.comments.length;

  pictureTemplates.addEventListener('click', function(evt) {
    evt.preventDefault();

    show(picture);
  });

  return pictureTemplates;
};

const renderPhoto = () => {
  let fragment = document.createDocumentFragment();

  cards.forEach(card => {
    fragment.appendChild(rendersPhoto(card));
  });

  listPicture.appendChild(fragment);
};

export{renderPhoto};
