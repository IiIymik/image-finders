import input from '../templates/partials/input.hbs';
import list from '../templates/partials/list-card.hbs';
import ImageApiService from './apiService.js';
// import debounce from 'lodash.debounce';


const imageApiService = new ImageApiService();
const bodyEL = document.querySelector('body');
bodyEL.insertAdjacentHTML('afterbegin',input());

const formEl = document.getElementById('search-form');
const loadBtn = document.querySelector('.js-button');
const divCarsEl = document.querySelector('.js-card__list')


formEl.addEventListener('submit', onSearch);
loadBtn.addEventListener('click', onLoadMore)


// function renderImages(arrObj) {
//     console.log(arrObj)
//     bodyEL.insertAdjacentHTML('beforeend', list(arrObj));
// }

// function queryImg(e) {
//     const query = e.target.value;
//     let currentPageList = 1;
    
//     getPhotos(query,currentPageList).then(renderImages);
//     clearRender()
// }

// function clearRender() {
//     if (query = "") {
//         bodyEL.innerHTML = "";
//     }
// }

function onSearch(e) {
    e.preventDefault();
    
    imageApiService.query = e.currentTarget.elements.query.value;
    
    if(imageApiService.query === ''){
        return console.error('need riting');
    }
    imageApiService.resetPage();
    imageApiService.fetchArticles().then(appendImageMarcup);
}

function onLoadMore() {
    imageApiService.fetchArticles().then(appendImageMarcup);
}

function appendImageMarcup(arrImages) {
    // console.log(arrImages)
    divCarsEl.insertAdjacentHTML('beforeend', list(arrImages));
}

function clearImageContainer() {
    divCarsEl.innerHTML = "";
}