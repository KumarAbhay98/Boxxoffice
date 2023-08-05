import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Register = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    Gender: '',
    Number: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    alert('You have successfully registered');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="container">
          <center>
            <div className="tittlee">
              <span className="welcomee">Register</span>
            </div>
          </center>
          <hr />

          {/* firstName */}
          <label> First name </label>
          <Field type="text" name="firstName" placeholder="First name" required="" />
          <ErrorMessage name="firstName" component="div" className="error-message" />

          {/* lastName */}
          <label> Last name: </label>
          <Field type="text" name="lastName" placeholder="Last name" required="" />
          <ErrorMessage name="lastName" component="div" className="error-message" />

          {/* email */}
          <label htmlFor="email"><b>Email</b></label>
          <Field type="email" name="email" placeholder="Enter Email" required="" />
          <ErrorMessage name="email" component="div" className="error-message" />

          {/* password */}
          <label htmlFor="password"><b>Password</b></label>
          <Field type="password" placeholder="Enter Password" name="password" required="" />
          <ErrorMessage name="password" component="div" className="error-message" />

          {/* ReType */}
          <label htmlFor="confirmPassword"><b>Re-type Password</b></label>
          <Field type="password" placeholder="Retype Password" name="confirmPassword" required="" />
          <ErrorMessage name="confirmPassword" component="div" className="error-message" />

          {/* Register button */}
          <button type="submit" className="registerbtn">
            Register
          </button>
          <br />
          {/* Back button */}
          <Link to="/" className="btn btn-dark mt-3 ml-3">Back</Link>
        </div>
      </Form>
    </Formik>
  );
};

export default Register;

