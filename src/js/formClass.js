export default class Form {
  constructor(parent, children) {
    this.parent = parent.modalContent;
    this.form = document.createElement('form');
    this.children = children;
    console.log(children);
    this.children.forEach((child) => {
      this.parent.appendChild(Object.values(child)[0]);
    });

    this.parent.appendChild(this.form);
  }
}
