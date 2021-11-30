const getRandomInt = (min, max) => {
  if(min < 0 || max < 0) {
    return -1;
  }

  if(max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getLenStr = (str, len = 140) => {
  return str.length <= len;
};

const getRandomArr = (arr) => {
  const max = arr.length -1;
  const min = 0;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;;

  return arr[random];
};

export {getRandomInt, getLenStr, getRandomArr};
