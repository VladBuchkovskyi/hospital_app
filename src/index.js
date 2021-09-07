import '@scss/reset.css';
import '@scss/main.scss';
import '@scss/modal.scss';
import '@scss/form.scss';
import Modal from '@js/modalClass.js';
import { logInForm } from '@js/autorization_form.js';
import handleForSubmit from '@/js/login_response';
import penetrated from '@js/penetrated.js';

const autorizationModal = new Modal('small', 'Log In', logInForm['tag']);
console.log(autorizationModal);

const logInButton = document.querySelector('.log-in-button');
logInButton.addEventListener('click', (e) => {
  e.preventDefault();
  autorizationModal.modalOpen();
});

const form = document.querySelector('#login');
console.log(form);

console.log(form);

const startText = document.querySelector('.start-text');

form.addEventListener('click', (event) => {
  const answRequest = handleForSubmit(event);
  console.log(answRequest);
  answRequest.then((res) => {
    const token = res;
    if (token) {
      autorizationModal.modalClose();
      getItems(token).then((res) => {
        const allItems = res;
        console.log(allItems);
        if (!allItems.length) {
          startText.innerText = 'No items have been added';
        }
        logInButton.remove();
        const createVisitBtn = `<button type="submit" class="create-visit-button">Create Visit</button>`;
        document.querySelector('.button-wrapper').innerHTML = createVisitBtn;
        penetrated();
      });
    }
  });
});

async function getItems(token) {
  const resp = await fetch('https://ajax.test-danit.com/api/cards', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const items = await resp.json();
  return items;
}
