import { BASE_URL, API_KEY } from './constants.js';

// export const getPhotos = (query, currentPageList) => {
//   return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${currentPageList}&per_page=12&key=${API_KEY}`)
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       }
//     }).then(arr => {return arr.hits}).catch(err => console.log(err));
// }



export default class foundImageApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }

  fetchArticles() {
  const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(({hits}) => {
      this.incrementPage();
      return hits;
    })
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
   }
  
  set query(newQuery) {
    this.searchQuery = newQuery;
   }
}