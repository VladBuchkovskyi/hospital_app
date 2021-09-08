import Modal from '@js/modalClass.js';
import { chooseDoctor } from '@js/visit_form.js';
import {
  VisitTherapist,
  VisitDentist,
  VisitCardiologist,
} from '@js/visitClass';

export default function penetrated() {
  const visitModal = new Modal(
    'big',
    'Create a visit to the Doctor',
    chooseDoctor['tag']
  );
  console.log(visitModal);

  const createVisitBtn = document.querySelector('.create-visit-button');
  createVisitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    visitModal.modalOpen();
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
    });
}
