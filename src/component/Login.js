import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { TextField } from './Textfield';
import * as Yup from 'yup';

const Login = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        // Print the values on console and show an alert
        console.log(values);
        alert('You have successfully logged in');
      }}
    >
      {Formik => (
        <div className="loginform">
          <h1 className="loginn my-4 font-weight-bold .display-4 text-center" style={{ color: "red" }}>Login</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button type="submit" className="registerbtn">Login</button>
            <Link to="/" className="btn btn-dark mt-3">Back</Link>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Login;
