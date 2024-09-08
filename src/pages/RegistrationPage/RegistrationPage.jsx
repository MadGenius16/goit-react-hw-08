import {ErrorMessage, Formik, Form, Field } from 'formik';
import css from './RegistrationPage.module.css'
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { apiRegister } from '../../redux/auth/operations';
import { selectAuthError } from '../../redux/auth/selectors';



const registerValidationSchema = Yup.object().shape({
  name: Yup
  .string()
  .required("Ім'я профілю обов'язкове")
  .min(2, "ім'я профілю має бути мінімум 3 символи")
  .max(50, "ім'я профілю має бути меньшим за 50 символів"),

  email: Yup
  .string()
  .email("Не коректна ел.адреса")
  .required("Електрона адреса є обов'язковим"),

  password: Yup
  .string()
  .min(8, "ім'я профілю має бути мінімум 3 символи")
  .max(16, "ім'я профілю має бути меньшим за 16 символів")
  .required("пароль є обов'язковим"),
})

const RegistrationPage = () => {
const dispatch = useDispatch();
const error = useSelector(selectAuthError)
const INITIAL_VALUES ={
  name: '',
  email: '', 
  password: '',
};
const handleSubmit = (values) => {
    dispatch(apiRegister(values))
};

  return (
    <Formik 
    initialValues={INITIAL_VALUES} 
    onSubmit={handleSubmit} 
    validationSchema={registerValidationSchema} >
      <Form className={css.form}>
        <label className={css.label} >
          <span>Name</span>
          <Field 
          className={css.field} 
          type="text" 
          name="name" 
          placeholder="Jacob Mercer"/>
          <ErrorMessage 
          className={css.errorText} 
          name="name" 
          component="span" />
        </label>

        <label className={css.label} >
          <span>Email</span>
          <Field 
          className={css.field} 
          type="text" 
          name="email" 
          placeholder="Jacob.example@mail.com"/>
          <ErrorMessage 
          className={css.errorText} 
          name="email" 
          component="span" />
        </label>
        
        <label className={css.label} >
          <span>Password</span>
          <Field 
          className={css.field} 
          type="password" 
          name="password" 
          placeholder="Enter password"/>
          <ErrorMessage 
          className={css.errorText} 
          name="password" 
          component="span" />
        </label>

        <button className={css.btnSubmit} type="Submit">Register</button>
        {error && <p className={css.errorText}>
        Login or password is incorrect{error}</p>}
      </Form>
    </Formik>
  )
}



export default RegistrationPage