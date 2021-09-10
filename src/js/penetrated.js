import Modal from '@js/modalClass.js';
import { chooseDoctor } from '@js/visit_form.js';
import {
  VisitTherapist,
  VisitDentist,
  VisitCardiologist,
} from '@js/visitClass';
import createCard from '@js/visit_card.js';
import { deleteCard } from '@js/delete_card.js';
import filterCards from '@js/filter/filter.js';
import { showMore } from '@js/show_more.js';

export default function penetrated(token) {
  const visitModal = new Modal(
    'big',
    'Create a visit to the Doctor',
    chooseDoctor['tag']
  );
  console.log(visitModal);

  const createVisitBtn = document.querySelector('.create-visit-button');
  createVisitBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    visitModal.modalOpen();
    let form = visitModal.modalContent.querySelector('.form');
    const visitForm = new VisitTherapist().createForm();
    form.appendChild(visitForm);
    createCard(visitModal, token);
  });

  document
    .querySelector('#doctor_choice')
    .addEventListener('change', (event) => {
      const choice = event.target.value;
      let form = visitModal.modalContent.querySelector('.form');
      const addedForm = form.querySelector('#added_form');
      if (addedForm) addedForm.remove();
      if (choice == 'therapist') {
        const visitForm = new VisitTherapist().createForm();
        form.appendChild(visitForm);
      }
      if (choice == 'dentist') {
        const visitForm = new VisitDentist().createForm();
        form.appendChild(visitForm);
      }
      if (choice == 'cardiologist') {
        const visitForm = new VisitCardiologist().createForm();
        form.appendChild(visitForm);
      }
      createCard(visitModal, token);
    });

  // const allCards = document.querySelector('.visit-cards-row');
  // allCards.addEventListener('click', onCardClickDelete);
  const allCards = document.querySelector('.visit-cards-row');
  allCards.addEventListener('click', (event) => {
    console.log(event.target);
    const isButtonDeleteClicked =
      event.target.className === 'card-button-delete';
    const isButtonShowClicked = event.target.className === 'card-button-show';
    console.log(isButtonDeleteClicked);
    console.log(isButtonShowClicked);
    if (isButtonDeleteClicked) {
      const cardForDelete = event.target.closest('.card');
      deleteCard(cardForDelete, token);
    }
    if (isButtonShowClicked) {
      const cardForShowing = event.target.closest('.card');
      showMore(cardForShowing, token);
    }
  });

  filterCards(token);
}
