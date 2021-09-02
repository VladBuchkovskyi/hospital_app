export default class Modal {
  constructor(parentTag, size) {
    this.unlock = true;
    this.timeout = 800;
    this.parent = document.querySelector(`.${parentTag}`);
    let geometry = [];
    if (size === 'small') geometry = [400, 150];
    if (size === 'big') geometry = [500, 600];

    this.shader = document.createElement('div');
    this.shader.classList.add('shader');

    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.modal.style.width = `${geometry[0]}px`;
    this.modal.style.height = `${geometry[1]}px`;
    this.shader.appendChild(this.modal);
    this.modal.style.transition = 'all 0.8s ease 0s';
    this.modal.style.transform = 'translate(0px, -100%)';

    this.modalContent = document.createElement('div');
    this.modalContent.classList.add('modal-content');
    this.modal.appendChild(this.modalContent);

    this.closeBtn = document.createElement('button');
    this.closeBtn.classList.add('close-modal');
    this.closeBtn.setAttribute('type', 'submit');
    this.modalContent.appendChild(this.closeBtn);

    this.parent.appendChild(this.shader);
    this.shader.style.transition = 'all 0.8s ease 0s';

    document.addEventListener('click', (event) => {
      event.preventDefault();
      this.modalClose(event);
    });
  }

  modalOpen() {
    if (this.modal && this.unlock) {
      this.unlock = false;
      this.shader.style.opacity = 1;
      this.shader.style.zIndex = 1;
      this.modal.style.opacity = 1;
      this.modal.style.transform = 'translate(0px, 0px)';
      document.body.style.overflow = 'hidden';
    }
  }
  modalClose(event) {
    console.log(event);
    if (
      event.target == this.shader ||
      (event.target.closest('button') == this.closeBtn && !this.unlock)
    ) {
      this.unlock = true;
      this.shader.style.opacity = 0;
      this.shader.style.zIndex = -1;
      this.modal.style.opacity = 0;
      this.modal.style.transform = 'translate(0px, -100%)';
      document.body.style.overflow = 'visible';
    }
  }
}
