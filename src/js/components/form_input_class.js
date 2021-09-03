export default class Input {
  constructor(type, id, placeholder, label) {
    this.tag = Input.createInputObj(type, id, placeholder, label);
  }

  static createInputObj(type, id, placeholder, label) {
    this.input = document.createElement('input');
    this.input.setAttribute('id', id);
    this.input.setAttribute('type', type);
    this.input.setAttribute('placeholder', placeholder);
    this.input.setAttribute('required', '');
    this.label = document.createElement('label');
    this.label.setAttribute('for', id);
    this.label.innerText = label;

    this.wrapper = document.createElement('p');
    this.wrapper.appendChild(this.label);
    this.wrapper.appendChild(this.input);

    return this.wrapper;
  }
}
