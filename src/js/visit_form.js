import Visit from '@js/visitClass';
import Input from '@js/components/form_input_class';
import Button from '@js/components/form_button_class';
import Select from '@js/components/form_select_class';
import TextArea from '@js/components/form_textarea_class';

export const visitDoctor = new Visit([
  new Input('text', 'goal', 'I am sick!', 'Enter the purpose of the visit:'),
  new TextArea(
    'short_info',
    'short_info',
    'Enter short information about vist',
    'Short Info is going...',
    '4',
    '50'
  ),
  new Select('urgency', 'urgency', 'Enter the urgency:', [
    'Urgency:',
    'normal',
    'priority',
    'emergency',
  ]),
  new Input('text', 'age', '64', 'Enter the age:'),
  new Input(
    'text',
    'name',
    'Alejandro Rodrigez',
    'Enter First name and Last name:'
  ),
  new TextArea(
    'comment',
    'comment',
    'Enter some comments',
    'Commets are going...',
    '2',
    '50'
  ),
  new Button('submit', 'create-visit', 'create-visit', 'Create Visit'),
]);
