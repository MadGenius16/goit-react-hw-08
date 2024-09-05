import {ErrorMessage, Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css'
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const contactValidationSchema = Yup.object().shape({
  name: Yup
  .string()
  .required("Ім'я профілю обов'язкове")
  .min(2, "ім'я профілю має бути мінімум 3 символи")
  .max(50, "ім'я профілю має бути меньшим за 50 символів"),

  number: Yup
  .string()
  .matches(phoneRegExp, "Номер телефону має співпадати з форматом 'xxx-xx-xx'")
  .required("Номер телефону є обов'язковий"),
})

const ContactForm = () => {

const dispatch = useDispatch()

const handleSubmit = (values, actions) => {
  dispatch(addContact(values))
  actions.resetForm()
}

  return (
    <Formik 
    initialValues={{name: '', number: ''}} 
    onSubmit={handleSubmit} 
    validationSchema={contactValidationSchema} >
      <Form className={css.form}>
        <label className={css.label} >
          <span>Name</span>
          <Field 
          className={css.field} 
          type="text" 
          name="name" />
          <ErrorMessage 
          className={css.errorText} 
          name="name" 
          component="span" />
        </label>
        
        <label className={css.label} >
          <span>Number</span>
          <Field 
          className={css.field} 
          type="text" 
          name="number" />
          <ErrorMessage 
          className={css.errorText} 
          name="number" 
          component="span" />
        </label>

        <button className={css.btnSubmit} type="Submit">Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm