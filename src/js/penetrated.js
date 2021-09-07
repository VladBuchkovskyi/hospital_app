import Modal from '@js/modalClass.js';
import { visitDoctor } from '@js/visit_form.js';

export default function penetrated() {
  const visitModal = new Modal(
    'big',
    'Create a visit to the Doctor',
    visitDoctor['tag']
  );
  console.log(visitModal);

  const createVisitBtn = document.querySelector('.create-visit-button');
  createVisitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    visitModal.modalOpen();
  });
}
