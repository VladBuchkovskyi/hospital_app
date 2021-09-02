// import Post from '@models/Post'
// import json from './assets/json.json'
// import './styles/styles.css'
// import './styles/scss.scss'

import '@scss/reset.css';
import '@scss/main.scss';
import '@scss/modal.scss';
import Modal from '@js/modaClass.js';

const test = new Modal('wrapper', 'small');
const btn = document.querySelector('.log-in-button');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  test.modalOpen();
});
