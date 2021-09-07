export default function handleForSubmit(event) {
  console.log('test', event.target.closest('.form'));
  event.preventDefault();
  const email_input = event.target.closest('.form').elements.email;
  const email_value = email_input.value;
  const password_input = event.target.closest('.form').elements.password;
  const password_value = password_input.value;

  const answRequest = getIn(
    email_input,
    email_value,
    password_input,
    password_value
  );
  console.log(answRequest);
  return answRequest;
}

async function getIn(emailField, email, passwordField, password) {
  const resp = await fetch('https://ajax.test-danit.com/api/cards/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  console.log(resp);
  const answ = await resp.text();
  console.log(answ);

  if (resp.status === 200) {
    console.log('Old Kinderhook');
    return answ;
    // return resp;
  } else {
    emailField.style.borderColor = 'red';
    passwordField.style.borderColor = 'red';
    emailField.value = '';
    passwordField.value = '';
    emailField.addEventListener('click', () => {
      emailField.style.borderColor = 'black';
      passwordField.style.borderColor = 'black';
    });
    passwordField.addEventListener('click', () => {
      emailField.style.borderColor = 'black';
      passwordField.style.borderColor = 'black';
    });
  }
}
