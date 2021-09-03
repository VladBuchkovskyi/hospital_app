export default class Button {
  constructor(type, id, name, content) {
    this.tag = Button.createButtonObj(type, id, name, content);
  }

  static createButtonObj(type, id, name, content) {
    this.btn = document.createElement('button');
    this.btn.setAttribute('id', id);
    this.btn.setAttribute('type', type);
    this.btn.setAttribute('name', name);
    this.btn.innerText = content;

    // this.wrapper = document.createElement('p');
    // this.wrapper.appendChild(this.input);

    return this.btn;
  }
}
