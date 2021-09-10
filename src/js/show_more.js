import Modal from '@js/modalClass.js';

export async function showMore(card, token) {
  const id = card.dataset.id;
  console.log(id);
  const response = await fetch(`https://ajax.test-danit.com/api/cards/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const item = await response.json();

  const cardInfo = item.content;
  console.log(cardInfo);

  const patientInfo = document.createElement('div');
  patientInfo.classList.add('patient-info');
  patientInfo.innerHTML = '';

  for (const [key, value] of Object.entries(cardInfo)) {
    console.log(key, ':', value);
    // console.log(`${key}: ${value}`);
    const string = document.createElement('p');
    string.classList.add('patient-info__string');
    string.innerText = `${key} : ${value}`;
    patientInfo.appendChild(string);
  }
  console.log(patientInfo);
  const visitModal = new Modal('big', 'Visit to the Doctor', patientInfo);
  console.log(visitModal);
  visitModal.modalOpen();
}
