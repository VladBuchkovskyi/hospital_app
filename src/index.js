import '@scss/reset.css';
import '@scss/main.scss';
import '@scss/modal.scss';
import Modal from '@js/modalClass.js';
import Form from '@js/formClass.js';
import Input from '@js/components/form_input_class.js';

const test = new Modal('wrapper', 'small', 'Log In');
console.log(test);
const btn = document.querySelector('.log-in-button');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  test.modalOpen();
});

const logInForm = new Form(test, [
  new Input('email', 'email', 'example@gmail.com', 'Enter your email:'),
  new Input('password', 'password', '*********', 'Enter your password:'),
]);
