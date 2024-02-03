import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'Al menos dos caracteres')
                            .max(15, 'Máximo quince caracteres')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Revise el formato')
                            .required('Requerido'),
                        password1: Yup.string()
                            .min(6, 'Al menos seis caracteres')
                            .required('Requerido'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                            .required('Requerido'),
                    })
                }
            >
                {
                    ({handleReset}) => (

                        <Form>
                            <MyTextInput
                                label="Nombre"
                                name="name"
                                placeholder="Escribe tu nombre"
                            />

                            <MyTextInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Escribe tu correo"
                            />

                            <MyTextInput
                                label="Password"
                                name="password1"
                                type="password"
                                placeholder="******"
                            />

                            <MyTextInput
                                label="Confirm password"
                                name="password2"
                                type="password"
                                placeholder="******"
                            />

                            <button type="button">Create</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </Form>

                    )
                }

            </Formik>

        </div>
    )
}
