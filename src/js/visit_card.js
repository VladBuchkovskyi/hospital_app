import { renderCard } from '@js/render_cards.js';

export default function createCard(modal, token) {
  const visitCardObj = {};

  console.log('create card function launched');
  const createCardBtn = document.querySelector('#create-visit');
  createCardBtn.addEventListener('click', (event) => {
    let formElements = event.target.closest('form').elements;
    let isEmpty = 0;
    for (const elem of formElements) {
      if (elem.id != 'create-visit') {
        isEmpty++;
        let id = elem.id;
        let value = elem.value;
        const isValidValue = value.trim() !== '';
        if (isValidValue) {
          visitCardObj[id] = value;
          isEmpty--;
        } else {
          elem.style.borderColor = 'red';
          elem.addEventListener('click', () => {
            elem.style.borderColor = 'black';
          });
        }
      }
    }
    if (!isEmpty) createVisitCard(modal, visitCardObj, token);
  });
}

async function createVisitCard(modal, obj, token) {
  const response = await fetch('https://ajax.test-danit.com/api/cards', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const card = await response.json();
  console.log(response.status);
  if (response.status === 200) {
    console.log('card for render');
    renderCard(card);
    modal.modalClose();
  }
}
