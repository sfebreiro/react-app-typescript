import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';

export const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstract</h1>

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

                        <MyTextInput 
                            label="First Name" 
                            name="firstName" 
                            placeholder="Escribe tu nombre"
                        />

                        <MyTextInput 
                            label="Last Name" 
                            name="lastName" 
                            placeholder="Escribe tu apellido"
                        />

                        <MyTextInput 
                            label="Email address" 
                            name="email" 
                            type="email"
                            placeholder="Escribe tu email"
                        />

                        <MySelect name="jobType" label="Job Type" >
                            <option value="">Pick something</option>
                            <option value="java">Java</option>
                            <option value="ts">Typesript</option>
                            <option value="c++">C plus plus</option>
                            <option value="js">JavaScript</option>
                        </MySelect>

                        <MyCheckbox label="Terms & Conditions" name="terms" />

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
