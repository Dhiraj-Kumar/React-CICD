import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
export default function Register() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h2 className="text-center mt-3">Register</h2>
                    <Formik initialValues={{
                        firstname: '',
                        lastname: '',
                        city: '',
                        age: '',
                        email: '',
                        password: ''
                    }} onSubmit={(values) => {
                        fetch('http://localhost:9000/auth/register', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(values)
                        })
                            .then(res => res.json())
                            .then(data => alert(data.message))
                    }} validationSchema={yup.object().shape({
                        firstname: yup.string()
                            .required("First name is required"),
                        lastname: yup.string()
                            .required("Last name is required"),
                        city: yup.string()
                            .required("City is required"),
                        age: yup.string()
                            .required("Age is required"),
                        email: yup.string()
                            .required("Email is required")
                            .email("Invalid email address"),
                        password: yup.string()
                            .required("Password is required")
                            .min(6, "Password must have minimum 6 characters")
                    })}>
                        <Form>
                            <div className="mt-2">
                                <Field className="form-control" placeholder="First Name" name="firstname" />
                                <ErrorMessage name="firstname" className="text-danger" component="div" />
                            </div>
                            <div className="mt-2">
                                <Field className="form-control" placeholder="LastName" name="lastname" />
                                <ErrorMessage name="lastnamCity" className="text-danger" component="div" />
                            </div>
                            <div className="mt-2">
                                <Field className="form-control" placeholder="City" name="city" />
                                <ErrorMessage name="city" className="text-dangager" component="div" />
                            </div>
                            <div className="mt-2">
                                <Field className="form-control" placeholder="Age" name="age" />
                                <ErrorMessage name="age" className="text-danger" component="div" />
                            </div>
                            <div className="mt-2">
                                <Field className="form-control" placeholder="Email" name="email" />
                                <ErrorMessage name="email" className="text-danger" component="div" />
                            </div>
                            <div className="mt-2">
                                <Field type="password" className="form-control" placeholder="Password" name="password" />
                                <ErrorMessage name="password" className="text-danger" component="div" />
                            </div>

                            <div className="mt-2">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}
