import Form from '@js/formClass.js';

export default class Visit extends Form {
  constructor(children) {
    super(children);
  }
  createJSONObject() {}
}

// export const visitDentist = new Form([
//   new Input('email', 'email', 'example@gmail.com', 'Enter your email:'),
//   new Input('password', 'password', '*********', 'Enter your password:'),
//   new Button('submit', 'login', 'login', 'Log In'),
// ]);
