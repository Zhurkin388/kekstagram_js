import './fileupload.js';
import './effect.js';
import './validation.js';
import { request } from './fetch.js';
import { showError } from './alert.js';

import {renderPhoto} from './add-picture.js';

const onSuccess = (data) => {
  renderPhoto(data.slice());
};

const onError = () => {
  showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть');
};

request(onSuccess, onError, 'GET');
