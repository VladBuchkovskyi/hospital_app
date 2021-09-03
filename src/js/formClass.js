export default class Form {
  constructor(children) {
    this.tag = Form.createFormObj(children);
  }

  static createFormObj(children) {
    this.form = document.createElement('form');
    this.children = children;
    this.children.forEach((child) => {
      this.form.appendChild(child['tag']);
    });

    return this.form;
  }
}
