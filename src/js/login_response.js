export default function handleForSubmit(event) {
  console.log('test', event.target.closest('form'));
  event.preventDefault();
  const email_input = event.target.closest('form').elements.email;
  const email_value = email_input.value;
  const password_input = event.target.closest('form').elements.password;
  const password_value = password_input.value;

  getIn(email_value, password_value);
}

async function getIn(email, password) {
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
}
