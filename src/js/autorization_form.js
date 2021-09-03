import Form from '@js/formClass.js';
import Input from '@js/components/form_input_class.js';
import Button from '@js/components/form_button_class.js';

export const logInForm = new Form([
  new Input('email', 'email', 'example@gmail.com', 'Enter your email:'),
  new Input('password', 'password', '*********', 'Enter your password:'),
  new Button('submit', 'login', 'login', 'Log In'),
]);
