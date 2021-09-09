import Select from '@js/components/form_select_class';
import Form from '@js/formClass';

export const chooseDoctor = new Form([
  new Select('doctor_choice', 'doctor_choice', 'Choose the doctor:', [
    'Therapist',
    'Dentist',
    'Cardiologist',
  ]),
]);
