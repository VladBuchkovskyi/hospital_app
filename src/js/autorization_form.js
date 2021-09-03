import Form from '@js/formClass.js';
import Input from '@js/components/form_input_class.js';

export const logInForm = new Form([
  new Input('email', 'email', 'example@gmail.com', 'Enter your email:'),
  new Input('password', 'password', '*********', 'Enter your password:'),
]);
