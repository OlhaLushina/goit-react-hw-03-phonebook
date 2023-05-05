import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Form, Label, ErrorMessage, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';

/* Схема валідації */
const ContactSchema = Yup.object().shape({
  name: Yup.string('Must be a string')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string('Must be a string')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .max(50, 'Too Long!')
    .required('Required'),
});

/* Компонент ContactForm */
export const ContactForm = ({ onAdd }) => (
  <Formik
    initialValues={{ name: '', number: '' }}
    validationSchema={ContactSchema}
    onSubmit={(values, actions) => {
      onAdd({ id: nanoid(), ...values });
      actions.resetForm();
    }}
  >
    <Form>
      <Label htmlFor="name">Name</Label>
      <Field name="name" />
      <ErrorMessage name="name" component="div"></ErrorMessage>
      <Label htmlFor="number">Number</Label>
      <Field type="tel" name="number" />
      <ErrorMessage name="number" component="div"></ErrorMessage>
      <Button type="submit">Add contact</Button>
    </Form>
  </Formik>
);

/* Опис типів props */
ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
