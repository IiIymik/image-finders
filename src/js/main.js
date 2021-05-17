import input from '../templates/partials/input.hbs';
import list from '../templates/partials/list-card.hbs';
import {getPhotos} from './apiService.js';     

const bodyEL = document.querySelector('body');
bodyEL.innerHTML = input();

const oprtion = {
    currentPageList: 1,
    query: "films",
}

getPhotos(oprtion).then(renderImages);

function renderImages(arrObj) {
    bodyEL.insertAdjacentHTML('beforeend', list(arrObj));
}