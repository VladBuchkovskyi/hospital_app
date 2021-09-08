import Input from '@js/components/form_input_class';
import Button from '@js/components/form_button_class';
import Select from '@js/components/form_select_class';
import TextArea from '@js/components/form_textarea_class';

export class Visit {
  constructor() {
    this.form = document.createElement('form');
    this.form.classList.add('form');
    this.form.setAttribute('id', 'added_form');
    this.goal = new Input(
      'text',
      'goal',
      'I am sick!',
      'Enter the purpose of the visit:'
    )['tag'];
    this.shortInfo = new TextArea(
      'short_info',
      'short_info',
      'Enter short information about vist',
      'Short Info is going...',
      '4',
      '50'
    )['tag'];
    this.urgency = new Select('urgency', 'urgency', 'Enter the urgency:', [
      'Urgency:',
      'normal',
      'priority',
      'emergency',
    ])['tag'];
    this.age = new Input('text', 'age', '64', 'Enter the age:')['tag'];

    this.name = new Input(
      'text',
      'name',
      'Alejandro Rodrigez',
      'Enter First name and Last name:'
    )['tag'];
    this.comment = new TextArea(
      'comment',
      'comment',
      'Enter some comments',
      'Commets are going...',
      '2',
      '50'
    )['tag'];
    this.createVisitBtn = new Button(
      'submit',
      'create-visit',
      'create-visit',
      'Create Visit'
    )['tag'];
  }
  createForm() {
    this.form.appendChild(this.goal);
    this.form.appendChild(this.shortInfo);
    this.form.appendChild(this.urgency);
    this.form.appendChild(this.age);
    this.form.appendChild(this.name);
    this.form.appendChild(this.comment);
    this.form.appendChild(this.createVisitBtn);
    return this.form;
  }
}

export class VisitTherapist extends Visit {
  constructor() {
    super();
  }
}

export class VisitDentist extends Visit {
  constructor() {
    super();
    this.date = new Input(
      'text',
      'date',
      '23.06.2019',
      'Enter the date of last visit:'
    )['tag'];
  }
  createForm() {
    this.form.appendChild(this.goal);
    this.form.appendChild(this.shortInfo);
    this.form.appendChild(this.urgency);
    this.form.appendChild(this.age);
    this.form.appendChild(this.date);
    this.form.appendChild(this.name);
    this.form.appendChild(this.comment);
    this.form.appendChild(this.createVisitBtn);
    return this.form;
  }
}

export class VisitCardiologist extends Visit {
  constructor() {
    super();
    this.pressure = new Input(
      'text',
      'pressure',
      '120/80',
      'Enter the blood tension:'
    )['tag'];
    this.massIndex = new Input(
      'text',
      'massIndex',
      '0.2',
      'Enter the mass index of body:'
    )['tag'];
    this.diseases = new Input(
      'text',
      'diseases',
      'Ischemic cardiomyopathy',
      'Enter the cardiovascular diseases:'
    )['tag'];
  }
  createForm() {
    this.form.appendChild(this.goal);
    this.form.appendChild(this.shortInfo);
    this.form.appendChild(this.urgency);
    this.form.appendChild(this.pressure);
    this.form.appendChild(this.massIndex);
    this.form.appendChild(this.diseases);
    this.form.appendChild(this.age);
    this.form.appendChild(this.name);
    this.form.appendChild(this.comment);
    this.form.appendChild(this.createVisitBtn);
    return this.form;
  }
}
