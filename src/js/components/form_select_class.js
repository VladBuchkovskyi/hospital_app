export default class Select {
  constructor(id, name, label, options) {
    this.tag = Select.createSelectObj(id, name, label, options);
  }

  static createSelectObj(id, name, label, options) {
    this.select = document.createElement('select');
    this.select.setAttribute('id', id);
    this.select.setAttribute('name', name);
    for (let i = 0; i < options.length; i++) {
      let option = document.createElement('option');
      option.setAttribute('value', options[i].toLowerCase());
      option.innerText = options[i];
      this.select.appendChild(option);
    }
    this.select.setAttribute('required', true);
    this.label = document.createElement('label');
    this.label.setAttribute('for', id);
    this.label.innerText = label;

    this.wrapper = document.createElement('p');
    this.wrapper.appendChild(this.label);
    this.wrapper.appendChild(this.select);

    return this.wrapper;
  }
}
