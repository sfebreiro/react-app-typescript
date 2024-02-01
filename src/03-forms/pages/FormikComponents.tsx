import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(10, 'Máximo diez caracteres')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('El correo no es válido')
                        .required('Requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Conditions must be accepted'),
                    jobType: Yup.string()
                        .notOneOf(['c++'], 'Esta opción no está disponible')
                        .required('Requerido')
                })
                }>

                {(formik) => (

                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span"/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span"/>

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="text" />
                        <ErrorMessage name="email" component="span"/>

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select" >
                            <option value="">Pick something</option>
                            <option value="java">Java</option>
                            <option value="ts">Typesript</option>
                            <option value="c++">C plus plus</option>
                            <option value="js">JavaScript</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span"/>

                        <label>
                            Terms & Conditions
                            <Field name="terms" type="checkbox" />
                        </label>
                        <ErrorMessage name="terms" component="span"/>

                        <button type="submit">
                            Submit
                        </button>
                    </Form>

                    )
                }

            </Formik>

        </div>
    )
}
