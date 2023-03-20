import React, { usestate } from 'react';
import { Formik } from 'formik';
import { TextField } from './Textfield';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'

const Register = () => {
  const validate = Yup.object({
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
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        Gender: '',
        Number: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        window.alert(values)
        window.alert('You have successfully registered')
      }}>
      {/* The above code is validating the input and printing it on window */}
      {Formik => (
        <div style={{
          color: "grey"
        }}>

          <form>
            <div className="container">
              <center>
                <div className="tittlee">
                  <span className="welcomee">Register</span>
                </div>
              </center>
              <hr />

              {/* firstName */}
              <label> First name </label>
              <TextField
                type="text"
                name="firstName"
                placeholder="First name"
                size={15}
                required="" />

              {/* lastName */}
              <label> Last name: </label>
              <TextField
                type="text"
                name="lastName"
                placeholder="Last name"
                size={15}
                required="" />

              {/* email */}
              <label htmlFor="email"><b>Email</b></label>
              <TextField
                type="email"
                name="email"
                placeholder="Enter Email"
                required="" />


              {/* password */}
              <label htmlFor="password"><b>Password</b></label>
              <TextField
                type="password"
                placeholder="Enter Password"
                name="password"
                required="" />


              {/* ReType */}
              <label htmlFor="confirmPassword"><b>Re-type Password</b></label>
              <TextField
                type="password"
                placeholder="Retype Password"
                name="confirmPassword"
                required="" />


              {/* Registerbutton */}
              <button type="submit" className="registerbtn">
                Register
              </button>
              <br />
              {/* back button */}
              <Link to="/" className="btn btn-dark mt-3 ml-3">Back</Link>
            </div>
          </form>
        </div>
      )}
    </Formik >
  )
}
export default Register
