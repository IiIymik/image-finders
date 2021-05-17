import { BASE_URL, API_KEY } from './constants.js';

export const getPhotos = ({current, query}) => {
let currentPageList = current;
  return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${currentPageList}&per_page=12&key=${API_KEY}`).then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(arr => {return arr.hits}).catch(err => console.log(err));
}



