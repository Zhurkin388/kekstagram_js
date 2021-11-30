const body = document.querySelector('body');

const bigPicture = document.querySelector('.big-picture');
const cancel = bigPicture.querySelector('.big-picture__cancel');

// Временные функции
const countComments = document.querySelector('.social__comment-count');
countComments.classList.add('hidden');

const loaderComments = document.querySelector('.comments-loader');
loaderComments.classList.add('hidden');

// Вывод коментариев
const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');

const socialComments = document.querySelector('.social__comments');

const createComments = (comment) => {
  const commentTemplates = commentTemplate.cloneNode(true);

    commentTemplates.querySelector('.social__picture').src = comment.avatar;
    commentTemplates.querySelector('.social__picture').alt = comment.name;

    commentTemplates.querySelector('.social__text').textContent = comment.message;

    return commentTemplates;
};

const renderComment = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach(comment => {
    fragment.appendChild(createComments(comment));
  });

  socialComments.appendChild(fragment);
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  cancel.removeEventListener('click', closeModal)

  socialComments.innerHTML = '';
};

const show = (picture) => {
  body.classList.add('modal-open');

  bigPicture.querySelector('img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  cancel.addEventListener('click', closeModal)

  renderComment(picture.comments);

  bigPicture.classList.remove('hidden');
};

export {show};
