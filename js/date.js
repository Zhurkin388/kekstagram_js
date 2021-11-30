import {getRandomInt, getRandomArr} from './util.js';

const COUNT_PHOTO = 25;
const MAX_COUNT_COMMENTS = 10;

const DESCRIPTION = [
  'Отличное фото',
  'Классный вид',
  'Супер машина',
  'Клевый закат',
  'Оцените вид',
];

const LIKES = {
  MIN: 15,
  MAX: 200,
};

const NAME = [
  'Дима',
  'Саша',
  'Маша',
  'Таня',
  'Сема',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

let cards = [];

const addComents = () => {
  let comments = [];

  for (let i = 0; i < getRandomInt(0, MAX_COUNT_COMMENTS); i++) {
    comments.push(
      {
        id: i,
        avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
        message: getRandomArr(MESSAGE),
        name: getRandomArr(NAME),
      }
    );
  }

  return comments;
};

const addPhoto = () => {
  for (let i = 0; i < COUNT_PHOTO; i++) {
    cards.push(
      {
        id: i,
        url: `photos/${i + 1}.jpg`,
        description: getRandomArr(DESCRIPTION),
        likes: getRandomInt(LIKES.MIN, LIKES.MAX),
        comments: addComents(),
      }
    );
  }

  return cards;
};

addPhoto();

export {cards};
