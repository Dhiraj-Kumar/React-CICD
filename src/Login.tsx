import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { appActions } from "./redux/appSlice";
import { useDispatch } from "react-redux";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h2 className="text-center mt-3">Login</h2>
                    <Formik initialValues={{
                        email: '',
                        password: ''
                    }} onSubmit={(values) => {
                        fetch('http://localhost:9000/auth/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(values)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.status == 401) {
                                    alert(data.message);
                                }
                                if (data.status == 200) {
                                    localStorage.setItem('token', data.access_token);                                    
                                    dispatch(appActions.login(data.userData.firstname));
                                    navigate("/profile");
                                }
                            })
                    }} validationSchema={yup.object().shape({
                        email: yup.string()
                            .required("Email is required")
                            .email("Invalid email address"),
                        password: yup.string()
                            .required("Password is required")
                            .min(6, "Password must have minimum 6 characters")
                    })}>
                        <Form>
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
