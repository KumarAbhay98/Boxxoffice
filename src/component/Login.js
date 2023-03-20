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
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    })
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                // this will print the values on console
                window.alert(values)
                window.alert("you have successfully login")
            }}
        >
            {Formik => (
                <div className="loginform">
                    <h1 className="loginn my-4 font-weight-bold .display-4 text-center" style={{
                        color:"red",
                    }}>Login</h1>
                    <Form >
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        {/* login button */}
                        <button type="Submit" className="registerbtn">Login</button>
                        {/* back button */}
                        <Link to="/" className="btn btn-dark mt-3">Back</Link>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
export default Login