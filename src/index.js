import '@scss/reset.css';
import '@scss/main.scss';
import '@scss/modal.scss';
import '@scss/autorization_form.scss';
import Modal from '@js/modalClass.js';
import { logInForm } from '@js/autorization_form.js';

const autorizationModal = new Modal('small', 'Log In', logInForm['tag']);

const logInButton = document.querySelector('.log-in-button');
logInButton.addEventListener('click', (e) => {
  e.preventDefault();
  autorizationModal.modalOpen();
});
