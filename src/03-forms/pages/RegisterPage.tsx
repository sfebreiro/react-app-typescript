import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const {
        formData, onChange, resetForm, isValidEmail, name, email, password1, password2
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log(formData);
        event.preventDefault();
    }

    return (
            <div>
                <h1>Register Page</h1>

                <form noValidate onSubmit={onSubmit} > 
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={onChange}
                        className={`${name.trim().length <= 0 && "has-error"}`}
                    />
                    {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className={`${!isValidEmail(email) && "has-error"}`}
                    />
                    {!isValidEmail(email) && <span>El email no es válido</span>}

                    <input
                        type="password"
                        placeholder="Password"
                        name="password1"
                        value={password1}
                        onChange={onChange}
                    />
                    {password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                    {password1.trim().length < 6 && password1.trim().length > 0 && <span>Mínimo 6 caracteres</span>}
                    <input
                        type="password"
                        placeholder="Repeat password"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                    />
                    {password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                    {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span>}

                    <button
                        type="button"
                    >
                        Create
                    </button>

                    <button
                        type="submit"
                        onClick={resetForm}
                    >
                        Reset Form
                    </button>
                </form>
            </div>
    )
}
