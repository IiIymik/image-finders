import list from '../templates/partials/list-card.hbs';
import ImageApiService from './apiService.js';
import * as basicLightbox from 'basiclightbox';
import LoadMoreBTN from './load-more-btn';

const refs = {
    formEl: document.getElementById('search-form'),
    boxEl: document.querySelector('.js-card__list'),
}


const imageApiService = new ImageApiService();
const loadMoreBTN = new LoadMoreBTN({
    selector: ".js-button",
    hidden: true,  
})


refs.formEl.addEventListener('submit', onSearch);
loadMoreBTN.refs.button.addEventListener('click', disableAndFetch);

function onSearch(e) {
    e.preventDefault();
    
    imageApiService.query = e.currentTarget.elements.query.value;
    
    if (imageApiService.query === '') {
        clearContainer();
        loadMoreBTN.hide();
        return console.error('need riting');
    }

    loadMoreBTN.show();
    imageApiService.resetPage();
    clearContainer();
    disableAndFetch();
}

function disableAndFetch() {
    loadMoreBTN.disable();
    imageApiService.fetchArticles().then(appendImageMarcup);
}

function appendImageMarcup(arrImages) {
    loadMoreBTN.enable();
    refs.boxEl.insertAdjacentHTML('beforeend', list(arrImages));
    const imgLink = document.querySelectorAll('.gallery_item');
    imgLink.forEach(e => {
        e.addEventListener('click', openBigImg);
    });

    window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
});
}

function clearContainer() {
    refs.boxEl.innerHTML = "";
}

function openBigImg(e) {
    const currCard = e.currentTarget.children[0].childNodes[1].childNodes[1].children[0].currentSrc;
    const instance = basicLightbox.create(`
    <img src="${currCard}" width="800" height="600">
`);

    instance.show();
}
