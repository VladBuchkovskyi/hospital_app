export default class TextArea {
  constructor(id, name, label, placeholder, rows, cols) {
    this.tag = TextArea.createTextAreaObj(
      id,
      name,
      label,
      placeholder,
      rows,
      cols
    );
  }

  static createTextAreaObj(id, name, label, placeholder, rows, cols) {
    this.textArea = document.createElement('textarea');
    this.textArea.setAttribute('id', id);
    this.textArea.setAttribute('name', name);
    this.textArea.setAttribute('placeholder', placeholder);
    this.textArea.setAttribute('rows', rows);
    this.textArea.setAttribute('cols', cols);
    this.label = document.createElement('label');
    this.label.setAttribute('for', id);
    this.label.innerText = label;

    this.wrapper = document.createElement('p');
    this.wrapper.appendChild(this.label);
    this.wrapper.appendChild(this.textArea);

    return this.wrapper;
  }
}
