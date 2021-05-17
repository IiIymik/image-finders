import input from '../templates/partials/input.hbs';
import list from '../templates/partials/list-card.hbs';

const bodyEL = document.querySelector('body');
bodyEL.innerHTML = input();
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
bodyEL.insertAdjacentHTML('beforeend', list(arr));






